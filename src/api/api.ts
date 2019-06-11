export const pushSearch = (info: any) => {
  const method = "POST";
  const body = JSON.stringify(info);
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };
  return fetch(
    "https://search-tf-test-cqolkfvpwk7neum42wcrrpuika.ap-northeast-1.es.amazonaws.com/.kibana/testType",
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
