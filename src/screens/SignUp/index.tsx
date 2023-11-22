import {
  Box,
  Center,
  FormControl,
  Heading,
  ScrollView,
  Text,
  useToast,
  VStack,
} from "native-base";

import LogoSvg from "@assets/logo.svg";
import { Avatar } from "@components/Avatar";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Controller, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "@hooks/useAuth";
import { useNavigation } from "@react-navigation/native";
import { AppRoutesStackNavigatorProps } from "@routes/App.routes";
import { api } from "@services/api";
import { formatErrorMessage } from "@utils/common";
import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import * as yup from "yup";

interface SignUpForm {
  avatar: string;
  name: string;
  email: string;
  tel: string;
  password: string;
  passwordConfirmation: string;
}

const signUpSchema = yup.object({
  avatar: yup.string().required("Adicione uma imagem para o usuário"),
  name: yup.string().required("Informe um nome de usuário"),
  email: yup
    .string()
    .email("Informe um e-mail válido")
    .required("Informe um e-mail"),
  tel: yup.string().required("Informe seu número de telefone"),
  password: yup
    .string()
    .min(8, "Informe pelo menos 8 dígitos")
    .required("Informe uma senha"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas não conferem")
    .required("Informe a confirmação da senha"),
});

export const SignUp = () => {
  const toast = useToast();
  const {
    control,
    formState: { errors },
    handleSubmit,
    setFocus,
  } = useForm({ resolver: yupResolver(signUpSchema) });
  const { signIn } = useAuth();
  const navigation = useNavigation<AppRoutesStackNavigatorProps>();

  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async (form: SignUpForm) => {
    console.log("SIGN UP FORM: ", form);
    setIsLoading(true);
    const { avatar, passwordConfirmation, ...user } = form;

    const userFormData = new FormData();

    Object.entries(form).map(([key, value]) => {
      userFormData.append(key, value);
    });

    const fileExtension = form.avatar.split(".").pop();
    const photoFile = {
      name: `${user.name.split(" ").join("_")}.${fileExtension}`.toLowerCase(),
      uri: avatar,
      type: `image/${fileExtension}`,
    } as any;
    userFormData.append("avatar", photoFile);

    try {
      await api.post("/users", userFormData);

      const { email, password } = user;

      signIn(email, password);
    } catch (error) {
      const title = formatErrorMessage(
        error,
        "Não foi possível criar sua conta. Tente novamente mais tarde.",
      );

      toast.show({
        title: title,
        placement: "top",
        bgColor: "red.500",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangePhoto = async (onChange: (path: string) => void) => {
    const photoSelected = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      aspect: [4, 4],
      allowsEditing: true,
      allowsMultipleSelection: false,
    });

    if (photoSelected.canceled) {
      return;
    }

    if (photoSelected.assets[0].uri) {
      const photoInfo = await FileSystem.getInfoAsync(
        photoSelected.assets[0].uri,
        { size: true },
      );

      if (
        photoInfo.exists &&
        photoInfo.size &&
        photoInfo.size / 1024 / 1024 > 5
      ) {
        return toast.show({
          title: "Essa imagem é muito grande. Escolha uma de até 5 MB.",
          placement: "top",
          bgColor: "red.500",
        });
      }

      const photoSelectedData = photoSelected.assets[0].uri;

      onChange(photoSelectedData);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Box bgColor="gray.100">
        <ScrollView>
          <Center flex={1} px={12} py={16} justifyContent="space-between">
            <LogoSvg width={60} height={40} />
            <Heading fontFamily="heading" mt={4} mb={2}>
              Boas vindas!
            </Heading>
            <Text textAlign="center" color="gray.500" mb={8}>
              Crie sua conta e use o espaço para comprar itens variados e vender
              seus produtos.
            </Text>

            <Controller
              name="avatar"
              control={control}
              render={({ field: { value, onChange } }) => (
                <FormControl
                  isInvalid={!!errors.avatar?.message}
                  alignItems="center"
                  mb="4"
                >
                  <Avatar.Root>
                    <Avatar.Image uri={value} />
                    <Avatar.ButtonChange
                      onPress={() => handleChangePhoto(onChange)}
                    />
                  </Avatar.Root>
                  <FormControl.ErrorMessage _text={{ color: "red.500" }}>
                    {errors.avatar?.message}
                  </FormControl.ErrorMessage>
                </FormControl>
              )}
            />

            <VStack w="full" space="4">
              <Controller
                name="name"
                control={control}
                render={({ field: { value, onChange, ref } }) => (
                  <Input
                    ref={ref}
                    value={value}
                    onChangeText={onChange}
                    placeholder="Nome"
                    returnKeyType="next"
                    onSubmitEditing={() => setFocus("email")}
                    errorMessage={errors.name?.message}
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                render={({ field: { value, onChange, ref } }) => (
                  <Input
                    ref={ref}
                    value={value}
                    onChangeText={onChange}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    placeholder="E-mail"
                    returnKeyType="next"
                    onSubmitEditing={() => setFocus("tel")}
                    errorMessage={errors.email?.message}
                  />
                )}
              />
              <Controller
                name="tel"
                control={control}
                render={({ field: { value, onChange, ref } }) => (
                  <TextInputMask
                    // ref={ref}
                    type="cel-phone"
                    value={value}
                    onChangeText={onChange}
                    placeholder="Telefone"
                    keyboardType="number-pad"
                    returnKeyType="next"
                    onSubmitEditing={() => setFocus("password")}
                    customTextInput={Input}
                    customTextInputProps={{
                      ref,
                      errorMessage: errors.tel?.message,
                    }}
                  />
                )}
              />
              <Controller
                name="password"
                control={control}
                render={({ field: { value, onChange, ref } }) => (
                  <Input
                    ref={ref}
                    value={value}
                    onChangeText={onChange}
                    placeholder="Senha"
                    password
                    returnKeyType="next"
                    onSubmitEditing={() => setFocus("passwordConfirmation")}
                    errorMessage={errors.password?.message}
                  />
                )}
              />
              <Controller
                name="passwordConfirmation"
                control={control}
                render={({ field: { value, onChange, ref } }) => (
                  <Input
                    ref={ref}
                    value={value}
                    onChangeText={onChange}
                    placeholder="Confirmar senha"
                    password
                    returnKeyType="done"
                    onSubmitEditing={handleSubmit(handleSignUp)}
                    errorMessage={errors.passwordConfirmation?.message}
                  />
                )}
              />
            </VStack>

            <Button
              w="full"
              label="Criar"
              bgColor="black"
              mt={6}
              onPress={handleSubmit(handleSignUp)}
              isLoading={isLoading}
            />

            <Center w="full" py="12" mt="14">
              <Text fontSize="14px" mb="4">
                Já tem uma conta?
              </Text>
              <Button
                w="full"
                label="Ir para o login"
                bgColor="gray.300"
                _text={{
                  color: "black",
                  fontSize: 16,
                  fontWeight: "bold",
                  fontFamily: "heading",
                }}
                onPress={() => navigation.navigate("sign-in")}
              />
            </Center>
          </Center>
        </ScrollView>
      </Box>
    </KeyboardAvoidingView>
  );
};
