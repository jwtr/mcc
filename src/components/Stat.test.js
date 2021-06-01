import { render, screen } from '@testing-library/react';
import Stat from './Stat';

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
