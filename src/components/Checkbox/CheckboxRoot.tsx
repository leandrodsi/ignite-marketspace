import { Checkbox, ICheckboxGroupProps } from "native-base";
import { ReactNode } from "react";

type CheckboxRootProps = ICheckboxGroupProps & {
  children: ReactNode;
};

export const CheckboxRoot = ({ children, ...rest }: CheckboxRootProps) => {
  return <Checkbox.Group {...rest}>{children}</Checkbox.Group>;
};
