import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";


const LoginButton = () => {
  const { loginWithRedirect, user } = useAuth0();
 
  return <Button onClick={() => loginWithRedirect()}>Log In</Button>;
};

export default LoginButton;

const Button = styled.button`
padding: 8px 10px;
margin: 0;
text-decoration: none;
border: none;
font-size: 16px;
color: white;
background-color: #181818;
transition: 0.5s;
font-family: "futura-pt-condensed", sans-serif; 

&:hover {
  background: #21ebff;
  color: #000;
  box-shadow: 0 0 50px #21ebff;
  transition-delay: 0.5s;
}`