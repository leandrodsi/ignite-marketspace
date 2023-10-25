import { Button, ButtonProps } from "@components/Button";
import { ScreenHeader } from "@components/ScreenHeader";
import { ProductDetailsTemplate } from "@templates/ProductDetailsTemplate";
import { VStack, useTheme } from "native-base";
import {
  ArrowLeft,
  PencilSimpleLine,
  Power,
  TrashSimple,
} from "phosphor-react-native";
import { SafeAreaView } from "react-native";

export const MyProductDetails = () => {
  const { colors } = useTheme();

  const mainButton: ButtonProps = false
    ? {
        label: "Desativar anúncio",
        bgColor: "black",
      }
    : {
        label: "Reativar anúncio",
      };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <VStack flex={1} pt="4">
        <ScreenHeader
          leftButton={{ icon: <ArrowLeft size={24} color="black" /> }}
          rightButton={{ icon: <PencilSimpleLine size={24} color="black" /> }}
        />
        <ProductDetailsTemplate active={false} />
      </VStack>
      <VStack px="6" py="4" space="2">
        <Button leftIcon={<Power size={18} color="white" />} {...mainButton} />
        <Button
          label="Excluir anúncio"
          bgColor="gray.300"
          leftIcon={<TrashSimple size={18} color={colors.gray[800]} />}
          _text={{ color: "gray.800" }}
        />
      </VStack>
    </SafeAreaView>
  );
};
