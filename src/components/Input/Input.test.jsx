import { render, screen } from '@testing-library/react';
import { Input } from '.';

describe('<Input/>', () => {
  it('should render with default values', () => {
    render(<Input>Texto</Input>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
