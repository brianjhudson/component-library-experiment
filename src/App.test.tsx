import React from 'react';
import { render } from './test-utils';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/localhost/i);
  expect(linkElement).toBeInTheDocument();
});
