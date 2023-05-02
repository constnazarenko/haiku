import React, { FC, useContext, useEffect, useState } from "react";
import "./styles.scss";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import { SwitchContext } from "../../App";

const FormSection: FC = () => {
  const { isASignUpPage, setASignUpPage } = useContext(SwitchContext);

  return (
    <div className="form-section">
      <h2>{isASignUpPage ? "Sign Up to Play" : "Login to Haiku"}</h2>
      <div className="form-wrapper">
        <div className="form-container">
          {isASignUpPage && <SignUp />}
          {!isASignUpPage && <LogIn />}
        </div>
      </div>
    </div>
  );
};

// TODO: Just a placeholder for requests
export const useSubmitForm = (url, data) => {
  const [state, setState] = useState(null);
  const init = {
    method: "post",
    headers: {},
    body: data ? JSON.stringify(data) : undefined,
  };

  useEffect(() => {
    let ignore = false;
    const dataFetch = async () => {
      const data = await (await fetch(url, init)).json();
      if (!ignore) {
        setState(data);
      }
    };

    try {
      dataFetch();
    } catch (e) {
      setState(null);
    }

    return () => {
      ignore = true;
    };
  }, [url]);

  return { result: state };
};

export default FormSection;
