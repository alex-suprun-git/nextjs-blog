import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Navigation from '.';

// Mock next/link
vi.mock('next/link', () => ({
  __esModule: true,
  default: ({ href, children, ...rest }: any) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

vi.mock('node-mailjet', () => ({
  __esModule: true,
  default: {
    apiConnect: () => ({
      post: () => ({
        request: vi.fn().mockResolvedValue({ body: 'Mocked response' }),
      }),
    }),
  },
}));

// Mock next/image
vi.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    const { src, alt, width, height, ...rest } = props;
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={alt} width={width} height={height} {...rest} />
    );
  },
}));

// Mock usePathname
vi.mock('next/navigation', () => ({
  usePathname: () => '/about', // Provide a mock path here
}));

describe('Navigation Component', () => {
  it('should render correctly and match snapshot', () => {
    const { asFragment } = render(<Navigation />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render navigation links', () => {
    render(<Navigation />);
    const navLinks = screen.getAllByRole('link');

    expect(navLinks).toHaveLength(13);

    expect(navLinks[0]).toHaveTextContent('NextJS Blog ©');
    expect(navLinks[0]).toHaveAttribute('href', '/');

    expect(navLinks[1]).toHaveTextContent('Home');
    expect(navLinks[1]).toHaveAttribute('href', '/');

    expect(navLinks[2]).toHaveTextContent('About');
    expect(navLinks[2]).toHaveAttribute('href', '/about');

    expect(navLinks[3]).toHaveTextContent('Publications');
    expect(navLinks[3]).toHaveAttribute('href', '/publications');
  });

  it('should display the Feedback buttons', () => {
    render(<Navigation />);
    const feedbackButton = screen.getAllByText('Leave a Feedback');
    expect(feedbackButton).toHaveLength(2);
  });
});
