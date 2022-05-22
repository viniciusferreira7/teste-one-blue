import { render, screen } from '@testing-library/react';
import { Form } from '.';

describe('<Form/>', () => {
  it('should render with default values', () => {
    render(<Form>Texto</Form>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
