import React from 'react';
import { render } from '@testing-library/react';
import { MUIPreviewContext } from '@showoff/dev.preview-contexts.mui-preview-context';
import { SampleContactPage } from './contact-page.composition';

it('should render with the correct breadcrumb', () => {
  const { getByText } = render(<MUIPreviewContext><SampleContactPage /></MUIPreviewContext>);
  const rendered = getByText('Contact.');
  expect(rendered).toBeTruthy();
});
