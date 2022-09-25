import { config } from '../shared/config';

export const getGoogleAnalyticsSnippet = (): JSX.Element => {
    const appKey = config.analytics.googleTag;

    return (
        <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${appKey}`} />
            <script
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                    __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${appKey}', { page_path: window.location.pathname });
                            `,
                }}
            />
        </>
    );
};

export const reportPageView = (url: string): void => {
    const appKey = config.analytics.googleTag;

    if (window && typeof window?.gtag === 'function') {
        window.gtag('config', appKey, { page_path: url });
    }
};
