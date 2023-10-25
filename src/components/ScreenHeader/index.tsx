import { Box, HStack, IIconButtonProps, IconButton, Text } from "native-base";

type ScreenHeaderProps = {
  title?: string;
  leftButton?: IIconButtonProps;
  rightButton?: IIconButtonProps;
};

export const ScreenHeader = ({
  title,
  leftButton,
  rightButton,
}: ScreenHeaderProps) => {
  return (
    <HStack h="12" px="6" justifyContent="space-between" alignItems="center">
      {leftButton ? <IconButton {...leftButton} /> : <Box w="10" />}
      {!!title && (
        <Text fontSize="20" fontWeight="bold" fontFamily="heading">
          {title}
        </Text>
      )}
      {rightButton ? <IconButton {...rightButton} /> : <Box w="10" />}
    </HStack>
  );
};
