import React, { useState } from "react";

const Button = ({ children, style, hoverText = null }) => {
  const [ishovered, setIsHovered] = useState(false);
  return (
    <button
      style={{
        width: "157px",
        color: "black",
        backgroundColor: "#c9c6c6",
        fontSize: "14px",
        fontWeight: "600",
        border: "none",
        borderRadius: "4px",
        height: "32px",
        cursor: "pointer",
        ...style,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {ishovered ? hoverText ?? children : children}
    </button>
  );
};

export default Button;
