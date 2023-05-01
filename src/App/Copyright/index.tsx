import React from "react";
import "./styles.scss";

export const Copyright = (props) => {
  return (
    <div className="copyright">
      <p>Copyright © 2023 World of Haiku</p>
      <p>All rights reserved</p>
      <ul>
        <li>
          <a href="https://www.worldofhaiku.com/privacy-policy/">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="https://www.worldofhaiku.com/terms-of-service/">
            Terms of Service
          </a>
        </li>
        <li>
          <a href="https://help.worldofhaiku.com/knowledge/">Knowledge Base</a>
        </li>
      </ul>
      <p>Patent No. 11,265,343</p>
    </div>
  );
};

export default Copyright;
