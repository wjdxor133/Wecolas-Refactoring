import { useState, useEffect } from "react";
import axios from "axios";

const useRequest = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const getFreshData = async () => {
      try {
        const { data: response } = await axios.get(url);
        setData(response);
      } catch (e) {
        setError(e);
      }
    };
    getFreshData();
  }, [url]);

  const loading = !data && !error;

  return {
    data,
    loading,
    error,
  };
};
export default useRequest;
