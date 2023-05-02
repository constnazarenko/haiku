import React, { createContext, FC, useState } from "react";

import "./styles.scss";
import { UserBlock } from "./UserBlock";
import FormSection from "./FormSection";
import Copyright from "./Copyright";
import Socials from "./Socials";

export const UserContext = createContext(null);
export const SwitchContext = createContext(null);

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

const App: FC = () => {
  // TODO: to extend functionality consider using useReducer here
  const [user, setUser] = useState({ isLogged: false } as User);

  // TODO: for full scale APP React-router should be used. But it could be skipped for now.
  const [isASignUpPage, setASignUpPage] = useState(true);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <SwitchContext.Provider value={{ isASignUpPage, setASignUpPage }}>
        <div className="app-container">
          <header>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                setASignUpPage(true);
              }}
            >
              <h1 className="logo">World of Haiku</h1>
            </a>
            <UserBlock />
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
      </SwitchContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
