
import './style/style.css';
import Login from './pages/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Browse from './pages/Browse';
import Finance from './pages/Finance'
import Client from './components/apollo-client';
import { ApolloProvider } from '@apollo/client'

function App() {
  return (
    <>
    <ApolloProvider client={Client}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/dashboard" element={<Dashboard/>}/>
          <Route exact path="/browse" element={<Browse/>}/>
          <Route exact path="/finance" element={<Finance/>}/>
        </Routes>
      </Router>
    </ApolloProvider>
    </>
  );
}

export default App;
