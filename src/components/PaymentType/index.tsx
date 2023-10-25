import { HStack, ITextProps, Text } from "native-base";
import { ReactNode } from "react";

type PaymentTypeProps = ITextProps & {
  icon: ReactNode;
  label: string;
};

export const PaymentType = ({
  icon: Icon,
  label,
  ...rest
}: PaymentTypeProps) => {
  return (
    <HStack>
      {Icon}
      <Text textTransform="capitalize" {...rest}>
        {label}
      </Text>
    </HStack>
  );
};
