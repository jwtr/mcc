import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Stat from '../Stat';

const mockIncreaseStat = jest.fn();
const mockDecreaseStat = jest.fn();

test('renders numeric health stat', () => {
  render(
    <Stat
      key={'health'}
      statValue={10}
      statName={'health'}
      increaseStat={mockIncreaseStat}
      decreaseStat={mockDecreaseStat}
    />
  );

  expect(screen.getByText('HP: 10')).toBeInTheDocument();
  expect(
    screen.getByRole('button', {
      name: '+',
    })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('button', {
      name: '-',
    })
  ).toBeInTheDocument();
});

test('renders non-numeric health stat', () => {
  render(
    <Stat
      key={'health'}
      statValue={'INF'}
      statName={'health'}
      increaseStat={mockIncreaseStat}
      decreaseStat={mockDecreaseStat}
    />
  );

  expect(screen.getByText('HP: INF')).toBeInTheDocument();
  expect(
    screen.queryByRole('button', {
      name: '+',
    })
  ).not.toBeInTheDocument();
  expect(
    screen.queryByRole('button', {
      name: '-',
    })
  ).not.toBeInTheDocument();
});

test('stat increase on button click', () => {
  render(
    <Stat
      key={'health'}
      statValue={10}
      statName={'health'}
      increaseStat={mockIncreaseStat}
      decreaseStat={mockDecreaseStat}
    />
  );

  userEvent.click(screen.getByRole('button', { name: '+' }));
  expect(mockIncreaseStat.mock.calls.length).toBe(1);
});

test('stat decrease on button click', () => {
  render(
    <Stat
      key={'health'}
      statValue={10}
      statName={'health'}
      increaseStat={mockIncreaseStat}
      decreaseStat={mockDecreaseStat}
    />
  );

  userEvent.click(screen.getByRole('button', { name: '-' }));
  expect(mockDecreaseStat.mock.calls.length).toBe(1);
});
