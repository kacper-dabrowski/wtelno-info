import axios from 'axios';
import websources from '../websources';

export const fetchStrapiContent = async (endpoint, setData, setError) => {
    try {
        const strapiContent = await axios.get(`${websources.STRAPI_CMS_URL}/${endpoint}`);
        const page = strapiContent.data;

        if (setData) {
            setData(page);
        }

        return page;
    } catch (error) {
        setError(true);
        return error;
    }
};
