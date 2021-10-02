import React from 'react';
import ContactForm from './ContactForm';
import { headersConfig } from '../../shared/headers/headers';
import { withHeaders } from '../../hoc/withHeaders';

const Contact = () => <ContactForm />;

export default withHeaders(Contact, headersConfig.contact.main);
