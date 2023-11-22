import { Button } from "@components/Button";
import { ScreenHeader } from "@components/ScreenHeader";
import { useNavigation } from "@react-navigation/native";
import { ProductDetailsTemplate } from "@templates/ProductDetailsTemplate";
import { HStack, Text, VStack } from "native-base";
import { ArrowLeft, WhatsappLogo } from "phosphor-react-native";

export const ProductDetails = () => {
  const navigation = useNavigation();

  return (
    <VStack flex={1} py={8}>
      <ScreenHeader
        leftButton={{
          icon: <ArrowLeft size={24} color="black" />,
          onPress: () => navigation.goBack(),
        }}
      />
      <ProductDetailsTemplate />
      <HStack
        h="22"
        bgColor="white"
        alignItems="center"
        justifyContent="space-between"
        px="6"
      >
        <HStack alignItems="baseline">
          <Text fontSize="14px" fontWeight="bold" fontFamily="heading">
            R$
          </Text>
          <Text fontSize="24" fontWeight="bold" fontFamily="heading">
            120,00
          </Text>
        </HStack>
        <Button
          leftIcon={<WhatsappLogo size={16} color="white" weight="fill" />}
          label="Entrar em contato"
        />
      </HStack>
    </VStack>
  );
};
