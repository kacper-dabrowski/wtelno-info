import { GetStaticPropsResult } from 'next';

export async function asPageProps<T>(fn: () => Promise<T> | T): Promise<GetStaticPropsResult<T>> {
    try {
        const result = await fn();

        return {
            props: result,
        };
    } catch (err) {
        return {
            notFound: true,
        };
    }
}
