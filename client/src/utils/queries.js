import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
query GetProfile {
    getAllProfiles {
        firstName
        lastName
    }
}
`

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      username
      foodEntries
      workouts
    }
  }
`;
