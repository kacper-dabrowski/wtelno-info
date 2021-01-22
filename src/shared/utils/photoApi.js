import axios from 'axios';
import websources from '../websources';

const getPhotoData = async (text, options) => {
    const response = await axios.post(websources.PHOTOS_API_URL, { text, options });

    if (response.status !== 200) {
        throw new Error('Photo request failed');
    }
    const photoUrl = `data:image/png;base64,${response.data.photo}`;

    return photoUrl;
};

export default getPhotoData;
