import { render, screen } from '@testing-library/react';
import { InputName } from '.';

describe('<InputName/>', () => {
  it('should render text in the placeholder', () => {
    render(<InputName text="Usuário" />);
    expect(screen.getByPlaceholderText('Usuário')).toBeInTheDocument();
  });

  it('should render text in the placeholder', () => {
    render(<InputName name="name" text="Usuário" />);
    expect(screen.getByPlaceholderText('Usuário')).toHaveAttribute(
      'name',
      'name',
    );
  });

  it('should have attribute required', () => {
    render(<InputName text="Usuário" />);
    expect(screen.getByPlaceholderText('Usuário')).toHaveAttribute('required');
  });

  it('should correct style', () => {
    render(<InputName name="name" text="Usuário" />);
    expect(screen.getByPlaceholderText('Usuário')).toHaveStyle(
      'font-size: 1.6rem',
    );
  });
});
