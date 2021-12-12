import React from "react";

import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Input: React.FC<{
  className?: string;
  onChange: CallableFunction;
  placeholder: string;
  icon: IconDefinition;
}> = ({ className, icon, onChange, placeholder }) => (
  <div className={className}>
    <input
      onChange={(e) => {
        onChange(e.target.value);
      }}
      placeholder={placeholder}
    ></input>
    <FontAwesomeIcon icon={icon} />
  </div>
);

export default Input;
