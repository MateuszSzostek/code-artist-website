import React from "react";
import ISVGComponent from ".";

const ReactSVGIcon = ({ width, height, color }: ISVGComponent) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox={`-11.5 -10.23174 23 23`}
      >
        <title>React Logo</title>
        <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
        <g stroke="#61dafb" stroke-width="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    </>
  );
};

export default ReactSVGIcon;
