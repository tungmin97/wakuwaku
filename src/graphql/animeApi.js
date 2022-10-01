import { GraphQLClient } from "graphql-request";

const endpoint = "https://graphql.anilist.co";
const client = new GraphQLClient(endpoint, {});
const formatedErr = (err) => JSON.parse(JSON.stringify(err)).response;

export const animeApi = (query, variables) =>
  client
    .request(query, variables)
    .then((data) => data)
    .catch((err) => ({
      data: null,
      error: formatedErr(err).status,
    }));
