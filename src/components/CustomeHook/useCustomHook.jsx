import { useEffect, useState } from "react";

const useCustomHook = (url) => {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
        const res = await fetch(url);
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    }

  useEffect(() => {
      fetchData();
  }, [url]);

  return { data };
};

export default useCustomHook;
