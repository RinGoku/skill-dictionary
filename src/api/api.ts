export const pushSearch = (info: any) => {
  const method = "POST";
  const body = JSON.stringify(info);
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };
  return fetch(
    "https://search-skill-dictionary-ghyqimtg5odfgwxln5tbcpnpfe.ap-northeast-1.es.amazonaws.com/.kibana/testType",
    {
      method,
      headers,
      body
    }
  )
    .then(res => res.json())
    .then(payload => {
      return {
        payload
      };
    })
    .catch(error => {
      return { error };
    });
};

export const fetchData = (queryParam: any) => {
  //   const method = "GET";
  //   const body = JSON.stringify(info);
  //   const headers = {
  //     Accept: "application/json",
  //     "Content-Type": "application/json"
  //   };
  return fetch(
    `https://search-skill-dictionary-ghyqimtg5odfgwxln5tbcpnpfe.ap-northeast-1.es.amazonaws.com/.kibana/_search?q=name:${
      queryParam.name
    }`
  )
    .then(res => res.json())
    .then(payload => {
      console.log({ payload });
      return {
        payload
      };
    })
    .catch(error => {
      return { error };
    });
};
