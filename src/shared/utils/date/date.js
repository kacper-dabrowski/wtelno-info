import moment from 'moment';

export const formatDate = (date) => {
    const momentDate = moment(date);

    if (!momentDate.isValid()) {
        return '';
    }

    return momentDate.format('DD-MM-YYYY HH:mm');
};
