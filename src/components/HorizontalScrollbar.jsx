import { Box } from "@mui/material";
import React from "react";
import BodyPart from "./BodyPart";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { LeftArrow } from "./LeftArrow";
import { RightArrow } from "./RightArrow";
import ExerciseCart from "./ExerciseCart";

export default function HorizontalScrollbar({
  data ,
  isBodyParts ,
}) {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => {
        return (
          <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            m="0 40px"
          >
            {isBodyParts ? (
              <BodyPart item={item} />
            ) : (
              <ExerciseCart exercise={item} />
            )}
          </Box>
        );
      })}
    </ScrollMenu>
  );
}
