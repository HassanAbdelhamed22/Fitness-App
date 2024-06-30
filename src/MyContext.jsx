import React, { createContext, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  return (
    <MyContext.Provider
      value={{
        bodyPart,
        setBodyPart,
        exercises,
        setExercises,
        search,
        setSearch,
        bodyParts,
        setBodyParts,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
