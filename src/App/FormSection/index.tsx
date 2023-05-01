import React, { FC } from "react";
import "./styles.scss";

export interface FormProps {}

const App: FC<FormProps> = (props) => {
  return (
    <div className="form-section">
      <h2>Sign Up to Play</h2>
      <div className="form-wrapper">
          <div className="form-container">
              {/* actual form will go here */}
          </div>
      </div>
    </div>
  );
};

export default App;
