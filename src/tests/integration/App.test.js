import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../components/App';

beforeEach(() => {
  // setup a DOM element as a render target
  render(<App />);
});

afterEach(cleanup)

test('renders chitter title', () => {
  const buttonElement = screen.getByText(/chitter/i);
  expect(buttonElement).toBeInTheDocument();
});

test('renders Peeps table', () => {
  const buttonElement = screen.getByText(/Peeps/i);
  expect(buttonElement).toBeInTheDocument();
});

test('renders Peep form', () => {
  const buttonElement = screen.getByPlaceholderText(/Peep/i);
  expect(buttonElement).toBeInTheDocument();
});

test('renders Submit button', () => {
  const buttonElement = screen.getByText(/Submit/i);
  expect(buttonElement).toBeInTheDocument();
});
