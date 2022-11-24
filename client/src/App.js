import GlobalStyles from "./GlobalStyles";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Homepage from "./Homepage";
import SneakerDetails from "./SneakerDetails";
const App = () => {

  const { user, isAuthenticated } = useAuth0()
  console.log("user", user);
  return (
    <BrowserRouter>
      <GlobalStyles />
      <NavBar >
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </NavBar>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/getSneaker/:_id" element={<SneakerDetails />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
