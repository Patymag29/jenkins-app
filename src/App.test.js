import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Jenkins title', () => {
  render(<App />);
  const element = screen.getByText(/Jenkins CI\/CD Demo/i);
  expect(element).toBeInTheDocument();
});
