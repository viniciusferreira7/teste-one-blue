import { render, screen } from '@testing-library/react';
import { Button } from '.';

describe('<ButtonRegister/>', () => {
  it('should render with default values', () => {
    render(<Button>Texto</Button>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
