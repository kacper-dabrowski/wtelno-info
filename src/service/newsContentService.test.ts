import fs from 'fs/promises';
import matter from 'gray-matter';
import { NewsContentService } from './newsContentService';

jest.mock('fs/promises');
jest.mock('gray-matter');

describe('service - contentService', () => {
    let service: NewsContentService;

    beforeEach(() => {
        service = new NewsContentService('testPosts');
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should throw an error to fail build, when given directory does not exist', async () => {
        givenDirectoryNotFound();

        await expect(service.getPageData()).rejects.toThrow(new Error('not found dir'));
    });

    it('should throw an error to fail build, when given file does not exist', async () => {
        givenDirectoryContainsFilenames();

        (fs.readFile as jest.Mock).mockRejectedValue(new Error('not found file'));

        await expect(service.getPageData()).rejects.toThrow(new Error('not found file'));
    });

    it('should throw an error when data photoUrl is something else than optional string', async () => {
        givenDirectoryContainsFilenames();
        givenFileHasContent();
        givenInvalidPhotoUrl();

        await expect(service.getPageData()).rejects.toThrow(
            new Error('unknown data passed when reading dirname: testPosts, filename some-file')
        );
    });

    it('should throw an error when created at is an invalid date', async () => {
        givenDirectoryContainsFilenames();
        givenFileHasContent();
        givenInvalidDate();

        await expect(service.getPageData()).rejects.toThrow(
            new Error('invalid created at detected in: testPosts/some-file')
        );
    });

    it('should return an array of page data', async () => {
        givenDirectoryContainsFilenames();
        givenFileHasContent();
        givenMarkdownParsingSuccess();

        expect(await service.getPageData()).toEqual([
            { content: 'some-content', createdAt: expect.any(Date), photoUrl: 'some-url' },
        ]);
    });

    it('should remember the data once read', async () => {
        givenDirectoryContainsFilenames();
        givenFileHasContent();
        givenMarkdownParsingSuccess();

        await service.getPageData();

        await service.getPageData();

        expect(fs.readdir).toHaveBeenCalledTimes(1);
        expect(fs.readFile).toHaveBeenCalledTimes(1);
        expect(fs.readFile).toHaveBeenCalledWith('content/posts/testPosts/some-file');
    });
});

function givenInvalidPhotoUrl() {
    (matter as unknown as jest.Mock).mockReturnValue({ data: { photoUrl: 123 }, content: 'some-content' });
}

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

function givenDirectoryContainsFilenames(fileNames = ['some-file']) {
    (fs.readdir as jest.Mock).mockResolvedValue(fileNames);
}

function givenDirectoryNotFound() {
    (fs.readdir as jest.Mock).mockRejectedValue(new Error('not found dir'));
}
