const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Profile {
    _id: ID!
}
`;

export default {typeDefs}