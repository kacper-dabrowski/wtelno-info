import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

const fetchData = async (requestConfig, setLoading, setResponseData, setError) => {
    try {
        const { url, method, data } = requestConfig;
        setError(false);
        setLoading(true);
        const response = await axios({ url, method, data, headers: { 'Content-Type': 'application/json' } });
        setResponseData(response);
        setLoading(false);
    } catch (error) {
        setError(error);
    }
};

const useRequest = (url, method, data = null) => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { current: requestConfig } = useRef({
        data,
        method,
        url,
    });

    useEffect(() => {
        fetchData(requestConfig, setLoading, setResponse, setError);
    }, [requestConfig]);

    return [response, loading, error];
};

export default useRequest;
