import { render, screen } from '@testing-library/react';
import App from './App';

// TODO
test('renders home', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
