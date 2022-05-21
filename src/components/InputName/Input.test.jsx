import { render, screen } from '@testing-library/react';
import { InputName } from '.';

describe('<Input/>', () => {
  it('should render with default values', () => {
    render(<InputName>Texto</InputName>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
