// App.jsx
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useEffect } from "react";
import { problemsArray } from "./ejercicios/condicional";
import { ProblemCard } from "./problemCard";
import { Score } from "./score";
import useStore from "./useStore";

const App = () => {
  const setTotalProblems = useStore((state) => state.setTotalProblems);

  // Al montar el componente, se asigna el total de problemas al store
  useEffect(() => {
    setTotalProblems(problemsArray.length);
  }, [setTotalProblems]);

  return (
    <Box>
      <Grid container direction="column" alignItems="center" spacing={3}>
        {problemsArray.map((problem, index) => (
          <Grid item key={index} xs={12}>
            <ProblemCard problem={problem} />
          </Grid>
        ))}
      </Grid>
      <Score />
    </Box>
  );
};

export default App;

