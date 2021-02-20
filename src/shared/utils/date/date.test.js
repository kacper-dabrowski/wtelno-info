import { formatDate } from './date';

it('should return a valid formatted date', () => {
    const date = 'Fri Feb 19 2021 16:23:11';

    const formattedDate = formatDate(date);

    expect(formattedDate).toEqual('19-02-2021 16:23');
});

it('should return an empty string if invalid date was passed', () => {
    const date = 'DUMMY_DATE';

    const formattedDate = formatDate(date);

    expect(formattedDate).toEqual('');
});
