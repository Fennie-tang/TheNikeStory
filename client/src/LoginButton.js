import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";


const LoginButton = () => {
  const { loginWithRedirect, user } = useAuth0();
 
  return <Button onClick={() => loginWithRedirect()}>Log In</Button>;
};

export default LoginButton;

const Button = styled.button`
padding: 8px 12px 8px 12px;
border-radius: 3px;
border: none;
background-color:#DAA520;
font-weight: bold;
color: #f5f5f5;
&:hover{
  background-color:#FFD700;
}`