import { generate as generateImageFromText } from 'text-to-image';

export const textArrayToImages = async (text = []) => {
    const promises = text.map((str) => generateImageFromText(str, { textAlign: 'center' }));

    return Promise.all(promises);
};
