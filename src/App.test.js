import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Nav component', () => {
  render(<App />);
  const navElement = screen.getByText(/home/i); // Replace 'home' with any text present in the Nav component
  expect(navElement).toBeInTheDocument();
});
