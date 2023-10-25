import { Box, Center, FlatList, HStack, Image, Text } from "native-base";
import { IFlatListProps } from "native-base/lib/typescript/components/basic/FlatList";
import { useCallback, useRef, useState } from "react";
import { ViewToken, useWindowDimensions } from "react-native";

type ImageCarouselProps = {
  data: string[];
  active?: boolean;
};

export const ImageCarousel = ({ data, active = true }: ImageCarouselProps) => {
  const carouselRef = useRef<IFlatListProps<string>>();
  const { width: WIDTH } = useWindowDimensions();

  const [activeIndex, setActiveIndex] = useState(0);

  const handleVieweableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      setActiveIndex(viewableItems[0]?.index || 0);
    },
    [],
  );

  return (
    <Box>
      <FlatList
        ref={carouselRef}
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Image
            source={{ uri: item }}
            alt={`Imagem ${index} do produto`}
            w={WIDTH}
            h="70"
          />
        )}
        onViewableItemsChanged={handleVieweableItemsChanged}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
      <HStack position="absolute" bottom="2px" w="full" space="1" px="1">
        {data.map((_, index) => {
          const isActive = index === activeIndex;

          return (
            <Box
              bgColor={isActive ? "gray.400" : "gray.300"}
              h="3px"
              flex="1"
              borderRadius="full"
            />
          );
        })}
      </HStack>
      {!active && (
        <Center
          position="absolute"
          top="0"
          right="0"
          bottom="0"
          left="0"
          bgColor="#00000044"
        >
          <Text
            fontSize="14"
            fontWeight="bold"
            fontFamily="heading"
            textTransform="uppercase"
            color="white"
          >
            ANÚNCIO DESATIVADO
          </Text>
        </Center>
      )}
    </Box>
  );
};
