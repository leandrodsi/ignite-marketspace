import { IIconButtonProps, IconButton } from "native-base";
import { PencilSimpleLine } from "phosphor-react-native";

type AvatarButtonChangeProps = IIconButtonProps;

export const AvatarButtonChange = ({ ...rest }: AvatarButtonChangeProps) => {
  return (
    <IconButton
      w={10}
      h={10}
      bgColor="blue.500"
      icon={<PencilSimpleLine size={16} color="white" />}
      borderRadius="full"
      position="absolute"
      right={-6}
      bottom={0}
      {...rest}
    />
  );
};
