import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { List } from './List';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import { NavigationContainer } from '@react-navigation/native';

describe('List component', () => {
  it('renders the spinner when loading', () => {
    const mockUseGetProductsQuery = jest.spyOn(
      require('../../api/services/product'),
      'useGetProductsQuery'
    );

    mockUseGetProductsQuery.mockReturnValue({
      data: null,
      isLoading: true,
      refetch: jest.fn(),
    });

    const { getByTestId } = render(<List />);

    expect(getByTestId('activity-indicator')).toBeDefined();
  });

  it('renders the ProductsList component with data when not loading', () => {
    const products = [
      {
        id: 11,
        title: 'perfume Oil',
        description: 'Mega Discount, Impression of A...',
        price: 13,
        discountPercentage: 8.4,
        rating: 4.26,
        stock: 65,
        brand: 'Impression of Acqua Di Gio',
        category: 'fragrances',
        thumbnail: 'https://i.dummyjson.com/data/products/11/thumbnail.jpg',
        images: [
          'https://i.dummyjson.com/data/products/11/1.jpg',
          'https://i.dummyjson.com/data/products/11/2.jpg',
          'https://i.dummyjson.com/data/products/11/3.jpg',
          'https://i.dummyjson.com/data/products/11/thumbnail.jpg',
        ],
      },
    ];

    render(
      <NavigationContainer>
        <ProductsList
          products={products}
          refetchProducts={() => {}}
          setEndLoading={() => {}}
        />
      </NavigationContainer>
    );

    expect(screen.getByText(products[0].title)).toBeTruthy();
  });
});
