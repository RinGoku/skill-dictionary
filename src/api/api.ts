var elasticsearch = require("elasticsearch");
var client = new elasticsearch.Client({
  host: `${process.env.REACT_APP_ELASTIC_SERVICE_ENDPOINT}`
});

/**
 * 文書登録
 * @param info 登録情報
 */
export const pushSearch = (info: any) => {
  const body = JSON.stringify(info);
  return client
    .create({
      index: "skill",
      id: new Date().getTime(),
      type: "skill",
      refresh: "true",
      body: body
    })
    .then((payload: any) => {
      return {
        payload
      };
    })
    .catch((error: any) => {
      console.log(error);
      return { error };
    });
};

/**
 * 文書検索
 * @param queryParam クエリパラメータ
 */
export const fetchData = (queryParam: any) => {
  return client
    .search({
      index: "skill",
      body: {
        query: {
          multi_match: {
            fields: ["name", "content", "tag"],
            query: queryParam.name
          }
        }
      }
    })
    .then((payload: any) => {
      return {
        payload
      };
    })
    .catch((error: any) => {
      console.log({ error });
      return { error };
    });
};
