import axios from 'axios';
import getPhotoData from './photoApi';

jest.mock('axios');

describe('photoApi util ->', () => {
    function withValidPhotoApiResponse() {
        return { data: { photo: 'PHOTO_URL' }, status: 200 };
    }

    function withInvalidPhotoApiResponse() {
        return { data: { photo: 'PHOTO_URL' }, status: 400 };
    }

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should return a valid photo url', async () => {
        jest.spyOn(axios, 'post').mockImplementation(async () => withValidPhotoApiResponse());
        const text = 'DUMMY_TEXT';
        const options = 'DUMMY_OPTIONS';

        const result = await getPhotoData(text, options);

        expect(result).toBe(`data:image/png;base64,PHOTO_URL`);
    });

    it('should throw an error, if response status is not 200', async () => {
        jest.spyOn(axios, 'post').mockImplementation(async () => withInvalidPhotoApiResponse());

        const text = 'DUMMY_TEXT';
        const options = 'DUMMY_OPTIONS';

        await expect(getPhotoData(text, options)).rejects.toEqual(new Error('Photo request failed'));
    });
});
