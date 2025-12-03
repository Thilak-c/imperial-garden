import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

describe('Hero Component', () => {
  it('renders the main headline', () => {
    render(<Hero />);
    expect(screen.getByText(/Host Legendary/i)).toBeInTheDocument();
  });

  it('renders call-to-action buttons', () => {
    render(<Hero />);
    expect(screen.getByText(/Book Visit/i)).toBeInTheDocument();
    expect(screen.getByText(/View Packages/i)).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(<Hero />);
    const buttons = screen.getAllByRole('link');
    buttons.forEach(button => {
      expect(button).toHaveAttribute('href');
    });
  });
});

