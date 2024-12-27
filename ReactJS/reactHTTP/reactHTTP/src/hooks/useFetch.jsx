import { useState, useEffect } from "react";

// Custom HOOK
export const useFetch = (url) => {
  const [data, setData] = useState(null);

  // Refatorando POST
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(null);

  // Loading
  const [loading, setLoading] = useState(false);

  // Tratamento de erros
  const [error, setError] = useState(null);

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setMethod(method);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      // Tratamento de Erros
      try {
        // Loading no ínicio da Requisição
        setLoading(true);

        const res = await fetch(url);
        const json = await res.json();

        setData(json);
      } catch (error) {
        console.log(error.message);

        setError("Houve algum erro ao carregar os dados!");
      }

      // Loadingo ao fim da Requisição
      setLoading(false);
    };

    fetchData();
  }, [url, callFetch]);

  //   Refatorando POST
  useEffect(() => {
    const httpRequest = async () => {
      let json;

      if (method === "POST") {
        // Loading
        setLoading(true);

        let fetchOptions = [url, config];

        const res = await fetch(...fetchOptions);
        json = await res.json();

        // Loading
        setLoading(false);
      }

      setCallFetch(json);
    };

    httpRequest();
  }, [config, method, url]);

  return { data, httpConfig, loading, error };
};
