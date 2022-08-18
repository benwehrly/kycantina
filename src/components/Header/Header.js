import "./header.css";
import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navRef = useRef(null);
  const [ isShrunk, setShrunk ] = useState()

  useEffect(() => {
    const handler = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 150 ||
            document.documentElement.scrollTop > 150)
        ) {
          return true;
        }

        if (
          isShrunk &&
          document.body.scrollTop < 140 &&
          document.documentElement.scrollTop < 140
        ) {
          return false;
        }

        return isShrunk;
      });
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header style={{ height: isShrunk ? '60px' : '100px'}}>
      <NavLink to="/home">
        <div className="logo">
          <h1>K.Y. Cantina</h1>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
            //   fill="#FF0066"
              fill="#0AD0F2"
              d="M53.9,-49.1C55.9,-40.4,34.1,-18.8,27.1,4C20.2,26.9,28.2,51,23.3,56.4C18.5,61.8,0.8,48.4,-9.2,36.8C-19.2,25.2,-21.5,15.3,-30.6,-0.1C-39.8,-15.5,-55.8,-36.3,-51.8,-45.5C-47.8,-54.7,-23.9,-52.1,1,-52.9C25.9,-53.7,51.9,-57.9,53.9,-49.1Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </NavLink>
      <nav className="navigation">
          <button>Order Now</button>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/">Services</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/">
            More <span>&or;</span>
          </NavLink>
          <NavLink to="/">Sign in</NavLink>
      </nav>
    </header>
  );
};

export default Header;
