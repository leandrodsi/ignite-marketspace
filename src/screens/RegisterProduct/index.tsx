import { Input } from "@components/Input";
import { ScreenHeader } from "@components/ScreenHeader";
import { PAYMENT_METHODS } from "@utils/constants";
import {
  Box,
  Checkbox,
  FlatList,
  IconButton,
  Image,
  Radio,
  ScrollView,
  Switch,
  Text,
  VStack,
  useTheme,
} from "native-base";
import { ArrowLeft, Plus } from "phosphor-react-native";
import { useState } from "react";
import { Dimensions, SafeAreaView } from "react-native";

const { width: WIDTH } = Dimensions.get("screen");
const IMAGE_SIZE = (WIDTH - 64) / 3;

export const RegisterProduct = () => {
  const { colors } = useTheme();

  const [value, setValue] = useState("");
  const [paymentMethods, setPaymentMethods] = useState([]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <VStack flex={1} bgColor="gray.100" space="6">
        <ScreenHeader
          title="Criar anúncio"
          leftButton={{ icon: <ArrowLeft size={24} color="black" /> }}
        />
        <ScrollView _contentContainerStyle={{ px: 6 }}>
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
            <FlatList
              data={["a", "b"]}
              keyExtractor={(item) => item}
              renderItem={() => (
                <Image
                  w={IMAGE_SIZE}
                  h={IMAGE_SIZE}
                  source={{
                    uri: "https://clicandoeandando.com/wp-content/uploads/2016/06/Como-tirar-fotos-melhores-com-qualquer-camera-plano-de-fundo.jpg",
                  }}
                  alt="imagem qualquer"
                  borderRadius="md"
                />
              )}
              ListFooterComponent={() => (
                <IconButton
                  w={IMAGE_SIZE}
                  h={IMAGE_SIZE}
                  borderRadius="md"
                  bgColor="gray.300"
                  icon={<Plus size="24" color={colors.gray[400]} />}
                  ml="2"
                />
              )}
              ItemSeparatorComponent={() => <Box w="2" />}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </VStack>

          <VStack>
            <Text
              fontSize="16"
              fontWeight="bold"
              fontFamily="heading"
              color="gray.500"
            >
              Sobre o produto
            </Text>
            <Input placeholder="Título do anúncio" />
            <Input placeholder="Descrição do produto" />

            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              value={value}
              onChange={(nextValue) => {
                setValue(nextValue);
              }}
            >
              <Radio value="one" my={1}>
                One
              </Radio>
              <Radio value="two" my={1}>
                Two
              </Radio>
            </Radio.Group>
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
            <Input leftElement={<Text>R$</Text>} />
          </VStack>

          <VStack>
            <Text
              fontSize="16"
              fontWeight="bold"
              fontFamily="heading"
              color="gray.500"
            >
              Aceita troca?
            </Text>
            <Switch />
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
            <Checkbox.Group
              // onChange={onChange} come from Controller (React Hook Form)
              colorScheme="secondary"
              _checkbox={{
                bgColor: "transparent",
              }}
            >
              {PAYMENT_METHODS.map((method) => (
                <Checkbox
                  key={method.id}
                  value={method.id}
                  _text={{ color: "gray.400" }}
                  mb="1"
                >
                  {method.label}
                </Checkbox>
              ))}
            </Checkbox.Group>
          </VStack>
        </ScrollView>
      </VStack>
    </SafeAreaView>
  );
};
