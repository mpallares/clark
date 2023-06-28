import { View, Text, StyleSheet, Image as Img, Dimensions } from 'react-native';
import React, { FC } from 'react';
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';
import { Product } from '../../utils/types';
import { AppButton } from '../AppButton/AppButton';
import { Colors } from '../../constants/colors';

export interface ProductListItemProps {
  product: Product;
  setEndLoading?: (val: boolean) => void;
}

export const ProductListItem: FC<ProductListItemProps> = ({
  product,
  setEndLoading,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        style={[styles.tinyLogo, { height: 250 }]}
        source={{
          uri: product.thumbnail,
        }}
        contentFit='contain'
        transition={10}
        onLoadEnd={() => setEndLoading(true)}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>$ {product.price}</Text>
        <AppButton
          title='See Details'
          color={Colors.WHITE}
          width={90}
          height={30}
          borderRadius={5}
          onPress={() => navigation.navigate('Details', { product })}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '85%',
    alignSelf: 'center',
    alignContent: 'center',
    flexDirection: 'column',
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
  },
  title: {
    marginBottom: 8,
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    marginBottom: 8,
  },
});
