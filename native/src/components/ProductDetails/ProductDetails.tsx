import { View, Text, Image as Img, StyleSheet, Dimensions } from 'react-native';
import React, { FC } from 'react';
import { Product } from '../../utils/types';
import { Rating } from 'react-native-ratings';
import { Swiper } from '../Swiper/Swiper';

export interface ProductDetailsProps {
  product: Product;
}
export const ProductDetails: FC<ProductDetailsProps> = ({ product }) => {
  return (
    <View style={styles.container}>
      <Swiper images={product.images} />
      <Text style={styles.title}>{product.title}</Text>
      <Rating startingValue={product.rating} readonly />
      <View style={styles.row}>
        <Text style={styles.price}>{product.category}</Text>
        <Text style={styles.price}>$ {product.price}</Text>
        <Text style={styles.price}>{product.brand}</Text>
      </View>
      <Text style={styles.description}>{product.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    padding: 7,
    marginBottom: 50,
  },
  content: {
    marginTop: 10,
    alignItems: 'center',
  },
  tinyLogo: {
    width: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
    height: '50%',
    objectFit: 'contain',
  },
  title: {
    marginTop: 20,
    marginBottom: 8,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  price: {
    marginBottom: 8,
    fontWeight: 'bold',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    gap: 30,
    paddingTop: 10,
  },
  description: {
    width: '85%',
    fontSize: 20,
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
});
