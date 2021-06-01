import { render, screen } from '@testing-library/react';
import VillainStats from './VillainStats';

test('renders villain select', () => {
  render(<VillainStats />);

  expect(screen.getByText('Select your villain...')).toBeInTheDocument();
});
