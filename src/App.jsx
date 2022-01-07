import {
  Routes,
  Route,
} from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Calculator from './components/Calculator/Calculator';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
      </Routes>
    </div>
  );
}

export default App;
