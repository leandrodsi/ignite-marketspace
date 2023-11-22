import { CardProductItem } from "@components/CardProductItem";
import { ScreenHeader } from "@components/ScreenHeader";
import { useNavigation } from "@react-navigation/native";
import { AuthRoutesBottomTabsNavigatorProps } from "@routes/Auth.routes";
import { CheckIcon, FlatList, HStack, Select, Text, VStack } from "native-base";
import { Plus } from "phosphor-react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native";

const products = [
  {
    id: "a",
    photo: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-WmxJAVt3O9HOdTPEWUQaVq0mJBfP0tnaXA&usqp=CAU",
      "https://s2-autoesporte.glbimg.com/G34KDvKNWYXqYhrALW96kXz3OKU=/0x0:1486x821/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2022/A/C/2vWuBGRu614Vuuy9zFRg/updated-delfast-30i-e-bike-is-stronger-faster-and-smarter-than-ever-still-just-7300-1.jpg",
      "https://pplware.sapo.pt/wp-content/uploads/2023/07/bicicleta-ChatGPT.jpg",
    ],
    kind: "usado",
    title: "Tênis vermelho",
    price: 59.9,
    seller: {
      name: "Makenna Baptista",
      photo: "https://github.com/leandrodsi.png",
    },
  },
  {
    id: "b",
    photo: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmfnpv9Lbh0bpDEVOeaLAUsxidaQZ0bg8CEg&usqp=CAU",
      "https://pplware.sapo.pt/wp-content/uploads/2023/07/bicicleta-ChatGPT.jpg",
    ],
    kind: "novo",
    title: "Bicicleta",
    price: 59.9,
    seller: {
      name: "Makenna Baptista",
      photo: "https://github.com/leandrodsi.png",
    },
  },
  {
    id: "c",
    photo: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI2aaFVjDbU_WV3e5UC9Gq_xuoS86dlHed4g&usqp=CAU",
    ],
    kind: "usado",
    title: "Sofá",
    price: 59.9,
    seller: {
      name: "Makenna Baptista",
      photo: "https://github.com/leandrodsi.png",
    },
  },
  {
    id: "d",
    photo: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI2aaFVjDbU_WV3e5UC9Gq_xuoS86dlHed4g&usqp=CAU",
    ],
    kind: "usado",
    title: "Sofá",
    price: 59.9,
    seller: {
      name: "Makenna Baptista",
      photo: "https://github.com/leandrodsi.png",
    },
  },
  {
    id: "e",
    photo: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI2aaFVjDbU_WV3e5UC9Gq_xuoS86dlHed4g&usqp=CAU",
    ],
    kind: "novo",
    title: "Tênis vermelho",
    price: 59.9,
    seller: {
      name: "Makenna Baptista",
      photo: "https://github.com/leandrodsi.png",
    },
  },
  {
    id: "f",
    photo: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI2aaFVjDbU_WV3e5UC9Gq_xuoS86dlHed4g&usqp=CAU",
    ],
    kind: "usado",
    title: "Tênis vermelho",
    price: 59.9,
    seller: {
      name: "Makenna Baptista",
      photo: "https://github.com/leandrodsi.png",
    },
  },
];

export const MyProducts = () => {
  const navigation = useNavigation<AuthRoutesBottomTabsNavigatorProps>();
  const [selected, setSelected] = useState("all");

  return (
    <SafeAreaView>
      <VStack pt="4">
        <ScreenHeader
          title="Meus anúncios"
          rightButton={{
            icon: <Plus size="24" color="black" />,
            onPress: () => navigation.navigate("register-product"),
          }}
        />
        <VStack px="6" mt="5">
          <HStack alignItems="center" justifyContent="space-between">
            <Text>9 anúncios</Text>
            <Select
              selectedValue={selected}
              minWidth="111"
              h="34"
              accessibilityLabel="Choose Service"
              placeholder="Choose Service"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={(itemValue) => setSelected(itemValue)}
            >
              <Select.Item label="Todos" value="all" />
              <Select.Item label="Ativos" value="actives" />
              <Select.Item label="Inativos" value="inactives" />
            </Select>
          </HStack>

          <FlatList
            key={"#"}
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <CardProductItem product={item} />}
            numColumns={2}
            columnWrapperStyle={{ flex: 1, gap: 24 }}
            mt={8}
            showsVerticalScrollIndicator={false}
          />
        </VStack>
      </VStack>
    </SafeAreaView>
  );
};
