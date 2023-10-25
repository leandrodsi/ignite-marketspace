import { Avatar } from "@components/Avatar";
import { Button } from "@components/Button";
import { CardProductItem } from "@components/CardProductItem";
import { Searchbar } from "@components/Searchbar";
import { FlatList, HStack, Heading, Text, VStack, useTheme } from "native-base";
import { ArrowRight, MagnifyingGlass, Plus, Tag } from "phosphor-react-native";

export const Home = () => {
  const { colors } = useTheme();

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

  return (
    <VStack flex={1} px={6} py={16} bgColor="gray.100">
      <HStack w="full">
        <Avatar.Root w={11} h={11}>
          <Avatar.Image />
        </Avatar.Root>
        <VStack flex={1} ml={2}>
          <Text fontSize={16} fontFamily="body">
            Boas vindas,
          </Text>
          <Heading fontSize={16} fontFamily="heading">
            Maria!
          </Heading>
        </VStack>
        <Button
          label="Criar anúncio"
          bgColor="black"
          leftIcon={<Plus size={16} color={colors.white} />}
        />
      </HStack>

      <Text color="gray.500" mt={8} mb={4}>
        Seus produtos anunciados para venda
      </Text>
      <HStack
        bgColor="blue.510"
        borderRadius="md"
        px={3}
        py={4}
        alignItems="center"
      >
        <Tag size={22} color={colors.blue[700]} weight="regular" />
        <VStack flex={1} ml={4}>
          <Text fontSize={20} fontFamily="heading">
            4
          </Text>
          <Text fontSize={14} color="gray.600">
            anúncios ativos
          </Text>
        </VStack>
        <Button
          label="Meus anúncios"
          variant="ghost"
          _text={{ fontSize: 12, color: "blue.700", fontFamily: "heading" }}
          rightIcon={<ArrowRight size={16} color={colors.blue[700]} />}
        />
      </HStack>

      <Text color="gray.500" mt={8} mb={4}>
        Compre produtos variados
      </Text>
      <Searchbar.Root>
        <Searchbar.Input />
        <Searchbar.Button icon={<MagnifyingGlass size={20} />} />
        <Searchbar.Divider />
        <Searchbar.Filter />
      </Searchbar.Root>

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
  );
};
