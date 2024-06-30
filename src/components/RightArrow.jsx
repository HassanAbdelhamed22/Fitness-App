import React, { useContext } from "react";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { Typography } from "@mui/material";

export const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="left-arrow" />
    </Typography>
  );
};
