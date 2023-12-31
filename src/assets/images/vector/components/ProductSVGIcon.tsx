import React from "react";
import { ISVGIcon } from "../../../../types/components";

const ProductIconSVG = ({ width, height }: ISVGIcon) => {
  return (
    <>
      <svg
        width={`${width}px`}
        height={`${height}px`}
        viewBox={`0 0 128 128`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M32 16V32H16V16H32ZM8 8V40H40V8H8Z" fill="#1485D4" />
        <path d="M72 28V44H56V28H72ZM48 20V52H80V20H48Z" fill="#1485D4" />
        <path d="M32 64V80H16V64H32ZM8 56V88H40V56H8Z" fill="#1485D4" />
        <path
          d="M88 40V64H64V88H40V120H120V40H88ZM72 72H88V88H72V72ZM64 112H48V96H64V112ZM88 112H72V96H88V112ZM112 112H96V96H112V112ZM112 88H96V72H112V88ZM96 64V48H112V64H96Z"
          fill="#1485D4"
        />
      </svg>
    </>
  );
};

export default ProductIconSVG;
