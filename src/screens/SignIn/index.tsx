import { Center, Heading, Text, useToast, VStack } from "native-base";

import LogoSvg from "@assets/logo.svg";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";

import { useAuth } from "@hooks/useAuth";
import { useNavigation } from "@react-navigation/native";
import { AppRoutesStackNavigatorProps } from "@routes/App.routes";
import { formatErrorMessage } from "@utils/common";
import * as yup from "yup";

interface SignInForm {
  email: string;
  password: string;
}

const signInSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required().min(8),
});

export const SignIn = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    setFocus,
  } = useForm<SignInForm>({
    resolver: yupResolver(signInSchema),
  });
  const { isLoadingUserStorageData, signIn } = useAuth();
  const toast = useToast();
  const navigation = useNavigation<AppRoutesStackNavigatorProps>();

  const handleSignIn = async ({ email, password }: SignInForm) => {
    try {
      await signIn(email, password);
    } catch (error) {
      const title = formatErrorMessage(
        error,
        "Não foi possível acessar sua conta. Tente novamente mais tarde",
      );

      toast.show({
        title: title,
        placement: "top",
        bgColor: "red.500",
      });
    }
  };

  return (
    <VStack flex={1}>
      <VStack
        bgColor="gray.200"
        h="75%"
        borderBottomLeftRadius={24}
        borderBottomRightRadius={24}
        paddingY={16}
        paddingX={12}
        justifyContent="flex-end"
      >
        <Center>
          <LogoSvg width={100} height={65} />
          <Heading>marketspace</Heading>
          <Text mb={30} fontFamily="body" color="gray.600">
            Seu espaço de compra e venda
          </Text>

          <Text mb={4}>Acesse sua conta</Text>
          <Controller
            name="email"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                mb="4"
                value={value}
                onChangeText={onChange}
                autoCapitalize="none"
                placeholder="E-mail"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => setFocus("password")}
                errorMessage={errors.email?.message}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field: { value, onChange, ref } }) => (
              <Input
                ref={ref}
                mb="8"
                value={value}
                onChangeText={onChange}
                placeholder="Senha"
                password
                returnKeyType="done"
                onSubmitEditing={handleSubmit(handleSignIn)}
                errorMessage={errors.password?.message}
              />
            )}
          />
          <Button
            w="full"
            label="Entrar"
            onPress={handleSubmit(handleSignIn)}
          />
        </Center>
      </VStack>
      <Center flex={1} px={12}>
        <Text>Ainda não tem acesso?</Text>
        <Button
          w="full"
          mt="4"
          label="Criar uma conta"
          bgColor="gray.300"
          _text={{
            color: "black",
            fontWeight: "bold",
            fontFamily: "heading",
          }}
          onPress={() => navigation.navigate("sign-up")}
          isLoading={isLoadingUserStorageData}
        />
      </Center>
    </VStack>
  );
};
