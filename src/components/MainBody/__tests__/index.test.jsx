import React from 'react';
import { render, screen } from '@testing-library/react';
import MainBody from '..';

describe('MainBody', () => {
  it('should render all the cards', () => {
    render(<MainBody />);
    const cards = screen.getAllByTestId('card');
    expect(cards.length).toBe(6);
  });
});
