import { Box } from "@mui/material";
import React, { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

export default function Home() {
  return (
    <Box>
      <HeroBanner></HeroBanner>
      <SearchExercises></SearchExercises>
      <Exercises></Exercises>
    </Box>
  );
}
