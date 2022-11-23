import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
const App = () => {

  const { user, isAuthenticated } = useAuth0()
  console.log("user", user);
  return (
    <h1>
      Hello World
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </h1>
  );
}

export default App;
