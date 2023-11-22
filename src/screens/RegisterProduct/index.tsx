import { Input } from "@components/Input";
import { ScreenFooter } from "@components/ScreenFooter";
import { ScreenHeader } from "@components/ScreenHeader";
import { yupResolver } from "@hookform/resolvers/yup";

import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Checkbox,
  FormControl,
  HStack,
  Radio,
  ScrollView,
  Switch,
  Text,
  useTheme,
  VStack,
} from "native-base";
import { ArrowLeft } from "phosphor-react-native";
import { Controller, useForm } from "react-hook-form";
import { SafeAreaView } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import * as yup from "yup";
import { ProductImagePicker } from "./components/ProductImagePicker";

export const PAYMENT_METHODS = [
  "invoice",
  "pix",
  "money",
  "creditCard",
  "bankDeposit",
];

interface FormRegisterProductProps {
  images: string[];
  name: string;
  description: string;
  is_new: "new" | "used";
  price: string;
  accept_trade: boolean;
  payment_methods: string[];
}

const productSchema = yup.object({
  images: yup
    .array(yup.string().required("Adicione pelo menos uma imagem"))
    .min(1, "Selecione pelo menos uma forma de pagamento")
    .required("Adicione pelo menos uma imagem"),
  name: yup.string().required("Informe o título do produto"),
  description: yup.string().required("Informe uma descrição para o produto"),
  is_new: yup
    .string()
    .oneOf(["new", "used"])
    .required("Selecione o status do produto"),
  price: yup.string().required("Informe o valor do produto"),
  accept_trade: yup.boolean().required().default(false),
  payment_methods: yup
    .array(yup.string().required())
    .min(1, "Selecione pelo menos uma forma de pagamento")
    .required("Selecione pelo menos uma forma de pagamento"),
});

export const RegisterProduct = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const {
    control,
    formState: { errors },
    handleSubmit,
    setFocus,
    watch,
  } = useForm<FormRegisterProductProps>({
    resolver: yupResolver(productSchema),
    defaultValues: {
      is_new: "new",
    },
  });

  const handleRegisterProduct = (data: FormRegisterProductProps) => {
    console.log("DATA: ", data);
  };

  console.log("ERRORS: ", errors);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <VStack flex={1} bgColor="gray.100" space="6">
        <ScreenHeader
          title="Criar anúncio"
          leftButton={{
            icon: <ArrowLeft size={24} color="black" />,
            onPress: () => navigation.goBack(),
          }}
        />
        <ScrollView _contentContainerStyle={{ px: 6 }}>
          <VStack space="8">
            <VStack space="1">
              <Text
                fontSize="16"
                fontWeight="bold"
                fontFamily="heading"
                color="gray.500"
              >
                Imagens
              </Text>
              <Text color="gray.400">
                Escolha até 3 imagens para mostrar o quando o seu produto é
                incrível!
              </Text>
              <FormControl isRequired isInvalid={"images" in errors}>
                <Controller
                  name="images"
                  control={control}
                  render={({ field: { onChange } }) => {
                    const value = watch("images", []);

                    return (
                      <ProductImagePicker value={value} onChange={onChange} />
                    );
                  }}
                />
                <FormControl.ErrorMessage _text={{ color: "red.500" }}>
                  {errors.images?.message}
                </FormControl.ErrorMessage>
              </FormControl>
            </VStack>

            <VStack space="4">
              <Text
                fontSize="16"
                fontWeight="bold"
                fontFamily="heading"
                color="gray.500"
              >
                Sobre o produto
              </Text>
              <Controller
                name="name"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <Input
                    value={value}
                    onChangeText={onChange}
                    placeholder="Título do anúncio"
                    errorMessage={errors.name?.message}
                  />
                )}
              />
              <Controller
                name="description"
                control={control}
                render={({ field: { value, onChange, ref } }) => (
                  <Input
                    ref={ref}
                    value={value}
                    onChangeText={onChange}
                    placeholder="Descrição do produto"
                    numberOfLines={5}
                    multiline
                    h={160}
                    errorMessage={errors.description?.message}
                    autoComplete="off"
                    autoCorrect={false}
                  />
                )}
              />

              <Controller
                name="is_new"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <Radio.Group
                    name="state"
                    accessibilityLabel="product state"
                    defaultValue={value}
                    value={value}
                    onChange={onChange}
                  >
                    <HStack>
                      <Box flex={0.5}>
                        <Radio
                          value="new"
                          size="sm"
                          my={1}
                          _text={{ color: "gray.500" }}
                        >
                          Produto novo
                        </Radio>
                      </Box>
                      <Box flex={0.5}>
                        <Radio
                          value="used"
                          size="sm"
                          my={1}
                          _text={{ color: "gray.500" }}
                        >
                          Produto usado
                        </Radio>
                      </Box>
                    </HStack>
                  </Radio.Group>
                )}
              />
            </VStack>

            <VStack>
              <Text
                fontSize="16"
                fontWeight="bold"
                fontFamily="heading"
                color="gray.500"
              >
                Venda
              </Text>
              <Controller
                name="price"
                control={control}
                render={({ field: { value, onChange, ref } }) => (
                  <TextInputMask
                    type="money"
                    options={{ unit: "" }}
                    value={value}
                    onChangeText={onChange}
                    customTextInput={Input}
                    customTextInputProps={{
                      ref,
                      leftElement: (
                        <Text pl="4" fontSize="16">
                          R$
                        </Text>
                      ),
                      errorMessage: errors.price?.message,
                    }}
                  />
                )}
              />
            </VStack>

            <VStack space="3">
              <Text
                fontSize="16"
                fontWeight="bold"
                fontFamily="heading"
                color="gray.500"
              >
                Aceita troca?
              </Text>
              <Controller
                name="accept_trade"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <Switch value={value} onToggle={onChange} />
                )}
              />
            </VStack>

            <VStack>
              <Text
                fontSize="16"
                fontWeight="bold"
                fontFamily="heading"
                color="gray.500"
              >
                Meios de pagamento aceitos
              </Text>
              <FormControl isRequired isInvalid={"payment_methods" in errors}>
                <Controller
                  name="payment_methods"
                  control={control}
                  render={({ field: { onChange } }) => (
                    <Checkbox.Group onChange={onChange} colorScheme="primary">
                      {PAYMENT_METHODS.map((value) => (
                        <Checkbox
                          key={value}
                          value={value}
                          _text={{ color: "gray.400" }}
                          mb="1"
                        >
                          {value}
                        </Checkbox>
                      ))}
                    </Checkbox.Group>
                  )}
                />
                <FormControl.ErrorMessage _text={{ color: "red.500" }}>
                  {errors.payment_methods?.message}
                </FormControl.ErrorMessage>
              </FormControl>
            </VStack>
          </VStack>
        </ScrollView>
        <ScreenFooter
          leftButton={{ onPress: () => navigation.goBack() }}
          rightButton={{ onPress: handleSubmit(handleRegisterProduct) }}
        />
      </VStack>
    </SafeAreaView>
  );
};
