import { gql } from '@apollo/client';

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const SIGNUP = gql`
    mutation signup($email: String!, $username: String!, $password: String!) {
        signup(email: $email, username: $username, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($bookId: ID!, $authors: [String], $title: String!, $description: String, $image: String!) {
        saveBook(bookId: $bookId, authors: $authors, title: $title, description: $description, image: $image) {
            _id
            username
            bookCount
            savedBooks {
                bookId
                authors
                title
                description
                image
            }
    }
`;
export const DELETE_BOOK = gql`
    mutation deleteBook($bookId: ID!) {
        deleteBook(bookId: $bookId) {
            username
            bookCount
            savedBooks {
                bookId
            }
        }
    }
`