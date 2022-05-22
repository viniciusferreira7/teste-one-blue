import { render, screen } from '@testing-library/react';
import { FlagSucess } from '.';

describe('<FlagSucess/>', () => {
  it('should render with default values', () => {
    render(<FlagSucess>Texto</FlagSucess>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
