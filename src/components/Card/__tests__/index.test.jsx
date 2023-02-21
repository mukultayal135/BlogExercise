/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { fireEvent, screen, render } from '@testing-library/react';
import Card from '..';

describe('Card', () => {
  const mockProps = {
    date: '2nd Januray, 2018',
    readingTime: '2 mins',
    title: 'The future of abstract art and the culture ...',
    description:
      'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...',
    initialClaps: 10,
    img: 'abstract.png',
  };
  it('should render Card component', () => {
    const { asFragment } = render(<Card {...mockProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should increase clap count by 1 when click on clap icon', () => {
    render(<Card {...mockProps} />);
    const clap = screen.getByTestId('count-clap');
    const initialCount = clap.textContent;
    expect(initialCount).toBe('10');
    const clapIcon = screen.getByAltText('clapImage');
    fireEvent.click(clapIcon);
    expect(clap.textContent).toBe('11');
  });
  it('should change like icon when click on like icon', () => {
    render(<Card {...mockProps} />);
    const likeIcon = screen.getByAltText('heartImg');
    expect(likeIcon.src).toContain('heart-black.svg');
    fireEvent.click(likeIcon);
    expect(likeIcon.src).toContain('heart-red.svg');
  });
});
