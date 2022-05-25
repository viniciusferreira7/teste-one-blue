import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { FormRegister } from '.';

describe('<FormRegister/>', () => {
  it('should render FormRegister', async () => {
    await act(async () => render(<FormRegister />));
    const formRegister = screen.getByRole('heading', { name: 'Cadastre-se' });
    expect(formRegister).toBeInTheDocument();
  });

  it('should render inputs and button', async () => {
    await act(async () => render(<FormRegister />));
    expect(
      screen.getByPlaceholderText('Digite seu nome de usuário'),
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Digite sua senha')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Cadastrar' }),
    ).toBeInTheDocument();
  });
});
