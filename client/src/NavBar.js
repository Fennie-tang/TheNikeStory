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
          {/* <SearchBar /> */}
          <LinkItem to="/">
            <SiNike size="20" />
          </LinkItem>
          <LinkItem to="/">
            <li>Home</li>
          </LinkItem>
          <li> {isAuthenticated ? <LogoutButton /> : <LoginButton />}</li>
        </ul>
      </nav>
    </Wrapper>
  )
}
export default NavBar

const Wrapper = styled.div`
  background-color: #023f05;
  height: 50px;

  nav {
    ul {
      display: flex;
      margin-left:15px;
      margin-right:15px;
      /* align-items: center; */
      justify-content: space-between;
      list-style: none;
      padding-top:10px;
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