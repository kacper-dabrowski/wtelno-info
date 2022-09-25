import { useCallback } from 'react';
import { getGoogleAnalyticsSnippet, reportPageView } from '../google';
import { useRouteChangeTracker } from './useRouteChangeTracker';

export const useGoogleAnalytics = (): { injectSnippet: () => JSX.Element } => {
    useRouteChangeTracker({ isEnabled: true, handler: reportPageView });

    const injectSnippet = useCallback(() => getGoogleAnalyticsSnippet(), []);

    console.log(typeof injectSnippet);

    return { injectSnippet };
};
