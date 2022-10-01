import { gql } from "graphql-request";

export const airingQuery = gql`
  query ($status: MediaStatus, $page: Int) {
    Page(page: $page, perPage: 30) {
      pageInfo {
        lastPage
        currentPage
      }
      media(
        status: $status
        isAdult: false
        type: ANIME
        sort: POPULARITY_DESC
      ) {
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
      }
    }
  }
`;
