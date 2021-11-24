
import './style/style.css';
import Login from './pages/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Browse from './pages/Browse';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/dashboard" element={<Dashboard/>}/>
        <Route exact path="/browse" element={<Browse/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
