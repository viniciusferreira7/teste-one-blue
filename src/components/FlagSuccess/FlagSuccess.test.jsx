import { render, screen } from '@testing-library/react';
import { FlagSuccess } from '.';

describe('<FlagSuccess/>', () => {
  it('should render text', () => {
    render(<FlagSuccess>Sucesso</FlagSuccess>);
    expect(screen.getByText('Sucesso')).toBeInTheDocument();
  });
  it('should render component with styles', () => {
    render(<FlagSuccess>Sucesso</FlagSuccess>);
    expect(screen.getByText('Sucesso')).toHaveStyle(
      'color:rgba(93, 12, 255, 1)',
    );
  });

  it('should match snapshot', () => {
    render(<FlagSuccess>Sucesso</FlagSuccess>);
    expect(screen.getByText('Sucesso')).toMatchSnapshot();
  });
});
