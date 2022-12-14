const { gql } = require ('apollo-server-express');

module.exports = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }
    type Book {
        bookId: ID
        authors: [String]
        title: String
        description: String
        image: String
    }
    type Auth {
       token: ID
       user: User
    }
    input BookInput {
        bookId: ID
        authors: [String]
        title: String
        description: String
        image: String
    }
    type Query {
        me(username: String, id: ID): User
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        signup(email: String!, usernanme: String!, password: String!): Auth
        saveBook(bookId: ID!, authors: [String], title: String!, description: Strin, image: String!): User
        deleteBook(bookId: ID!): User
    }
`;