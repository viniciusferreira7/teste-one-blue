import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { FormLogin } from '.';

describe('<FormLogin/>', () => {
  it('should render FormLogin', async () => {
    await act(async () => render(<FormLogin />));
    const formLogin = screen.getByRole('heading', { name: 'Entrar' });
    expect(formLogin).toBeInTheDocument();
  });

  it('should render inputs and button', async () => {
    await act(async () => render(<FormLogin />));
    expect(
      screen.getByPlaceholderText('Digite seu nome de usuário'),
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Digite sua senha')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Entrar' })).toBeInTheDocument();
  });

  it('should match snapshot', async () => {
    await act(async () => render(<FormLogin />));
    expect(
      screen.getByPlaceholderText('Digite seu nome de usuário').parentElement,
    ).toMatchSnapshot();
  });
});
