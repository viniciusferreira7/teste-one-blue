import { render, screen } from '@testing-library/react';
import { InputPassword } from '.';

describe('<Input/>', () => {
  it('should render with default values', () => {
    render(<InputPassword>Texto</InputPassword>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
