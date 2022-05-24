import { render, screen } from '@testing-library/react';
import { FormRegister } from '.';

describe('<FormRegister/>', () => {
  it('should render with default values', () => {
    render(<FormRegister>Texto</FormRegister>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
