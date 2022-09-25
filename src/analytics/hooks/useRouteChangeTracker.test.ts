import { useRouter } from 'next/router';
import { renderHook } from '@testing-library/react-hooks';
import { useRouteChangeTracker } from './useRouteChangeTracker';

jest.mock('next/router', () => ({
    useRouter: jest.fn(),
}));

describe('analytics - GA - useGoogleAnalytics', () => {
    const routerEventSpies = { on: jest.fn(), off: jest.fn() };
    const mockedHandler = jest.fn();

    (useRouter as jest.Mock).mockReturnValue({
        events: routerEventSpies,
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should apply route tracking if google analytics enabled and clear listeners on onmount', async () => {
        const { unmount } = renderHook(() => useRouteChangeTracker({ isEnabled: true, handler: mockedHandler }));

        expect(routerEventSpies.on).toHaveBeenCalledWith('routeChangeComplete', mockedHandler);
        expect(routerEventSpies.off).not.toHaveBeenCalledWith('routeChangeComplete', mockedHandler);

        unmount();

        expect(routerEventSpies.off).toHaveBeenCalledWith('routeChangeComplete', mockedHandler);
    });

    it('should not apply route tracking if google analytics not enabled', async () => {
        renderHook(() => useRouteChangeTracker({ isEnabled: false, handler: mockedHandler }));

        expect(routerEventSpies.on).not.toHaveBeenCalledWith('routeChangeComplete', mockedHandler);
        expect(routerEventSpies.off).not.toHaveBeenCalledWith('routeChangeComplete', mockedHandler);
    });
});
