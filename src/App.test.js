import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => { //test function to check if the app renders correctly
  render(<App />); //render the App component in a virtual DOM for testing
  const element = screen.getByText(/This is my Jenkins CI\/CD Demo App/i);
  expect(element).toBeInTheDocument(); //check if the text "This is my Jenkins CI/CD Demo App" is present in the rendered output
});
