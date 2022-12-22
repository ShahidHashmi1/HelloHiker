import { gql } from '@apollo/client';

export const GET_ME = gql`
    query me {
        me {
            _id
            name        
        }
    }
`;

export const FIND_USER = gql`
    query findUser {
        findUser {
            _id
            name
        }
    }
`;

export const FIND_TRAIL = gql`
    query saveTrail {
        saveTrail {
            name
            link
        }
    }
`;
