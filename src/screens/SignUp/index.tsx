import { Box, Center, Heading, ScrollView, Text } from "native-base";

import LogoSvg from "@assets/logo.svg";
import { Avatar } from "@components/Avatar";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

export const SignUp = () => {
  return (
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

          <Input placeholder="Nome" />
          <Input placeholder="E-mail" />
          <Input placeholder="Telefone" />
          <Input placeholder="Senha" password />
          <Input placeholder="Confirmar senha" password />

          <Button w="full" label="Criar" bgColor="black" mt={4} />

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
  );
};
