import {
  Routes,
  Route,
} from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Nav from './components/Nav/Nav';
import Calculator from './components/Calculator/Calculator';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <CSSReset />
      <Nav />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
        </Routes>
      </Container>
    </div>
  );
}

const CSSReset = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-family: 'Montserrat', sans-serif;
  }

  html {
    font-size: 62.5%; /*1rem = 10px*/
    box-sizing: border-box;
  }

  body {

    font-size: 1.4rem;
  }

  a {
    color: #ffc300;
    text-decoration: none;
  }
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffd60a;

`;

export default App;
