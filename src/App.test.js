import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders page heading', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/React drag and drop component/i);
  expect(linkElement).toBeInTheDocument();
});
