//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Tweet from './components/Tweet';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/tweets" element={<Tweet/>} />
          <Route path="*" element={<NotFound/>} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
