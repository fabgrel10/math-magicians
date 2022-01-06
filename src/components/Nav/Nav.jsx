import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaHome, FaCalculator, FaQuoteLeft } from 'react-icons/fa';

export default function Nav() {
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowDimension <= 640;

  if (isMobile) {
    return (
      <MobileNavbar.Wrapper>
        <MobileNavbar.Items>
          <MobileNavbar.Item>
            <MobileNavbar.Icon>
              <FaHome />
            </MobileNavbar.Icon>
            Home
          </MobileNavbar.Item>
          <MobileNavbar.Item>
            <MobileNavbar.Icon>
              <FaCalculator />
            </MobileNavbar.Icon>
            Home
          </MobileNavbar.Item>
          <MobileNavbar.Item>
            <MobileNavbar.Icon>
              <FaQuoteLeft />
            </MobileNavbar.Icon>
            Home
          </MobileNavbar.Item>
        </MobileNavbar.Items>
      </MobileNavbar.Wrapper>
    );
  }
  return (
    <Navbar.Wrapper>
      <Navbar.Logo>Math Magicians</Navbar.Logo>
      <Navbar.Items>
        <Navbar.Item>Home</Navbar.Item>
        <Navbar.Item>Calculator</Navbar.Item>
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

    @media only screen and (max-width: 40em) {
      position: fixed;
      width: 100vw;
    }
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

const MobileNavbar = {
  Wrapper: styled(Navbar.Wrapper)`
    align-self: flex-end;
    justify-content: center;
  `,
  Items: styled(Navbar.Items)`
    flex: 1;
    padding: 0 2rem;
    justify-content: space-around;
  `,
  Item: styled(Navbar.Item)`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.2rem;
  `,
  Icon: styled.span``,
};
