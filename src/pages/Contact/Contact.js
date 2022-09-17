import React from 'react';
import ContactForm from './ContactForm';
import { withHeaders } from '../../src/hoc/withHeaders';
import { headersConfig } from '../../src/shared/headers/headers';

const Contact = () => <ContactForm />;

export default withHeaders(Contact, headersConfig.contact.main);
