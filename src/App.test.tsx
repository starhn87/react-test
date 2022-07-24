import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('<App />', () => {
  it('renders component correctly', () => {
    render(<App />);

    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();

    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('src', 'logo.svg');
    expect(logo).toHaveAttribute('alt', 'logo');

    expect(screen.getByText('Edit src/App.tsx and save to reload.')).toBeInTheDocument();
  });
});
