import { ApolloClient, InMemoryCache } from '@apollo/client'

const Client = new ApolloClient({
    uri :'https://hopeful-shepherd-55.hasura.app/v1/graphql',
    cache : new InMemoryCache(),
    headers : {
        'x-hasura-admin-secret':
        '19C33UQDfwtupDvqy8v4C76VArfWBQj0h4xAO5z3s4rRvABNUzKk5mUszMevtBJT',
    } 
})

export default Client