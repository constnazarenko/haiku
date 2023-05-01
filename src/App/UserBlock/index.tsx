import React, { FC, useContext } from "react";
import "./styles.scss";
import { UserContext } from "../component";

export interface UserBlockProps {
  isLoginPage: boolean;
  isLoggedIn?: boolean;
}

export const UserBlock: FC<UserBlockProps> = (props) => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="user-block">
      {!!user.isLogged && <div>@{user.data.username}</div>}
      {!user.isLogged && !props.isLoginPage && <button>Login</button>}
      {!user.isLogged && !!props.isLoginPage && <button>Sign Up</button>}
    </div>
  );
};
