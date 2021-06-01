import { render, screen } from '@testing-library/react';
import ResetButton from './ResetButton';

test('renders reset button', () => {
  render(<ResetButton />);

  expect(
    screen.getByRole('button', {
      name: 'Reset',
    })
  ).toBeInTheDocument();
});
