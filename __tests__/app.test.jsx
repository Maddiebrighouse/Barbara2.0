import React from 'react';
import { render, screen } from '@testing-library/react';

import Homepage from '../src/components/Homepage/homepage';

describe('Homepage', () => {
  it('renders the main portrait image', () => {
    render(<Homepage />);
    expect(
      screen.getByAltText(/sketch\/link drawing of barbara darragh/i),
    ).toBeInTheDocument();
  });
});