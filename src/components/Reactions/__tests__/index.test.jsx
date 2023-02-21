/* eslint-disable react/jsx-props-no-spreading */
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Reactions from '..';

describe('Reactions', () => {
  const mockProps = {
    count: 0,
    liked: false,
    onReact: jest.fn(),
    onLike: jest.fn(),
  };
  it('should call clap function when clap icon clicked', () => {
    const { getByAltText } = render(<Reactions {...mockProps} />);

    const clap = getByAltText('clapImage');
    fireEvent.click(clap);
    expect(mockProps.onReact).toHaveBeenCalled();
  });
  it('should render black heart when liked is false', () => {
    const { getByAltText } = render(<Reactions {...mockProps} />);

    const heart = getByAltText('heartImg');
    expect(heart.src).toContain('heart-black.svg');
  });
  it('should render red heart when liked is true', () => {
    const { getByAltText } = render(<Reactions {...mockProps} liked />);

    const heart = getByAltText('heartImg');
    expect(heart.src).toContain('heart-red.svg');
  });
});
