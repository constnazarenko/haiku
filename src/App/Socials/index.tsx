import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

import "./styles.scss";

export const Socials = (props) => {
  return (
    <div className="socials">
      <a href="https://discord.gg/haiku">
        <FontAwesomeIcon icon={["fab", "discord"]} />
      </a>
      <a href="https://www.twitch.tv/haikuinc">
        <FontAwesomeIcon icon={["fab", "twitch"]} />
      </a>
      <a href="https://www.facebook.com/haikurange">
        <FontAwesomeIcon icon={["fab", "facebook"]} />
      </a>
      <a href="https://twitter.com/HaikuInc_">
        <FontAwesomeIcon icon={["fab", "twitter"]} />
      </a>
      <a href="https://www.instagram.com/haikuinc_/">
        <FontAwesomeIcon icon={["fab", "instagram"]} />
      </a>
      <a href="https://www.linkedin.com/company/haiku-inc/">
        <FontAwesomeIcon icon={["fab", "linkedin"]} />
      </a>
    </div>
  );
};

export default Socials;
