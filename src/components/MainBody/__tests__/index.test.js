import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import MainBody from '..';
import makeRequest from '../../../utils/makeRequest';
import { mockBlogData } from '../../../mocks/blogData';
import { BlogPostContext } from '../../../contexts/BlogPostContext';

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
    render(
      <BlogPostContext.Provider
        value={{ allBlogData: null, setAllBlogData: jest.fn() }}
      >
        <MainBody />
      </BlogPostContext.Provider>
    );
    expect(screen.getByText('Loading....')).toBeTruthy();
    // await waitFor(() => {
    //   expect(screen.getByText('mock title 1')).toBeTruthy();
    // });
    expect(makeRequest).toHaveBeenCalledTimes(1);
  });
  it('should render all the cards when data is loaded', async () => {
    makeRequest.mockResolvedValue(mockBlogData);
    const mockSetAllBlogData = jest.fn();
    render(
      <BlogPostContext.Provider
        value={{
          allBlogData: mockBlogData,
          setAllBlogData: mockSetAllBlogData,
        }}
      >
        <MainBody />
      </BlogPostContext.Provider>
    );
    await waitFor(() => {
      expect(screen.getAllByTestId('card').length).toEqual(2);
    });
    await waitFor(() => {
      expect(mockSetAllBlogData).toHaveBeenCalledTimes(1);
    });
    expect(mockSetAllBlogData).toHaveBeenCalledWith(mockBlogData);
  });
});
