import { Avatar } from "@components/Avatar";
import { ImageCarousel } from "@components/Carousel";
import { PaymentType } from "@components/PaymentType";
import { Center, Heading, HStack, ScrollView, Text, VStack } from "native-base";
import {
  Bank,
  Barcode,
  CreditCard,
  Money,
  QrCode,
} from "phosphor-react-native";

type ProductDetailsTemplateProps = { product: any; active?: boolean };

export const ProductDetailsTemplate = ({
  product,
  active,
}: ProductDetailsTemplateProps) => {
  return (
    <VStack flex={1}>
      <ScrollView _contentContainerStyle={{ pb: 12, bgColor: "gray.100" }}>
        <ImageCarousel active={active} data={product.images} />

        <VStack px="6" pt="5">
          <HStack>
            <Avatar.Root w={6} h={6}>
              <Avatar.Image source={product.seller.image} />
            </Avatar.Root>
            <Text ml="2">{product.seller.name}</Text>
          </HStack>

          <Center
            bgColor="gray.300"
            px="2"
            borderRadius="full"
            h="17px"
            w="16"
            mt="6"
          >
            <Text fontSize="10" fontWeight="bold" fontFamily="heading">
              {product.is_new}
            </Text>
          </Center>

          <HStack justifyContent="space-between" mt="2">
            <Heading fontSize="20" fontWeight="bold" fontFamily="heading">
              {product.name}
            </Heading>
            <HStack alignItems="baseline">
              <Text
                fontSize="14"
                color="blue.500"
                fontWeight="bold"
                fontFamily="heading"
                mr="1"
              >
                R$
              </Text>
              <Text
                fontSize="20"
                color="blue.500"
                fontWeight="bold"
                fontFamily="heading"
              >
                {product.value}
              </Text>
            </HStack>
          </HStack>

          <Text fontSize="14" color="gray.800">
            {product.description}
          </Text>

          <HStack mt="6">
            <Text fontSize="14" fontWeight="bold" fontFamily="heading">
              Aceita troca?
            </Text>
            <Text fontSize="14">{product.accept_trade}</Text>
          </HStack>

          <Text fontSize="14" fontWeight="bold" fontFamily="heading" mt="4">
            Meios de pagamento:
          </Text>
          <VStack mt="2" space="1">
            {/* {product.} */}
            <PaymentType icon={<Barcode size={18} />} label="boleto" />
            <PaymentType icon={<QrCode size={18} />} label="pix" />
            <PaymentType icon={<Money size={18} />} label="dinheiro" />
            <PaymentType
              icon={<CreditCard size={18} />}
              label="cartão de crédito"
            />
            <PaymentType icon={<Bank size={18} />} label="depósito bancário" />
          </VStack>
        </VStack>
      </ScrollView>
    </VStack>
  );
};
