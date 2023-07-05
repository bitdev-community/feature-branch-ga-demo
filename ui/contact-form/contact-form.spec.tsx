import React from 'react';
import { render } from '@testing-library/react';
import { SampleContactForm } from './contact-form.composition';

it('should have submit button as disabled when content empty', () => {
  const { getByText } = render(<SampleContactForm />);
  const rendered = getByText('Send Message') as HTMLButtonElement;
  expect(rendered.disabled).toBeTruthy();
});
