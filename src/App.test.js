import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ITW test link', () => {
  render(<App />);
  const linkElement = screen.getByText(/ITW test/i);
  expect(linkElement).toBeInTheDocument();
});
