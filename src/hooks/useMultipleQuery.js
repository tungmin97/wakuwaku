import { fetcher } from "../helper/fetcher";
import { getCollection } from "../helper/getCollection";

export const useMultipleQuery = async (ids) => {
  //Resolve max complexity of queries call (500)
  let tempArr,
    queryArrSize = 4;

  let maxIds = [];
  for (let i = 0; i < ids.length; i += queryArrSize) {
    tempArr = ids.slice(i, i + queryArrSize);
    maxIds.push(tempArr);
  }

  let responseArr = [];
  for (let k = 0; k < maxIds.length; k++) {
    responseArr.push(getCollection(maxIds[k]));
  }

  let promises = responseArr.map((query) => fetcher(query));
  const responses = await Promise.all(promises);

  let responsesArr = [];
  responses.forEach((response) => responsesArr.push(Object.values(response)));

  return responsesArr.flat();
};
