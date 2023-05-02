import React, { FC, useContext } from "react";
import {SwitchContext, UserContext} from "../component";

export const UserBlock: FC<{}> = (props) => {
  const { user, setUser } = useContext(UserContext);
  const { isASignUpPage, setASignUpPage } = useContext(SwitchContext);

  const handleSwitchForm = () => {
    setASignUpPage(!isASignUpPage);
  };

  return (
    <div className="user-block">
      {!!user.isLogged && <div>@{user.data.username}</div>}
      {!user.isLogged && (
        <button onClick={handleSwitchForm}>
          {isASignUpPage ? "Login" : "Sign Up"}
        </button>
      )}
    </div>
  );
};
