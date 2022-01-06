import styled, { createGlobalStyle } from 'styled-components';
import Nav from './components/Nav/Nav';
import Calculator from './components/Calculator/Calculator';

function App() {
  return (
    <div>
      <CSSReset />
      <Nav />
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
  background: #ffd60a;

`;

export default App;
