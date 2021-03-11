import { render } from '@testing-library/react';
import App from '../App';

test('renders true', () => {
  render(<App />);
  expect(true).toBe(true);
});
