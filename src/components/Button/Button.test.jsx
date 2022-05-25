import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '.';

describe('<Button/>', () => {
  it('should render text', () => {
    render(<Button>Texto</Button>);
    expect(screen.getByRole('button', { name: 'Texto' })).toBeInTheDocument();
  });

  it('should event click of button', () => {
    const mock = jest.fn();
    render(<Button handleRegister={mock}>Texto</Button>);
    userEvent.click(screen.getByRole('button', { name: 'Texto' }));
    expect(mock).toBeCalledTimes(1);
  });

  it('should correct style', () => {
    render(<Button>Texto</Button>);
    expect(screen.getByRole('button', { name: 'Texto' })).toHaveStyle(
      'transition: all 500ms ease-in-out',
    );
  });

  it('should match snapshot', () => {
    render(<Button>Texto</Button>);
    expect(screen.getByRole('button', { name: 'Texto' })).toMatchSnapshot();
  });
});
