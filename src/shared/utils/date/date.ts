import { format, isValid } from 'date-fns';

export const formatDate = (date) => {
    const dateObject = new Date(date);

    if (!isValid(dateObject)) {
        return '';
    }

    return format(dateObject, 'dd-MM-yyyy HH:mm');
};

export function assertValidDate(dateString: string | number | Date): asserts dateString is Date {
    if (!isValid(new Date(dateString))) {
        throw new Error('invalid date detected');
    }
}
