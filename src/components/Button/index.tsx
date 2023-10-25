import { IButtonProps, Button as NativeBaseButton } from "native-base";

export type ButtonProps = IButtonProps & {
  label: string;
};

export const Button = ({ label, variant, ...rest }: ButtonProps) => {
  return (
    <NativeBaseButton
      h={42}
      bgColor={variant === "ghost" ? "transparent" : "blue.500"}
      _pressed={{ bgColor: variant === "ghost" ? "transparent" : "blue.700" }}
      _text={{
        fontSize: 16,
        fontFamily: "heading",
        color: variant === "ghost" ? "blue.500" : "white",
      }}
      {...rest}
    >
      {label}
    </NativeBaseButton>
  );
};
