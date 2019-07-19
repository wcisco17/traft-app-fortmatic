import * as React from "react";
import { ThemeContainer } from "./assets/theme/container";
import Authentication from "./modules/Authentication";

const App: React.FC = () => {
  const [auth, setAuth] = React.useState(false);
  return (
    <ThemeContainer>
      {auth ? <h1>Not Logged in.</h1> : <Authentication />}
    </ThemeContainer>
  );
};

export default App;
