import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders react learn page', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
