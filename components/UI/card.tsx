import React from "react";

import { CardBody } from "../../styles/components/UI/card";
import { Flag } from "../../styles/components/UI/flag";

const Card: React.FC<{
  className?: string;
  img: string;
  alt: string;
  onClick?: CallableFunction;
}> = ({ className, children, img, alt, onClick }) => (
  <div className={className}>
    <Flag
      src={img}
      alt={alt}
      onClick={() => {
        onClick ? onClick() : null;
      }}
    />
    <CardBody>{children}</CardBody>
  </div>
);

export default Card;
