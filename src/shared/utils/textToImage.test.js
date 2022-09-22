import { generate } from 'text-to-image';
import { textArrayToImages } from './textToImage';

jest.mock('text-to-image');

describe('shared - utils - textToImage', () => {
    generate.mockImplementation((text) => `${text} as image`);

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should an array of converted images', async () => {
        const result = await textArrayToImages(['some', 'text', 'to', 'change']);

        expect(result).toEqual(['some as image', 'text as image', 'to as image', 'change as image']);
    });
});
