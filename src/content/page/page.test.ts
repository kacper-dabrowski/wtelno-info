import fs from 'fs/promises';
import matter from 'gray-matter';
import { PageContentService } from './page';

jest.mock('fs/promises');
jest.mock('gray-matter');

describe('service - contentService', () => {
    let service: PageContentService;

    beforeEach(() => {
        service = new PageContentService('testPost');
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should throw an error to fail build, when given file does not exist', async () => {
        (fs.readFile as jest.Mock).mockRejectedValue(new Error('not found file'));

        await expect(service.getContent()).rejects.toThrow(new Error('not found file'));
    });

    it('should throw an error when created at is an invalid date', async () => {
        givenFileHasContent();
        givenInvalidDate();

        await expect(service.getContent()).rejects.toThrow(new Error('invalid date detected'));
    });

    it('should return an object of page data', async () => {
        givenFileHasContent();
        givenMarkdownParsingSuccess();

        expect(await service.getContent()).toEqual({
            content: 'some-content',
            createdAt: expect.any(Date),
        });
    });

    it('should remember the data once read', async () => {
        givenFileHasContent();
        givenMarkdownParsingSuccess();

        await service.getContent();

        await service.getContent();

        expect(fs.readFile).toHaveBeenCalledTimes(1);
        expect(fs.readFile).toHaveBeenCalledWith('content/testPost');
    });
});

function givenMarkdownParsingSuccess() {
    (matter as unknown as jest.Mock).mockImplementation((input) => ({
        data: { photoUrl: 'some-url', createdAt: new Date() },
        content: input,
    }));
}

function givenInvalidDate() {
    (matter as unknown as jest.Mock).mockReturnValue({
        data: { photoUrl: 'some-url', createdAt: 'Invalid' },
        content: 'some-content',
    });
}

function givenFileHasContent() {
    (fs.readFile as jest.Mock).mockResolvedValue('some-content');
}
