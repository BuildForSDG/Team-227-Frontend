import React from 'react';
import { render } from '@testing-library/react';
import Auth from './Auth';

test('renders learn react link', () => {
  const { getByText } = render(<Auth />);
  const element = getByText(/Fight Hunger/);
  expect(element).toBeInTheDocument();
});
