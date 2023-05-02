import React, { FC, useCallback, useContext, useEffect, useState } from "react";
import Input from "./Input";
import { SwitchContext } from "../../App";
import { useSubmitForm } from "../FormSection";

const LogIn: FC = () => {
  const { isASignUpPage, setASignUpPage } = useContext(SwitchContext);
  const [isSubmited, setSubmited] = useState(false);

  const userDataInitial = {
    username: "",
    password: "",
  };
  const [errors, setErrors] = useState({} as Partial<typeof userDataInitial>);
  const [userData, setUser] = useState(userDataInitial);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const asArray = Object.entries(userData) as [
      keyof typeof userDataInitial,
      string
    ][];
    const newErrors: Partial<typeof userDataInitial> = asArray
      .filter((ud) => !ud[1])
      .reduce((accumulator, currentValue) => {
        return { ...accumulator, [currentValue[0]]: "Please fill!" };
      }, {});
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // TODO: placeholder for actual request
      // useSubmitForm('https://someAPIendpoint', userData);
      setSubmited(true);
    }
  };

  const handleGoToSignUp = (event: React.MouseEvent) => {
    event.preventDefault();
    setASignUpPage(true);
  };

  const handleChange = useCallback(
    (id: keyof typeof userDataInitial) => {
      return (value: string) => {
        setUser({ ...userData, [id]: value });
      };
    },
    [userData]
  );

  if (isSubmited) {
    return <div className="notice">The form was submitted.</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Email/Username"
        value={userData.username}
        onChange={handleChange("username")}
        error={errors.username}
      />
      <Input
        label="Password"
        isPassword
        value={userData.password}
        onChange={handleChange("password")}
        error={errors.password}
      />

      <div className="control centered">
        <button>Login</button>
      </div>
      <div className="control centered">
        Don't have a Haiku account?&nbsp;
        <a href="#" onClick={handleGoToSignUp}>
          Sign up.
        </a>
      </div>
    </form>
  );
};

export default LogIn;
