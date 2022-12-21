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
    me: User
    users: [User]!
    user(userId: ID!): User
}

type Auth {
    token: ID!
    user: User
}

type Mutation {
login(email: String!, password: String): Auth
addUser(name: String!, email: String!, password: String!): Auth
saveTrail()
removeTrail()
}
`;

export default {typeDefs}