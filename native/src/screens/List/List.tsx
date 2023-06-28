import React from 'react';
import { useGetProductsQuery } from '../../api/services/product';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import { Spinner } from '../../components/Spinner/Spinner';

export const List = () => {
  const { data, refetch: refetchProducts } = useGetProductsQuery();
  const [endLoading, setEndLoading] = React.useState<boolean>(false);

  return (
    <>
      {!endLoading && <Spinner />}
      <ProductsList
        products={data?.products}
        refetchProducts={refetchProducts}
        setEndLoading={setEndLoading}
      />
    </>
  );
};
