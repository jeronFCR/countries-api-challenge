import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Button: React.FC<{
  className?: string;
  onClick: CallableFunction;
  icon: IconDefinition;
}> = ({ className, children, icon, onClick }) => (
  <button
    className={className}
    onClick={() => {
      onClick();
    }}
  >
    <span>
      <FontAwesomeIcon icon={icon} />
    </span>
    {children}
  </button>
);

export default Button;
