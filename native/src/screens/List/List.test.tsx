import React from 'react';
import { render } from '@testing-library/react-native';
import { useGetProductsQuery } from '../../api/services/product';
import { List } from './List';

jest.mock('../../api/services/product', () => ({
  __esModule: true,
  useGetProductsQuery: jest.fn(),
}));

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

    expect(getByTestId('spinner')).toBeDefined();
  });

  it('renders the ProductsList component with data when not loading', () => {
    const products = [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
    ];
    const mockUseGetProductsQuery = jest.spyOn(
      require('../../api/services/product'),
      'useGetProductsQuery'
    );
    const refetchProducts = jest.fn();

    mockUseGetProductsQuery.mockReturnValue({
      data: { products },
      isLoading: false,
      refetch: refetchProducts,
    });

    const { getByTestId, queryByTestId } = render(<List />);

    expect(queryByTestId('spinner')).toBeNull();
    expect(getByTestId('productsList')).toBeDefined();
    // Additional assertions for the rendered products list can be added here.
  });
});
// import * as React from 'react';
// import { render, screen, fireEvent, act } from '@testing-library/react-native';
// import App from '../../../App';

// describe('Testing react navigation', () => {
//   test('page contains a button', async () => {
//     render(<App />);
//     const button = await screen.findByText('See Details');
//     expect(button).toBeTruthy();
//   });

//   test('clicking on one item takes you to the details screen', async () => {
//     render(<App />);
//     await act(async () => {
//       const toPress = screen.getByText('See Details');
//       fireEvent(toPress, 'press');
//     });
//     const details = screen.findByText('Details');
//     expect(details).toBeTruthy();
//   });
// });
