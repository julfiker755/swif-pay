import React, { useEffect, useRef, useState } from "react";
import {
  FlatList
} from "react-native";

interface AutoSliderCarouselProps<T> {
  data: T[];
  renderItem: ({ item }: { item: T }) => any;
  keyExtractor: (item: T, index: number) => string;
  itemWidth?: number;
  interval?: number;
}

export function AutoSliderCarousel<T>({
  data,
  renderItem,
  keyExtractor,
  itemWidth = 160,
  interval = 3000,
}: AutoSliderCarouselProps<T>) {
  const listRef = useRef<FlatList<T>>(null);
  const [carouselData, setCarouselData] = useState<T[]>(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!data?.length) return;

    const timer = setInterval(() => {
      const nextIndex = index + 1;

      // 🔥 যদি শেষের কাছে চলে যায় → নতুন করে data clone করবো
      if (nextIndex >= carouselData.length - 2) {
        setCarouselData((prev) => [...prev, ...data]);
      }

      listRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });

      setIndex(nextIndex);
    }, interval);

    return () => clearInterval(timer);
  }, [index, interval, carouselData.length, data]);

  return (
    <FlatList
      ref={listRef}
      data={carouselData}
      horizontal
      renderItem={renderItem}
      keyExtractor={(item, idx) => `${keyExtractor(item, idx)}-${idx}`}
      showsHorizontalScrollIndicator={false}
      snapToInterval={itemWidth}
      decelerationRate="fast"
      getItemLayout={(_, index) => ({
        length: itemWidth,
        offset: itemWidth * index,
        index,
      })}
      onMomentumScrollEnd={(e) => {
        const newIndex = Math.round(e.nativeEvent.contentOffset.x / itemWidth);
        setIndex(newIndex);
      }}
    />
  );
}
