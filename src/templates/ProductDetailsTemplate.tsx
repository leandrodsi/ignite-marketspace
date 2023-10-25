import { Avatar } from "@components/Avatar";
import { ImageCarousel } from "@components/Carousel";
import { PaymentType } from "@components/PaymentType";
import {
  Center,
  HStack,
  Heading,
  ScrollView,
  Text,
  VStack,
  View,
} from "native-base";
import {
  Bank,
  Barcode,
  CreditCard,
  Money,
  QrCode,
} from "phosphor-react-native";

type ProductDetailsTemplateProps = { active?: boolean };

export const ProductDetailsTemplate = ({
  active,
}: ProductDetailsTemplateProps) => {
  return (
    <View flex={1}>
      <ScrollView _contentContainerStyle={{ pb: 12, bgColor: "gray.100" }}>
        <ImageCarousel
          active={active}
          data={[
            "https://melhorbike.com/wp-content/uploads/as-10-bicicletas-mais-caras.png",
            "https://melhorbike.com/wp-content/uploads/as-10-bicicletas-mais-caras.png",
            "https://melhorbike.com/wp-content/uploads/as-10-bicicletas-mais-caras.png",
          ]}
        />

        <VStack px="6" pt="5">
          <HStack>
            <Avatar.Root w={6} h={6}>
              <Avatar.Image />
            </Avatar.Root>
            <Text ml="2">Makenna Baptista</Text>
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
              NOVO
            </Text>
          </Center>

          <HStack justifyContent="space-between" mt="2">
            <Heading fontSize="20" fontWeight="bold" fontFamily="heading">
              Bicicleta
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
                120,00
              </Text>
            </HStack>
          </HStack>

          <Text fontSize="14" color="gray.800">
            Cras congue cursus in tortor sagittis placerat nunc, tellus arcu.
            Vitae ante leo eget maecenas urna mattis cursus. Mauris metus amet
            nibh mauris mauris accumsan, euismod. Aenean leo nunc, purus iaculis
            in aliquam.
          </Text>

          <HStack mt="6">
            <Text fontSize="14" fontWeight="bold" fontFamily="heading">
              Aceita troca?
            </Text>
            <Text fontSize="14">Sim</Text>
          </HStack>

          <Text fontSize="14" fontWeight="bold" fontFamily="heading" mt="4">
            Meios de pagamento:
          </Text>
          <VStack mt="2" space="1">
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
    </View>
  );
};
