import { IPressableProps, Pressable } from "native-base";
import { ReactNode } from "react";

type SearchbarButtonProps = IPressableProps & {
  icon: ReactNode;
};

export const SearchbarButton = ({ icon }: SearchbarButtonProps) => {
  return <Pressable>{icon}</Pressable>;
};
