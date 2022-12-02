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
          <LeftSide>
          <LinkItem to="/">
            {/* <li>The Nike Story </li> */}
          
        <SiNike color="white" size="30" />
        </LinkItem> 
          <SearchBar />
          
          </LeftSide>
          <RightSide>
          <LinkItem to="ShoePage">
            <li>30 Iconics</li>
            </LinkItem>
          <li> {isAuthenticated ? <LogoutButton /> : <LoginButton />}</li>
          </RightSide>
        </ul>
      </nav>
    </Wrapper>
  )
}
export default NavBar

const Wrapper = styled.div`
  margin: 0;
  padding:0;
  background-color: #272b2e;
  height: 70px;
  border-bottom: solid 2px black;
  

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
      font-family: "futura-pt-condensed", sans-serif; 
      font-weight: 600;
      text-shadow:
      0 0 7px #fff,
      0 0 10px #fff,
      0 0 21px #fff,
      0 0 42px #0fa,
      0 0 52px #0fa,
      0 0 62px #0fa,
      0 0 65px #0fa,
      0 0 70px #0fa;
      /* padding-top:35px; */
    }
  }
  `
const LinkItem = styled(NavLink)`
  text-decoration: none;
  color: white;
  padding-right: 20px;
  padding-left: 10px;

  /* &.active {
    li {
      color: darkgray;
    }
  } */

  :hover {
    color: darkgray;
    transition: 0.3s ease-in-out;
  }
`;
const LeftSide=styled.div`
display: flex;
gap: 15px;`
const RightSide=styled.div`
display:flex;
gap:20px`