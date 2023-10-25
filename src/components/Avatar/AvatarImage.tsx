import { IImageProps, Image } from "native-base";

import defaultAvatarImage from "@assets/Avatar.png";

type AvatarImageProps = IImageProps & {
  uri?: string;
};

export const AvatarImage = ({ uri, ...rest }: AvatarImageProps) => {
  return (
    <Image
      w="full"
      h="full"
      borderRadius="full"
      source={!uri ? defaultAvatarImage : { uri }}
      alt="Imagem do usuário"
      {...rest}
    />
  );
};
