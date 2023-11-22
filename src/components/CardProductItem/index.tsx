import { useNavigation } from "@react-navigation/native";
import { AuthStackRoutesNavigatorProps } from "@routes/Stack.routes";
import { Box, HStack, Image, Pressable, Text, VStack } from "native-base";

export type Product = {
  id: string;
  photo: string[];
  kind: string;
  title: string;
  price: number;
  seller: {
    name: string;
    photo: string;
  };
};

type CardProductItemProps = {
  product: Product;
};

export const CardProductItem = ({ product }: CardProductItemProps) => {
  const navigation = useNavigation<AuthStackRoutesNavigatorProps>();

  return (
    <VStack flex={1} mb={6}>
      <Pressable onPress={() => navigation.navigate("product-details")}>
        <Image
          source={{ uri: product.photo[0] }}
          alt={`Foto do produto ${product.title}`}
          w="full"
          h={24}
          borderRadius="md"
        />
        <Image
          source={{ uri: product.seller.photo }}
          alt={`Foto do vendedor`}
          w={26}
          h={26}
          borderWidth={1}
          borderColor="white"
          borderRadius="full"
          position="absolute"
          top={2}
          left={2}
        />
        <Box
          bgColor={product.kind === "novo" ? "blue.700" : "gray.700"}
          position="absolute"
          top={2}
          right={2}
          px={2}
          borderRadius="full"
        >
          <Text
            color="white"
            fontSize={12}
            fontFamily="heading"
            textTransform="uppercase"
          >
            {product.kind}
          </Text>
        </Box>

        <Text color="gray.600">{product.title}</Text>
        <HStack alignItems="baseline">
          <Text mr={1}>R$</Text>
          <Text fontSize={18} fontFamily="heading">
            {product.price.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
            })}
          </Text>
        </HStack>
      </Pressable>
    </VStack>
  );
};
