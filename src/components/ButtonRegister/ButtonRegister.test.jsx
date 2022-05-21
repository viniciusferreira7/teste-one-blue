import { render, screen } from '@testing-library/react';
import { ButtonRegister } from '.';

describe('<ButtonRegister/>', () => {
  it('should render with default values', () => {
    render(<ButtonRegister>Texto</ButtonRegister>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
