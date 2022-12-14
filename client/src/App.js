import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Auth from './utils/auth';
import { setContext } from '@apollo/client/link/context'; 
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = Auth.getToken();
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({}),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route path='/' component={SearchBooks} />
            <Route path='/saved' component={SavedBooks} />
            <Route path="*" element={<h1 className="display-2">Wrong page!</h1>}/>
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
