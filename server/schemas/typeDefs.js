const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Profile {
    _id: ID!
    name: String!
    email: String!
    trails: [Trails]
}

type Trails {
    name: String!
    description: String!
    image: String
    link: String
}

type Query {
    me: Profile
    users: [Profile]!
    user(profileId: ID!): Profile
}

type Auth {
    token: ID!
    profile: Profile
}

type Mutation {
login(email: String!, password: String): Auth
addUser(name: String!, email: String!, password: String!): Auth
removeProfile(name: String!, email: String!, password: String!): Auth
addTrail(profilelId: ID!): Profile
removeTrail(profileId: ID!): Profile
}
`;

module.exports = typeDefs;