import { IPressableProps, Pressable, useTheme } from "native-base";
import { Sliders } from "phosphor-react-native";

type SearchbarFilterProps = IPressableProps;

export const SearchbarFilter = (props: SearchbarFilterProps) => {
  const { colors } = useTheme();

  return (
    <Pressable {...props}>
      <Sliders size={20} color={colors.black} />
    </Pressable>
  );
};
