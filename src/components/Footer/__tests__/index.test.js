import React from 'react';
import { render } from '@testing-library/react';
import Footer from '..';

describe('Header', () => {
  it('should render correctly once more', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
