import styled from "styled-components"
import { NavLink } from "react-router-dom";
import { SiNike } from "react-icons/si"
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import SearchBar from "./SearchBar";
const NavBar = () => {
  const { user, isAuthenticated } = useAuth0()
  return (
    <Wrapper>
      <nav>
        <ul>
          <SearchBar />
          <LinkItem to="/">
            <SiNike size="30" />
          </LinkItem>
          <LinkItem to="About">
            <li>About</li>
            </LinkItem>
          <LinkItem to="/">
            <li>The Nike Story</li>
          </LinkItem>
          <li> {isAuthenticated ? <LogoutButton /> : <LoginButton />}</li>
        </ul>
      </nav>
    </Wrapper>
  )
}
export default NavBar

const Wrapper = styled.div`
  margin: 0;
  padding:0;
  background-color: #023f05;
  height: 70px;
  

  nav {
    ul {
      display: flex;
      margin-left:15px;
      margin-right:15px;
      padding-top: 20px;
      align-items: center;
      justify-content: space-between;
      list-style: none;
      font-size: 20px;
      /* padding-top:35px; */
    }
  }
  `
const LinkItem = styled(NavLink)`
  text-decoration: none;
  color: white;
  padding-right: 20px;
  padding-left: 10px;

  &.active {
    li {
      color: darkgray;
    }
  }

  :hover {
    color: darkgray;
    transition: 0.3s ease-in-out;
  }
`;