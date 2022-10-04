import { gql } from "graphql-request";

export const animeDetailQuery = gql`
  query ($id: Int) {
    Media(id: $id) {
      id
      description
      title {
        romaji
        english
        native
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
      seasonYear
      format
      type
      genres
      synonyms
      popularity
      favourites
      episodes
      source(version: 2)
      hashtag
      averageScore
      description
      bannerImage
      coverImage {
        large
        color
      }
      bannerImage
      trailer {
        id
        site
        thumbnail
      }
      rankings {
        rank
        type
        allTime
      }
      studios(isMain: true) {
        nodes {
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
            coverImage {
              large
              color
            }
            status(version: 2)
            format
          }
        }
      }
      airingSchedule(notYetAired: true, perPage: 2) {
        nodes {
          episode
          airingAt
        }
      }
      characters {
        edges {
          node {
            id
            name {
              full
            }
            image {
              large
            }
            image {
              large
            }
            media {
              edges {
                characterRole
              }
            }
          }
          voiceActors {
            name {
              full
            }
            languageV2
            image {
              large
            }
          }
        }
      }
      staff {
        edges {
          role
          node {
            id
            name {
              full
            }
            image {
              large
            }
          }
        }
      }
      recommendations(sort: RATING_DESC) {
        nodes {
          rating
          mediaRecommendation {
            id
            title {
              romaji
              english
              native
            }
            coverImage {
              large
              color
            }
          }
        }
      }
    }
  }
`;
