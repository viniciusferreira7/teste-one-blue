import { render, screen } from '@testing-library/react';
import { FlagError } from '.';

describe('<FlagError/>', () => {
  it('should render text', () => {
    render(<FlagError>Erro</FlagError>);
    expect(screen.getByText('Erro')).toBeInTheDocument();
  });
  it('should render component with styles', () => {
    render(<FlagError>Erro</FlagError>);
    expect(screen.getByText('Erro')).toHaveStyle('color:#d42686');
  });
});
