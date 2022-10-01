import { gql } from "graphql-request";

export const getCollection = (ids) => {
  let collectionQuery = gql`
    fragment myMedia on Media {
      id
      title {
        romaji
        native
        english
      }
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      status
      season
      format
      genres
      synonyms
      popularity
      episodes
      source(version: 2)
      externalLinks {
        id
      }
      hashtag
      averageScore
      meanScore
      description
      bannerImage
      coverImage {
        extraLarge
        color
      }
      trailer {
        id
        site
        thumbnail
      }
      externalLinks {
        id
        site
        url
      }
      rankings {
        rank
        type
        season
        allTime
      }
      studios(isMain: true) {
        nodes {
          id
          name
          siteUrl
        }
      }
      relations {
        edges {
          relationType(version: 2)
          node {
            id
            title {
              romaji
              native
              english
            }
            siteUrl
          }
        }
      }
      airingSchedule(notYetAired: true, perPage: 2) {
        nodes {
          episode
          airingAt
        }
      }
      id
      title {
        romaji
        native
        english
      }
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      status
      season
      format
      genres
      synonyms
      popularity
      episodes
      source(version: 2)
      externalLinks {
        id
      }
      hashtag
      averageScore
      meanScore
      description
      bannerImage
      coverImage {
        extraLarge
        color
      }
      trailer {
        id
        site
        thumbnail
      }
      externalLinks {
        id
        site
        url
      }
      rankings {
        rank
        type
        season
      }
      studios(isMain: true) {
        nodes {
          id
          name
        }
      }
      relations {
        edges {
          relationType(version: 2)
          node {
            id
            title {
              romaji
              native
              english
            }
          }
        }
      }
      airingSchedule(notYetAired: true, perPage: 2) {
        nodes {
          episode
          airingAt
        }
      }
    }
  `;

  let subQuery = "";
  ids.forEach((id, index) => {
    subQuery += `anime${index}:Media(id:${id}) {
          ...myMedia
      },`;
  });
  collectionQuery += `{ ${subQuery} }`;
  return collectionQuery;
};
