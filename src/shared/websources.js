const websources = {
    STRAPI_CMS_URL: 'https://wtelno.ml',
    PHOTOS_API_URL:
        process.env.NODE_ENV === 'production'
            ? 'https://utils-api.herokuapp.com/api/photos/transform'
            : 'http://localhost:3001/api/photos/transform',
};

export default websources;
