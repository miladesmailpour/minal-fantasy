import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Layout from './Layout';
import Play from './pages/Play';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Routes>
            <Route element={<Layout />}>
            <Route 
              path="/" 
              element={<Home />}
            />
            <Route path="play" element={<Play />} />
            <Route 
              path="*"
              element={<NotFound />}
            />
            </Route>
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
