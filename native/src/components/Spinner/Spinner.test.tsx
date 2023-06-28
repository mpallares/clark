import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Spinner } from './Spinner';

test('should render Spinner component', () => {
  render(<Spinner />);
  const activityIndicator = screen.getByTestId('activity-indicator');
  expect(activityIndicator).toBeTruthy();
});
