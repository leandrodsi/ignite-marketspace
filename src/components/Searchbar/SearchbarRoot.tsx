import { Input } from "@components/Input";
import { HStack, useTheme } from "native-base";
import { IHStackProps } from "native-base/lib/typescript/components/primitives/Stack/HStack";
import { ReactNode } from "react";

type SearchBarRootProps = IHStackProps & {
  children: ReactNode;
};

export const SearchbarRoot = ({ children }: SearchBarRootProps) => {
  return (
    <HStack
      w="full"
      h={45}
      alignItems="center"
      bgColor="white"
      borderRadius="md"
      py={2}
      px={2}
    >
      {children}
    </HStack>
  );
};
