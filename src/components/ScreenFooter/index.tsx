import { Button, ButtonProps } from "@components/Button";
import { HStack } from "native-base";

type ScreenFooter = {
  leftButton: Omit<ButtonProps, "label"> & { label?: string };
  rightButton: Omit<ButtonProps, "label"> & { label?: string };
};

export const ScreenFooter = ({
  leftButton: { label: leftButtonLabel = "Cancelar", ...leftButtonRest },
  rightButton: { label: rightButtonLabel = "Avançar", ...rightButtonRest },
}: ScreenFooter) => {
  return (
    <HStack px="6" py="5" bgColor="white" space="3">
      <Button
        flex={0.5}
        label={leftButtonLabel}
        bgColor="gray.300"
        _text={{ color: "black", fontSize: 16, fontFamily: "heading" }}
        {...leftButtonRest}
      />
      <Button
        flex={0.5}
        label={rightButtonLabel}
        bgColor="black"
        {...rightButtonRest}
      />
    </HStack>
  );
};
