// App.jsx
import { useState } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import MenuEjercicios from "./MenuEjercicios";
import { ProblemCard } from "./problemCard";
import { Score } from "./score";
import useStore from "./useStore";
import { PerfectScore } from "./perfectScore";
const App = () => {
  // Estado para almacenar el arreglo de problemas del ejercicio seleccionado
  const [selectedProblems, setSelectedProblems] = useState(null);

  // Obtenemos la acción para actualizar el total de problemas desde el store
  const setTotalProblems = useStore((state) => state.setTotalProblems);
  const resetStore = useStore((state) => state.reset);

  // Callback que se ejecuta al seleccionar un ejercicio en el menú
  const handleSelectExercise = (problemArray) => {
    console.log("Actualizando ejercicio con:", problemArray);
    setSelectedProblems(problemArray);
    // Actualizamos el total de problemas en el store
    setTotalProblems(problemArray.length);
  };

  // Permite volver al menú y reinicia el total de problemas
  const handleResetExercise = () => {
    setSelectedProblems(null);
    resetStore();
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Aplicación de Ejercicios
      </Typography>

      {/* Si no se ha seleccionado un ejercicio, se muestra el menú */}
      {!selectedProblems && <MenuEjercicios onSelect={handleSelectExercise} />}

      {/* Si se ha seleccionado un ejercicio, se renderizan sus problemas */}
      {selectedProblems && (
        <Box>
          <Button
            variant="outlined"
            onClick={handleResetExercise}
            sx={{ mb: 2 }}
          >
            Volver al menú
          </Button>
          <Grid container direction="column" alignItems="center" spacing={3}>
            {selectedProblems.map((problem, index) => (
              <Grid item key={index} xs={12}>
                <ProblemCard problem={problem} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      <Score />
      <PerfectScore />
    </Box>
  );
};

export default App;

