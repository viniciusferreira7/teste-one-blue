import { render } from '@testing-library/react';
import { FlagError } from '.';

describe('<FlagError/>', () => {
  it('should render with default values', () => {
    render(<FlagError>Texto</FlagError>);
    // expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
