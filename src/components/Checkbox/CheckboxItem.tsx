import { ICheckboxProps, Checkbox } from "native-base";

type CheckboxItemProps = ICheckboxProps & {
  label: string;
};

export const CheckboxItem = ({ label, ...rest }: CheckboxItemProps) => {
  return (
    <Checkbox colorScheme="blue" _text={{ color: "gray.600" }} {...rest}>
      {label}
    </Checkbox>
  );
};
