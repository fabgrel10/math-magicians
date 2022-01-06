import styled from 'styled-components';

export default function Nav() {
  return (
    <Navbar.Wrapper>
      <Navbar.Logo>Logo</Navbar.Logo>
      <Navbar.Items>
        <Navbar.Item>Home</Navbar.Item>
        <Navbar.Item>|</Navbar.Item>
        <Navbar.Item>Calculator</Navbar.Item>
        <Navbar.Item>|</Navbar.Item>
        <Navbar.Item>Quote</Navbar.Item>
      </Navbar.Items>
    </Navbar.Wrapper>
  );
}

const Navbar = {
  Wrapper: styled.nav`
    flex: 1;
    align-self: flex-start;
    padding: 1rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffd60a;
    background-color: #000814;
  `,
  Logo: styled.h1`
    border: 1px solid gray;
    padding: 0.5rem 1rem;
  `,
  Items: styled.ul`
    display: flex;
    list-style: none;
  `,
  Item: styled.li`
    padding: 0 1rem;
    cursor: pointer;
  `,
};
