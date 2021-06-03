import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('renders header text', () => {
  render(<Header />);

  expect(screen.getByText('Marvel Champions Companion')).toBeInTheDocument();
});
