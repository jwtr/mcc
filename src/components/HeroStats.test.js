import { render, screen } from '@testing-library/react';
import HeroStats from './HeroStats';

test('renders hero select', () => {
  render(<HeroStats />);

  expect(screen.getByText('Select your hero...')).toBeInTheDocument();
});
