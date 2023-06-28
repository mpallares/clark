import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import { products } from "../api/services/product";

export const store = configureStore({
  reducer: {
    [products.reducerPath]: products.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(products.middleware),
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;