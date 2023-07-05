import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Main } from '@showoff/personal-portfolio.layouts.main';
import { Logo } from '@showoff/design.brand.logo';
import { ContactPage } from './contact-page';

export const SampleContactPage = () => (
  <MemoryRouter>
    <Main
      headerProps={{
        logo: <Logo />,
        navLinks: [
          { label: 'Projects', url: '/projects' },
          { label: 'Contact', url: '/contact' },
          { label: 'About me', url: '/about' },
        ]
      }}
      footerProps={{
        leftContent: 'Thanks for visiting.',
        rightContent: `© ${new Date().getFullYear()} Ober. All Rights Reserved.`
      }}
    >
      <ContactPage
        email="hello@tobias.com"
        socialLinks={[
          { name: 'github', url: 'https://github.com' },
        ]}
      />
    </Main>
  </MemoryRouter>
);
