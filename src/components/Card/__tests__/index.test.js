/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { fireEvent, screen, render, waitFor } from '@testing-library/react';
import Card from '..';
import makeRequest from '../../../utils/makeRequest';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));
jest.mock('../../../utils/makeRequest', () => jest.fn());
describe('Card', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  const mockProps = {
    id: 2,
    date: '6/29/2022 4:52:48 PM UTC',
    reading_time: '4 mins',
    title: 'mock title 2',
    description: 'mock description 2',
    claps: 12,
    liked: false,
    image: 'abstract.png',
  };
  it('should render Card component', () => {
    const { asFragment } = render(<Card blogData={mockProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should increase clap count by 1 when click on clap icon', async () => {
    makeRequest.mockResolvedValue({ claps: 12 });
    render(<Card blogData={mockProps} />);
    const clapCount = screen.getByTestId('count-clap');
    const initialCount = clapCount.textContent;
    expect(initialCount).toBe('12');
    const clapIcon = screen.getByAltText('clapImage');
    fireEvent.click(clapIcon);
    await waitFor(() => {
      expect(clapCount.textContent).toBe('13');
    });
  });
  it('should change heart icon to red when click on black heart icon', async () => {
    makeRequest.mockResolvedValue({ like: true });
    render(<Card blogData={mockProps} />);
    const likeIcon = screen.getByAltText('heartImg');
    expect(likeIcon.src).toContain('heart-black.svg');
    fireEvent.click(likeIcon);
    await waitFor(() => {
      expect(likeIcon.src).toContain('heart-red.svg');
    });
  });
  it('should change heart icon to black when click on red heart icon', async () => {
    makeRequest.mockResolvedValue({ like: false });
    render(<Card blogData={{ ...mockProps, liked: true }} />);
    const likeIcon = screen.getByAltText('heartImg');
    expect(likeIcon.src).toContain('heart-red.svg');
    fireEvent.click(likeIcon);
    await waitFor(() => {
      expect(likeIcon.src).toContain('heart-black.svg');
    });
  });
  // it('should change get error when clap not updated', async () => {
  //   makeRequest.mockRejectedValue();
  //   render(<Card blogData={{ ...mockProps, liked: true }} />);
  //   const likeIcon = screen.getByAltText('heartImg');
  //   expect(likeIcon.src).toContain('heart-red.svg');
  //   fireEvent.click(likeIcon);
  //   await waitFor(() => {
  //     expect(likeIcon.src).toContain('heart-red.svg');
  //   });
  // });
});
