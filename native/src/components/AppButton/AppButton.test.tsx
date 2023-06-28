import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { AppButton } from './AppButton';

test('should render Button component', () => {
  const title = 'I am a test';
  render(<AppButton title={title} />);
  expect(screen.getByText(title)).toBeTruthy();
});

test('should button onPress work', () => {
  const mockFn = jest.fn();
  const title = 'I am a test';
  render(<AppButton title={title} onPress={mockFn} />);
  fireEvent.press(screen.getByText(title));
  expect(mockFn).toBeCalled();
});
