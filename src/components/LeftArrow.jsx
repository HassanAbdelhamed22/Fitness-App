import React, { useContext } from "react";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { Typography } from "@mui/material";

export const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};
