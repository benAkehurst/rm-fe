import { useState, useEffect } from 'react';
import { BASE_URL } from '../../constants';

const useProperties = (params) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/properties?sortBy=${params}`)
      .then((res) => res.json())
      .then((response) => {
        setProperties(response);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [params]);
  return { properties, loading, error };
};

export default useProperties;
