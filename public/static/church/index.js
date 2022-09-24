import lqPhotos from './low-quality';
import hqPhotos from './high-quality';

const photos = lqPhotos.map((photo, index) => {
    return {
        lq: photo,
        hq: hqPhotos[index],
    };
});
export default photos;
