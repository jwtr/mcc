import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HeroStats from '../HeroStats';

test('renders hero select', () => {
  render(<HeroStats />);

  expect(screen.getByText('Select your hero...')).toBeInTheDocument();
});

test('renders hero name', () => {
  render(<HeroStats />);

  userEvent.selectOptions(screen.getByTestId('hero-select'), ['Black Panther']);
  expect(screen.getAllByText('Black Panther')[1]).toBeInTheDocument();
});

test('renders alter ego name', () => {
  render(<HeroStats />);

  userEvent.selectOptions(screen.getByTestId('hero-select'), ['Black Panther']);
  expect(screen.getByText("T'Challa")).toBeInTheDocument();
});
