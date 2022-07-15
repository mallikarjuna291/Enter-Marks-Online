
import {createRoot} from 'react-dom/client';

import App from './App';
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,

} from "@apollo/client";



const httpLink = new HttpLink({
  uri: 'https://pro-man-46.hasura.app/v1/graphql',
  headers: {
    'x-hasura-access-key': 'KG6MmiP7nLkyz63cB5s0q4IJz9Ond4vCmlhfSJm8AbOyM9iEnU5AZsO34GjMDXel'
  }
// }),
});


const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
});


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <ApolloProvider client={client}>
    <App />
 
  </ApolloProvider>
 
);