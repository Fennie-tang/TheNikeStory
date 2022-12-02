import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";


const LoginButton = () => {
  const { loginWithRedirect, user } = useAuth0();
 
  return <Button onClick={() => loginWithRedirect()}>Log In</Button>;
};

export default LoginButton;

const Button = styled.button`
padding: 8px 14px 8px 14px;
border-radius: 3px;
border: none;
background-color:#201A1E;
font-family: "futura-pt-condensed", sans-serif; 
font-weight: bold;
color: white;

&:hover{
  background-color:grey;
}`