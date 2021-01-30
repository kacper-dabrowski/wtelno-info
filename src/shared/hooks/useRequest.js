import axios from 'axios';
import { useEffect, useState } from 'react';

const fetchData = async (url, method, data, setLoading, setResponseData) => {
    const response = await axios({ url, method, data });
    setResponseData(response);
    setLoading(false);
};

const useRequest = (url, method, data = null) => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            fetchData(url, method, data, setLoading, setResponse);
        } catch (err) {
            setError(err);
        }
    }, [url, method, data]);

    return [response, loading, error];
};

export default useRequest;
