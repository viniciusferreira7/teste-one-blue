import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Home } from '.';

describe('<Home/>', () => {
  it('should render children components', async () => {
    await act(async () => render(<Home />));
    expect(document.querySelector('form')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Entrar' })).toBeInTheDocument();
  });

  it('should match snapshot', async () => {
    await act(async () => render(<Home />));
    expect(document.querySelector('form')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Entrar' }).parentElement,
    ).toMatchSnapshot();
  });
});
