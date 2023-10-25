import { Center, Heading, Text, VStack } from "native-base";

import LogoSvg from "@assets/logo.svg";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

export const SignIn = () => {
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
          <Input placeholder="E-mail" />
          <Input placeholder="Senha" password />
          <Button w="full" label="Entrar" />
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
        />
      </Center>
    </VStack>
  );
};
