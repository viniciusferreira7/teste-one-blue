import { render } from '@testing-library/react';
import { FlagSuccess } from '.';

describe('<FlagSucess/>', () => {
  it('should render with default values', () => {
    render(<FlagSuccess>Texto</FlagSuccess>);
    // expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
