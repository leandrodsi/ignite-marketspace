import { MaterialIcons } from "@expo/vector-icons";
import {
  FormControl,
  IInputProps,
  Icon,
  Input as NativeBaseInput,
  Pressable,
} from "native-base";
import { useState } from "react";

type InputProps = IInputProps & {
  errorMessage?: string;
  password?: boolean;
};

export const Input = ({
  errorMessage,
  password = false,
  ...rest
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormControl mb={4}>
      <NativeBaseInput
        bgColor="white"
        fontFamily="body"
        fontSize={16}
        borderRadius={6}
        borderWidth={0}
        paddingX={4}
        paddingY={12}
        h={45}
        _focus={{
          borderWidth: 2,
          borderColor: "blue.500",
        }}
        _invalid={{
          borderWidth: 2,
          borderColor: "red.500",
        }}
        secureTextEntry={showPassword}
        InputRightElement={
          password ? (
            <Pressable onPress={() => setShowPassword((prev) => !prev)}>
              <Icon
                as={
                  <MaterialIcons
                    name={showPassword ? "visibility" : "visibility-off"}
                  />
                }
                size={5}
                mr="2"
                color="muted.400"
              />
            </Pressable>
          ) : undefined
        }
        {...rest}
      />
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  );
};
