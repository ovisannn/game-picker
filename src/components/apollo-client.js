import { ApolloClient, InMemoryCache } from '@apollo/client'
import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';

const httpLink = new HttpLink({
  uri: 'https://hopeful-shepherd-55.hasura.app/v1/graphql',
  headers : {
    'x-hasura-admin-secret':
    '19C33UQDfwtupDvqy8v4C76VArfWBQj0h4xAO5z3s4rRvABNUzKk5mUszMevtBJT',
} 
});

const wsLink = new WebSocketLink({
  uri: 'wss://hopeful-shepherd-55.hasura.app/v1/graphql',
  options: {
    reconnect: true,
    connectionParams:{
        headers : {
            'x-hasura-admin-secret':
            '19C33UQDfwtupDvqy8v4C76VArfWBQj0h4xAO5z3s4rRvABNUzKk5mUszMevtBJT',
        } 
    }
  }
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const Client = new ApolloClient({
    link: splitLink,
    cache : new InMemoryCache()
})

export default Client