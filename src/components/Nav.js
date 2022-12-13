import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link to="/" id="logo">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/work">Our Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  background-color: #282828;
  align-items: center;
  #logo {
    font-family: "Lobster", sans-serif;
    font-size: 1.5rem;
    padding-left: 10rem;
  }
  a {
    text-decoration: none;
    color: white;
    padding-right: 5rem;
  }
  ul {
    display: flex;
    padding-right: 10rem;
    list-style: none;
  }
`;

export default Nav;
