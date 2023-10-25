import { Button } from "@components/Button";
import { Checkbox } from "@components/Checkbox";
import { SelectableButton } from "@components/SelectableButton";
import { HStack, Heading, IconButton, Switch, Text, VStack } from "native-base";
import { X } from "phosphor-react-native";
import { useState } from "react";

export const HomeFilter = () => {
  const [paymentMethods, setPaymentMethods] = useState([]);

  return (
    <VStack flex={1} justifyContent="flex-end" bgColor="black30">
      <VStack
        pt={12}
        pb={20}
        px={6}
        bgColor="gray.200"
        borderTopLeftRadius="3xl"
        borderTopRightRadius="lg"
      >
        <HStack justifyContent="space-between">
          <Heading>Filtrar anúncios</Heading>
          <IconButton icon={<X size={20} color="black" />} />
        </HStack>

        <Text mt={6} mb={2} fontFamily="heading">
          Condição
        </Text>
        <HStack space={2}>
          <SelectableButton label="novo" selected={true} />
          <SelectableButton label="usado" selected={false} />
        </HStack>

        <Text mt={6} mb={2} fontFamily="heading">
          Aceita troca?
        </Text>
        <Switch offTrackColor="gray.200" onTrackColor="blue.500" size="sm" />

        <Text mt={6} mb={2} fontFamily="heading">
          Meios de pagamento aceitos
        </Text>
        <Checkbox.Root value={paymentMethods} onChange={setPaymentMethods}>
          <Checkbox.Item label="Boleto" value="boleto" />
          <Checkbox.Item label="Pix" value="pix" />
          <Checkbox.Item label="Dinheiro" value="dinheiro" />
          <Checkbox.Item label="Cartão de Crédito" value="creditCard" />
          <Checkbox.Item label="Depósito bancário" value="bankDeposit" />
        </Checkbox.Root>

        <HStack flex={1} justifyContent="space-between" space={4} mt={16}>
          <Button
            flex={1}
            label="Resetar filtros"
            bgColor="gray.300"
            _text={{ color: "gray.700", fontFamily: "heading", fontSize: 16 }}
          />
          <Button flex={1} label="Aplicar filtros" bgColor="black" />
        </HStack>
      </VStack>
    </VStack>
  );
};
