import React from "react";
import { ISVGIcon } from "../../../../types/components";

const WebDevelopmentIconSVG = ({ width, height }: ISVGIcon) => {
  return (
    <>
      <svg
        width={`${width}px`}
        height={`${height}px`}
        viewBox={`0 0 128 128`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M64 8C33.075 8 8 33.075 8 64C8 94.925 33.075 120 64 120C94.925 120 120 94.925 120 64C120 33.075 94.925 8 64 8ZM94.4625 81.65L64 99.25L33.5375 81.65V46.475L47.2875 38.525L47.2375 38.5H47.2625L64 28.875L80.75 38.5H80.725L80.6875 38.525L94.45 46.475V81.65H94.4625ZM38.4875 67.0875L49.4375 73.325V85.125L61.525 92.1125V65.6L38.4875 52.3V67.0875ZM63.975 48.1125L52.25 41.375L40.8625 47.95L64.0125 61.325L87.1625 47.9625L75.7375 41.3625L63.975 48.1125ZM66.475 92.1125L78.6375 85.0875V73.325L89.5125 67.1375V52.3125L66.475 65.625V92.1125Z"
          fill="#1485D4"
        />
      </svg>
    </>
  );
};

export default WebDevelopmentIconSVG;
