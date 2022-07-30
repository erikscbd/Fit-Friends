import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
query GetProfile {
    getAllProfiles {
        firstName
        lastName
    }
}
`

