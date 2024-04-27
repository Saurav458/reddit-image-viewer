import axios from 'axios';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import RedditImage from '../RedditImage/RedditImage';
// Mock axios
jest.mock('axios');

describe('RedditImage component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders posts correctly', async () => {
    // Mock data
    const mockResponse = {
      data: {
        data: {
          children: [
            { data: { title: 'Title 1', url: 'https://example.com/image1.jpg' } },
            { data: { title: 'Title 2', url: 'https://example.com/image2.jpg' } },
          ],
          after: 'abc123', // Simulate next page token
        },
      },
    };
    // Mock axios.get
    jest.spyOn(axios, 'get').mockResolvedValueOnce(mockResponse);

    render(<RedditImage />);

    expect(screen.getByTestId('loading-indicator')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByTestId('loading-indicator')).toBeNull();
    });

    // Check if posts are rendered correctly
    expect(screen.getByText('Title 1')).toBeInTheDocument();
    expect(screen.getByText('Title 2')).toBeInTheDocument();
    expect(screen.getAllByAltText('Post Image')).toHaveLength(2); // Adjust alt text as needed
  });

});
