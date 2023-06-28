import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import { Product } from '../../utils/types';
import { ProductListItem } from '../ProductListItem/ProductListItem';
import { Colors } from '../../constants/colors';
import { handleRefresh } from '../../helpers/handleRefresh';

interface ProductsListProps {
  products: Product[];
  refetchProducts: () => void;
  setEndLoading: (val: boolean) => void;
}

export const ProductsList: FC<ProductsListProps> = ({
  products,
  refetchProducts,
  setEndLoading,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [refreshing, setRefreshing] = useState(false);

  const filterProducts = (query, originalArray) => {
    return originalArray?.filter((item) =>
      item.title.toLowerCase()?.includes(query?.toLowerCase())
    );
  };

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  useEffect(() => {
    const filteredProducts = filterProducts(searchQuery, products);
    setFilteredProducts(filteredProducts);
  }, [searchQuery]);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={[
          styles.textInput,
          {
            borderColor: Colors.CLARK_BLUE_PRIMARY,
            backgroundColor: Colors.WHITE,
          },
        ]}
        placeholder='Search...'
        onChangeText={(text) => setSearchQuery(text)}
        value={searchQuery}
      />
      <FlatList
        data={filteredProducts}
        renderItem={({ index, item }) => (
          <ProductListItem
            product={item}
            setEndLoading={index == 1 ? setEndLoading : () => {}}
          />
        )}
        keyExtractor={(item) => String(item.id)}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => handleRefresh(setRefreshing, refetchProducts)}
          />
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    padding: 50,
    flex: 1,
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  },
  textInput: {
    height: 40,
    borderWidth: 2,
    paddingLeft: 20,
    margin: 20,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 15,
  },
});
