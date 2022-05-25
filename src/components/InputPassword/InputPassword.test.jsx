import { render, screen } from '@testing-library/react';
import { InputPassword } from '.';

describe('<InputPassword/>', () => {
  it('should render text in the placeholder', () => {
    render(<InputPassword text="Senha" />);
    expect(screen.getByPlaceholderText('Senha')).toBeInTheDocument();
  });

  it('should render text in the placeholder', () => {
    render(<InputPassword name="password" text="Senha" />);
    expect(screen.getByPlaceholderText('Senha')).toHaveAttribute(
      'name',
      'password',
    );
  });

  it('should have attribute required', () => {
    render(<InputPassword name="password" text="Senha" />);
    expect(screen.getByPlaceholderText('Senha')).toHaveAttribute('required');
  });
});
