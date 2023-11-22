import { MaterialIcons } from "@expo/vector-icons";
import {
  FormControl,
  IInputProps,
  Icon,
  Input as NativeBaseInput,
  Pressable,
} from "native-base";
import { forwardRef, useState } from "react";

type InputProps = IInputProps & {
  errorMessage?: string;
  password?: boolean;
};

export const Input = forwardRef(
  (
    { errorMessage, isInvalid, password = false, mb, ...rest }: InputProps,
    ref: any,
  ) => {
    const invalid = !!errorMessage || isInvalid;
    const [showPassword, setShowPassword] = useState(password);

    return (
      <FormControl mb={mb} isInvalid={invalid}>
        <NativeBaseInput
          ref={ref}
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
                  mx="2"
                  color="muted.400"
                />
              </Pressable>
            ) : undefined
          }
          {...rest}
        />
        <FormControl.ErrorMessage _text={{ color: "red.500" }}>
          {errorMessage}
        </FormControl.ErrorMessage>
      </FormControl>
    );
  },
);
