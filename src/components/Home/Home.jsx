import styled from 'styled-components';

export default function Home() {
  return (
    <Main.Wrapper>
      <Main.Title>Welcome to our page!</Main.Title>
      <Main.Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempore
        illo dicta explicabo eligendi a ea in molestiae impedit, ex, omnis
        incidunt? Ea suscipit, dolor iste recusandae ipsam corrupti aut.
        Excepturi quasi, deleniti quis ullam reiciendis velit aut explicabo,
        sapiente quisquam, repellat odit minus maiores illum ut.
      </Main.Paragraph>
      <Main.Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempore
        illo dicta explicabo eligendi a ea in molestiae impedit, ex, omnis
        incidunt? Ea suscipit, dolor iste recusandae ipsam corrupti aut.
        Excepturi quasi, deleniti quis ullam reiciendis velit aut explicabo,
        sapiente quisquam, repellat odit minus maiores illum ut.
      </Main.Paragraph>
    </Main.Wrapper>
  );
}

const Main = {
  Wrapper: styled.main`
    display: grid;
    grid-template-columns: 1fr;
    padding: 5rem
  `,

  Title: styled.h1`
    font-size: 2.5rem;
    margin-top: 4rem;
    padding-bottom: 2.5rem;
  `,

  Paragraph: styled.p`
    font-size: 2rem;
    padding-bottom: 2rem;
    text-align: justify;
  `,
};
