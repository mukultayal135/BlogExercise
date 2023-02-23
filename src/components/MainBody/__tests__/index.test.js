import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import MainBody from '..';
import makeRequest from '../../../utils/makeRequest';
import { mockBlogData } from '../../../mocks/blogData';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('../../../utils/makeRequest/');

describe('MainBody', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should show loading text when data is still loading', async () => {
    makeRequest.mockResolvedValue(mockBlogData);
    expect(makeRequest).not.toHaveBeenCalled();
    const { asFragment } = render(<MainBody />);
    expect(screen.getByText('Loading....')).toBeTruthy();
    await waitFor(() => {
      expect(screen.getByText('mock title 1')).toBeTruthy();
    });
    expect(asFragment()).toMatchSnapshot();
    expect(makeRequest).toHaveBeenCalledTimes(1);
  });
  it('should render all the cards when data is loaded', async () => {
    makeRequest.mockResolvedValue(mockBlogData);
    render(<MainBody />);

    await waitFor(() => {
      expect(screen.getAllByTestId('card').length).toEqual(2);
    });
  });
});
