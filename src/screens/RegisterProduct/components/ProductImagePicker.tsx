import { SCREEN_WIDTH } from "@utils/constants";
import * as ImagePicker from "expo-image-picker";
import { HStack, IconButton, Image, useTheme } from "native-base";
import { Plus } from "phosphor-react-native";

const IMAGE_SIZE = (SCREEN_WIDTH - 64) / 3;

interface ProductImagePicker {
  value: string[];
  onChange: (value: string[]) => void;
}

export const ProductImagePicker = ({ value, onChange }: ProductImagePicker) => {
  const { colors } = useTheme();

  const handlePickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      onChange([...value, result.assets[0].uri]);
    }
  };

  return (
    <HStack space="2">
      {value.map((imagePath) => (
        <Image
          w={IMAGE_SIZE}
          h={IMAGE_SIZE}
          source={{
            uri: imagePath,
          }}
          alt="imagem qualquer"
          borderRadius="md"
        />
      ))}

      {value.length < 3 ? (
        <IconButton
          w={IMAGE_SIZE}
          h={IMAGE_SIZE}
          borderRadius="md"
          bgColor="gray.300"
          icon={<Plus size="24" color={colors.gray[400]} />}
          ml={value.length ? "2" : "0"}
          onPress={handlePickImage}
        />
      ) : null}
    </HStack>
  );
};
