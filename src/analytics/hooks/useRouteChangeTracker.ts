import { useRouter } from 'next/router';
import { useEffect } from 'react';

export interface UseRouteChangeTracker {
    (config: { isEnabled: boolean | null; handler: (url: string) => void }): void;
}

export const useRouteChangeTracker: UseRouteChangeTracker = ({ isEnabled, handler }) => {
    const router = useRouter();

    useEffect(() => {
        if (!isEnabled) {
            return;
        }

        router.events.on('routeChangeComplete', handler);

        return () => router.events.off('routeChangeComplete', handler);
    }, [router.events, isEnabled, handler]);
};
