import { render, screen } from '@testing-library/react';
import { FormLogin } from '.';

describe('<FormLogin/>', () => {
  it('should render with default values', () => {
    render(<FormLogin>Texto</FormLogin>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
