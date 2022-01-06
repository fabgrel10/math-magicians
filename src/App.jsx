import styled, { createGlobalStyle } from 'styled-components';
import Calculator from './components/Calculator/Calculator';

import './App.css';

function App() {
  return (
    <div>
      <CSSReset />
      <Container>
        <Calculator />
      </Container>
    </div>
  );
}

const CSSReset = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

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
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ece9e6;
  background: linear-gradient(to right, #ece9e6, #f2f2f2);
`;

export default App;
