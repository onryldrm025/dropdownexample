import logo from './logo.svg';
import './App.css';
import { Sidebar } from './components/Sidebar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
     <Sidebar />
    </Router>
  );
}

export default App;
