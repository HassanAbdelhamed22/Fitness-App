import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

export default function SimilarExercises({
  targetMuscleExercises,
  equipmentMuscleExercises,
}) {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "40px" } }}>
      <Typography
        variant="h4"
        mb={5}
        sx={{ textAlign: { lg: "left", xs: "center" } }}
      >
        Exercises that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: "2px", position: "relative" }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar
            data={targetMuscleExercises}
            isBodyParts={false}
          />
        ) : (
          <Loader />
        )}
      </Stack>

      <Typography
        variant="h4"
        mb={5}
        mt={5}
        sx={{ textAlign: { lg: "left", xs: "center" } }}
      >
        Exercises that use the same equipment
      </Typography>
      <Stack direction="row" sx={{ p: "2px", position: "relative" }}>
        {equipmentMuscleExercises.length ? (
          <HorizontalScrollbar
            data={equipmentMuscleExercises}
            isBodyParts={false}
          />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
}
