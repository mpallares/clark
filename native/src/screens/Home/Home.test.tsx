import * as React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react-native';
import App from '../../../App';

describe('Testing react navigation', () => {
  test('page contains a button', async () => {
    render(<App />);
    const button = await screen.findByText('Continue');
    expect(button).toBeTruthy();
  });

  test('clicking on one item takes you to the details screen', async () => {
    render(<App />);
    await act(async () => {
      const toPress = screen.getByText('Continue');
      fireEvent(toPress, 'press');
    });
    const search = screen.queryByPlaceholderText('Search...');
    expect(search).toBeTruthy();
    console.log('test');
  });
});
