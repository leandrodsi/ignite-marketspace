import {
  Button,
  HStack,
  IButtonProps,
  ITextProps,
  IconButton,
  Text,
  useTheme,
} from "native-base";
import { X } from "phosphor-react-native";
import { View } from "react-native";

type SelectableButtonProps = IButtonProps & {
  selected: boolean;
  label: string;
  _labelProps?: ITextProps;
};

export const SelectableButton = ({
  selected,
  label,
  _labelProps,
  ...rest
}: SelectableButtonProps) => {
  const { colors } = useTheme();

  return (
    <Button
      h={28}
      py={0}
      borderRadius="full"
      bgColor={selected ? "blue.500" : "gray.300"}
      {...rest}
    >
      <HStack alignItems="center" justifyContent="center">
        <Text
          textTransform="uppercase"
          color={selected ? "white" : "gray.600"}
          fontSize={12}
          fontFamily="heading"
          {..._labelProps}
        >
          {label}
        </Text>
        {selected && (
          <View
            style={{
              width: 14,
              height: 14,
              backgroundColor: colors.white,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 8,
            }}
          >
            <X size={8} weight="bold" color={colors.blue[500]} />
          </View>
        )}
      </HStack>
    </Button>
  );
};
