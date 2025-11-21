import { useState, useEffect } from "react";

// Custom Hook for fetching data from an API
export const useFetch = (url) => {
  const [data, setData] = useState(null);     // store API data
  const [loading, setLoading] = useState(true); // show loading status

  useEffect(() => {
    fetch(url)
      .then((res) => res.json()) // convert response to JSON
      .then((data) => {
        setData(data);          // set received data
        setLoading(false);      // stop loading
      })
      .catch(() => setLoading(false)); // in case of error, stop loading
  }, [url]); // re-run if URL changes

  return { data, loading }; // return both states
};
