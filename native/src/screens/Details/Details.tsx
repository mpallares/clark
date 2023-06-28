import React from 'react';
import { ProductDetails } from '../../components/ProductDetails/ProductDetails';

export const Details = ({ route }) => {
  const { product } = route.params;

  return <ProductDetails product={product} />;
};
