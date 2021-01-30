const websources = {
    STRAPI_CMS_URL: process.env.NODE_ENV === 'production' ? 'https://wtelno.tk' : 'https://wtelno.tk',
    PHOTOS_API_URL:
        process.env.NODE_ENV === 'production'
            ? 'https://utils-api.herokuapp.com/api/photos/transform'
            : 'https://cors-anywhere.herokuapp.com/https://utils-api.herokuapp.com/api/photos/transform',
};

export default websources;
