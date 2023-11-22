import { useRoute } from "@react-navigation/native";
import { AuthStackScreenProps } from "@routes/Stack.routes";
import { ProductDetailsTemplate } from "@templates/ProductDetailsTemplate";
import { VStack } from "native-base";

export const ProductPreview = () => {
  const route = useRoute<AuthStackScreenProps<"product-preview">>();
  const { product } = route.params;

  return (
    <VStack>
      <ProductDetailsTemplate product={product} />
    </VStack>
  );
};
