import React from 'react';
import { ContactForm } from './contact-form';

export const SampleContactForm = () => {
  const handleSubmit = async (values) => {
    console.log(values);
  };

  return (
    <ContactForm
      onSubmit={handleSubmit}
    />
  );
}