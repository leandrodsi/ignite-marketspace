import { IInputProps, Input } from "native-base";

export const SearchbarInput = ({ ...rest }: IInputProps) => {
  return (
    <Input
      flex={1}
      h="full"
      placeholder="Buscar anúncio"
      borderWidth={0}
      fontSize={14}
      {...rest}
    />
  );
};
