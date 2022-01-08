import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaCalculator, FaQuoteLeft } from 'react-icons/fa';

import './Nav.css';

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
      <nav className="nav-mobile">
        <ul className="nav-mobile__items">
          <li className="nav-mobile__item">
            <span className="nav-mobile__icon">
              <Link to="/"><FaHome /></Link>
            </span>
            Home
          </li>
          <li className="nav-mobile__item">
            <span className="nav-mobile__icon">
              <Link to="/calculator"><FaCalculator /></Link>
            </span>
            Calculator
          </li>
          <li className="nav-mobile__item">
            <span className="nav-mobile__icon">
              <Link to="/quote"><FaQuoteLeft /></Link>
            </span>
            Quote
          </li>
        </ul>
      </nav>
    );
  }
  return (
    <nav className="nav">
      <h1>Math Magicians</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <p>|</p>
        <li><Link to="/Calculator">Calculator</Link></li>
        <p>|</p>
        <li><Link to="/Quote">Quote</Link></li>
      </ul>
    </nav>
  );
}
