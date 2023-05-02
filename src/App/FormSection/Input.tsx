import React, { FC } from "react";
import classNames from "classnames";

export interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  isPassword?: boolean;
  halfSize?: boolean;
  error?: string;
}
const Input: FC<InputProps> = (props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(event.target.value);
  };

  const classes = classNames({
    control: true,
    "half-size": props.halfSize,
    error: props.error,
  });

  return (
    <div className={classes}>
      <label>
        {props.label} <small>{props.error}</small>
      </label>
      <input type={!props.isPassword ? "text" : "password"} value={props.value} onChange={handleChange} />
    </div>
  );
};

export default Input;
