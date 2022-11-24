import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { Route, Router, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Homepage from "./Homepage";
import sneakerDetails from "./sneakerDetails";
const App = () => {

  const { user, isAuthenticated } = useAuth0()
  console.log("user", user);
  return (
    <Router>
      <NavBar/>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      <Routes>
      <Route path="/" element={<Homepage items={items}/>}/>
      <Route path="/getSneaker/:_id" element={<SneakerDetails />} />
      
      </Routes>
    </Router>
  );
}

export default App;
