import { animeApi } from "../graphql/animeApi";

export const fetcher = async (query, variables) => {
  const response = await animeApi(query, variables);
  // console.log(response);
  response === undefined && {
    data: null,
    error: "No response from the server.",
  };
  response.error && response;
  return response;
};
