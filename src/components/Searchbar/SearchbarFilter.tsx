import { Pressable, useTheme } from "native-base";
import { Sliders } from "phosphor-react-native";

export const SearchbarFilter = () => {
  const { colors } = useTheme();

  return (
    <Pressable>
      <Sliders size={20} color={colors.black} />
    </Pressable>
  );
};
