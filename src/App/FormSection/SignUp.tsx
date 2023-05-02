import React, {FC, useCallback, useContext, useState} from "react";
import Input from "./Input";
import {SwitchContext} from "../component";

const SignUp: FC<{}> = (props) => {
  const { isASignUpPage, setASignUpPage } = useContext(SwitchContext);
  const [ isSubmited, setSubmited ] = useState(false);

  const userDataInitial = {
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    repassword: "",
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
    if (
      !newErrors.password &&
      !newErrors.repassword &&
        userData.password !== userData.repassword
    ) {
      newErrors.repassword = "Passwords should match";
    }
    if (!newErrors.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)) {
        newErrors.email = "Please use valid email!";
    }
    if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
    } else {
        // TODO: placeholder for actual request
        // useSubmitForm('https://someAPIendpoint', userData);
        setSubmited(true);
    }
  };

  const handleGoToLogin = (event: React.MouseEvent) => {
    event.preventDefault();
    setASignUpPage(false);
  };

  const handleChange = useCallback((id: keyof typeof userDataInitial) => {
    return (value: string) => {
      setUser({ ...userData, [id]: value });
    };
  }, [userData]);

  if (isSubmited) {
      return (
          <div className="notice">The form was submitted.</div>
      );
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="First Name"
        halfSize
        value={userData.firstname}
        onChange={handleChange("firstname")}
        error={errors.firstname}
      />
      <Input
        label="Last Name"
        halfSize
        value={userData.lastname}
        onChange={handleChange("lastname")}
        error={errors.lastname}
      />
      <Input
        label="Email"
        value={userData.email}
        onChange={handleChange("email")}
        error={errors.email}
      />
      <Input
        label="Username"
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
      <Input
        label="Retype Password"
        isPassword
        value={userData.repassword}
        onChange={handleChange("repassword")}
        error={errors.repassword}
      />

      <div className="control centered">
        <button>Sign Up</button>
      </div>
      <div className="control centered">
        <a href="#" onClick={handleGoToLogin}>
          I already have a Haiku account
        </a>
      </div>
    </form>
  );
};

export default SignUp;
