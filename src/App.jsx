import {
  Routes,
  Route,
} from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Calculator from './components/Calculator/Calculator';
import Quote from './components/Quote/Quote';

import './App.css';

function App() {
  return (
    <div className="main-container">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quote" element={<Quote />} />
      </Routes>
    </div>
  );
}

export default App;
