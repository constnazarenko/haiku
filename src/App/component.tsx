import React, { createContext, FC, useState } from "react";

import "./styles.scss";
import { UserBlock } from "./UserBlock";
import FormSection from "./FormSection";
import Copyright from "./Copyright";
import Socials from "./Socials";

export const UserContext = createContext(null);
export interface UserData {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
}
export interface User {
  isLogged: boolean;
  data?: UserData;
}

const App: FC<{}> = (props) => {
  // TODO: to extend functionality consider using useReducer here
  const [user, setUser] = useState({ isLogged: false } as User);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="app-container">
        <header>
          <a href="/">
            <h1 className="logo">World of Haiku</h1>
          </a>
          <UserBlock isLoginPage={false} />
        </header>
        <section>
          <FormSection />
        </section>
        <footer>
          <Copyright />
          <h3 className="logo">World of Haiku</h3>
          <Socials />
        </footer>
      </div>
    </UserContext.Provider>
  );
};

export default App;
