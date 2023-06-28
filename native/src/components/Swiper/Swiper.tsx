import React, { FC } from 'react';
import { View, StyleSheet, FlatList, Dimensions } from 'react-native';
import { SwiperItem } from '../SwiperItem/SwiperItem';
const { width, height } = Dimensions.get('screen');
const swiperHeight = height / 4;

interface SwipertProps {
  images: string[];
}

export const Swiper: FC<SwipertProps> = ({ images }) => {
  return (
    <View style={styles.container} testID='swiper-container'>
      <FlatList
        data={images}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <SwiperItem image={item} />}
        pagingEnabled
        snapToAlignment='center'
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: swiperHeight,
    width: width,
  },
});
