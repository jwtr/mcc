import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import VillainStats from '../VillainStats';

test('renders villain select', () => {
  render(<VillainStats />);

  expect(screen.getByText('Select your villain...')).toBeInTheDocument();
});

test('renders villain name', () => {
  render(<VillainStats />);

  userEvent.selectOptions(screen.getByTestId('villain-select'), ['Klaw (I)']);
  expect(screen.getAllByText('Klaw (I)')[1]).toBeInTheDocument();
});

test('renders villain health multiplier for numeric health villain', () => {
  render(<VillainStats />);

  userEvent.selectOptions(screen.getByTestId('villain-select'), ['Klaw (I)']);
  expect(
    screen.getByRole('button', {
      name: '1x',
    })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('button', {
      name: '2x',
    })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('button', {
      name: '3x',
    })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('button', {
      name: '4x',
    })
  ).toBeInTheDocument();
});

test('does not render villain health multiplier for non-numeric health villain', () => {
  render(<VillainStats />);

  userEvent.selectOptions(screen.getByTestId('villain-select'), [
    'Collector (A2)',
  ]);
  expect(
    screen.queryByRole('button', {
      name: '1x',
    })
  ).not.toBeInTheDocument();
  expect(
    screen.queryByRole('button', {
      name: '2x',
    })
  ).not.toBeInTheDocument();
  expect(
    screen.queryByRole('button', {
      name: '3x',
    })
  ).not.toBeInTheDocument();
  expect(
    screen.queryByRole('button', {
      name: '4x',
    })
  ).not.toBeInTheDocument();
});
