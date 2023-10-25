import { Center, ICenterProps } from "native-base";
import { ReactNode } from "react";

type AvatarProps = ICenterProps & {
  children: ReactNode;
};

export const AvatarRoot = ({ children, ...rest }: AvatarProps) => {
  return (
    <Center w={88} h={88} {...rest}>
      {children}
    </Center>
  );
};
