import React, { FC } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Image } from 'expo-image';

const { width, height } = Dimensions.get('screen');
const swiperHeight = height / 4;

interface SwiperItemProps {
  image?: string;
}

export const SwiperItem: FC<SwiperItemProps> = ({ image }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: `${image}` }}
        transition={10}
        contentFit='contain'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    width: width,
  },
  image: {
    width: width,
    height: swiperHeight,
    objectFit: 'contain',
    borderRadius: 5,
  },
});
