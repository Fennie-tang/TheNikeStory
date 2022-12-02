import GlobalStyles from "./GlobalStyles";
// import LoginButton from "./LoginButton";
// import LogoutButton from "./LogoutButton";
// import { useAuth0 } from "@auth0/auth0-react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Homepage from "./Homepage";
import SneakerDetails from "./SneakerDetails";
import ShoePage from "./ShoePage"
const App = () => {

  // const { user, isAuthenticated } = useAuth0()
  return (
    <BrowserRouter>
      <GlobalStyles />
      <NavBar/>
        
     
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/getSneaker/:_id" element={<SneakerDetails />} />
        <Route path="ShoePage" element={<ShoePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
