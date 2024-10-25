import { render, screen } from '@testing-library/react';
import FormInput from '.';
import { FieldError } from 'react-hook-form';

const mockRegister = {
  name: 'test',
  onBlur: vi.fn(),
  onChange: vi.fn(),
  ref: vi.fn(),
};

const mockNameErrors: FieldError = {
  type: 'required',
  message: 'Name is required',
};

describe('FormInput Component', () => {
  test('renders input element correctly', () => {
    render(<FormInput type="text" register={mockRegister} placeholder="Your Name" />);

    const inputElement = screen.getByPlaceholderText('Your Name');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'text');
  });

  test('renders textarea element correctly', () => {
    render(<FormInput type="textarea" register={mockRegister} placeholder="Your Feedback" />);

    const textareaElement = screen.getByPlaceholderText('Your Feedback');
    expect(textareaElement).toBeInTheDocument();
    expect(textareaElement).toHaveAttribute('rows', '5');
  });

  test('displays error message when error is present', () => {
    render(
      <FormInput
        error={mockNameErrors}
        type="text"
        register={mockRegister}
        placeholder="Your Name"
      />,
    );

    const errorMessage = screen.getByText('Name is required');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveClass('text-red-700');
  });

  test('does not display error message when no error is present', () => {
    render(<FormInput type="text" register={mockRegister} placeholder="Your Name" />);

    const errorMessage = screen.queryByText('Name is required');
    expect(errorMessage).not.toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { asFragment } = render(
      <FormInput type="text" register={mockRegister} placeholder="Your Name" />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
