import { React, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import Trails from './pages/Trails';
import Users from './pages/Users';
import SignIn from './pages/SignIn';
import Nav from './components/Nav/Nav';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  // const [signUp, setSignUp] = useState({email, username, password})
  return (
    <ApolloProvider client={client}>
      <Router>
          <Nav />

          <Routes>
            <Route 
              path="/" 
              element={<Home />}
            />

            <Route 
              path="/Trails" 
              element={<Trails />}
            />

            <Route 
              path="/Users" 
              element={<Users />}
            />

            <Route 
              path="/SignIn" 
              element={<SignIn />}
            />
          </Routes>
      </Router>
    </ApolloProvider>

  );
}

export default App;
