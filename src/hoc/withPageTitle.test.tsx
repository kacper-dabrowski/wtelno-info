import { render, screen } from '@testing-library/react';
import React, { FC, ReactNode } from 'react';
import { withPageTitle } from './withPageTitle';

jest.mock('next/head', () => ({ children }) => <div>{children}</div>);

describe('withPageTitle', () => {
    const Container: FC<{ children: ReactNode }> = ({ children }) => <div>{children}</div>;

    it('should set a default title for a wrapped page, if no title provided', () => {
        const PageTitleProvider = withPageTitle(Container);

        render(<PageTitleProvider />);

        expect(screen.getByText('Oficjalna strona wsi Wtelno')).toBeInTheDocument();
    });

    it('should set a proper title for a wrapped page, if title provided', () => {
        const PageTitleProvider = withPageTitle(Container, { title: 'MY_OWN_TITLE' });

        render(<PageTitleProvider />);

        expect(screen.getByText('MY_OWN_TITLE')).toBeInTheDocument();
    });
});
