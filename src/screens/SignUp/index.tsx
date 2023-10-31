import {
  Box,
  Center,
  Heading,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  VStack,
} from "native-base";

import LogoSvg from "@assets/logo.svg";
import { Avatar } from "@components/Avatar";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Controller, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface SignUpForm {
  name: string;
  email: string;
  phone: string;
  password: string;
  passwordConfirmation: string;
}

const signUpSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().required(),
  phone: yup.string().required(),
  password: yup.string().required(),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")])
    .required(),
});

export const SignUp = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    setFocus,
  } = useForm({ resolver: yupResolver(signUpSchema) });

  const handleSignUp = (form: SignUpForm) => {
    console.log("SIGN UP FORM: ", form);
  };

  return (
    <KeyboardAvoidingView>
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

            <Avatar.Root mb={4}>
              <Avatar.Image />
              <Avatar.ButtonChange />
            </Avatar.Root>

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
                    onSubmitEditing={() => setFocus("phone")}
                    errorMessage={errors.email?.message}
                  />
                )}
              />
              <Controller
                name="phone"
                control={control}
                render={({ field: { value, onChange, ref } }) => (
                  <Input
                    ref={ref}
                    value={value}
                    onChangeText={onChange}
                    placeholder="Telefone"
                    returnKeyType="next"
                    onSubmitEditing={() => setFocus("password")}
                    errorMessage={errors.phone?.message}
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
              />
            </Center>
          </Center>
        </ScrollView>
      </Box>
    </KeyboardAvoidingView>
  );
};
