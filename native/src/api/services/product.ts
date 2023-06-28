import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Product, Products } from '../../utils/types'
import {fetch} from 'whatwg-fetch';


export const products = createApi({
  reducerPath: 'products',
  // baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/', fetchFn:fetch }),
  endpoints: (builder) => ({
    getProducts: builder.query<Products, void>({
      query: () => `products`,
    }),
    getProduct: builder.query<Product, number>({
        query: (id: number) => `products/${id}`
    })
  }),
})

export const { useGetProductsQuery, useGetProductQuery } = products

