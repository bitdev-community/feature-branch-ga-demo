import React from 'react';
import { render } from '@testing-library/react';
import { BasicMessage } from './message.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicMessage />);
  const rendered = getByText('Looking forward to hear from you!');
  expect(rendered).toBeTruthy();
});
