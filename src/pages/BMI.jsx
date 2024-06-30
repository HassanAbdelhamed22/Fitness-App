import React, { useState } from "react";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";

export default function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2));
    determineStatus(bmiValue);
  };

  const determineStatus = (bmi) => {
    if (bmi < 18.5) {
      setStatus("Underweight");
    } else if (bmi >= 18.5 && bmi < 24.9) {
      setStatus("Normal weight");
    } else if (bmi >= 25 && bmi < 29.9) {
      setStatus("Overweight");
    } else {
      setStatus("Obesity");
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      mt={5}
      p={3}
      boxShadow={3}
      width={{ xs: "90%", sm: "70%", md: "50%", lg: "40%" }}
      mx="auto"
      bgcolor="#fff"
    >
      <Typography variant="h4" gutterBottom>
        BMI Calculator
      </Typography>
      <Paper elevation={3} style={{ padding: "20px", width: "100%" }}>
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Height (cm)"
            variant="outlined"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            fullWidth
          />
          <TextField
            label="Weight (kg)"
            variant="outlined"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            fullWidth
          />
          <Button variant="contained" color="primary" onClick={calculateBMI}>
            Calculate BMI
          </Button>
        </Box>
        {bmi && (
          <Box mt={4}>
            <Typography variant="h6">Your BMI: {bmi}</Typography>
            <Typography variant="h6">Status: {status}</Typography>
          </Box>
        )}
      </Paper>
    </Box>
  );
}
