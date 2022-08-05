import { gql } from '@apollo/client';

export const QUERY_ME = gql`
query Profiles {
  me {
    username
    workouts {
      workoutText
      workoutTime
    }
    foodEntries {
      foodType
      calories
    }
  }
}
`

export const QUERY_PROFILES = gql`
query Profiles {
  profiles {
    username
    workouts {
      workoutText
      workoutTime
    }
    foodEntries {
      foodType
      calories
    }
  }
}`

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      username
      foodEntries
      workouts
    }
  }
`

;
