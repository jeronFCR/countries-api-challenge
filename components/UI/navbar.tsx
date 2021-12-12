import { faMoon } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Button } from "../../styles/components/UI/button";

import { Typography } from "../../styles/components/UI/typography";

const Navbar: React.FC<{
  className?: string;
  setDarkMode: CallableFunction;
  darkMode: boolean;
}> = ({ className, setDarkMode, darkMode }) => (
  <div className={className}>
    <div className="title">
      {" "}
      <Typography>Where in the world?</Typography>
    </div>
    <Button
      icon={faMoon}
      $shadow={false}
      onClick={() => {
        setDarkMode(!darkMode);
      }}
    >
      Dark Mode
    </Button>
  </div>
);

export default Navbar;
