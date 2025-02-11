// MenuEjercicios.jsx
import { Button, Stack, Typography, Card, CardContent } from "@mui/material";

// Cargamos todos los módulos de ejercicios de forma eager
const exerciseModules = import.meta.glob("./ejercicios/*.js", { eager: true });

// Función para derivar el label a partir del nombre del archivo
const getLabelFromPath = (path) => {
  const parts = path.split("/");
  const filename = parts[parts.length - 1];
  const nameWithoutExt = filename.replace(".js", "");
  return nameWithoutExt.charAt(0).toUpperCase() + nameWithoutExt.slice(1);
};

const MenuEjercicios = ({ onSelect }) => {
  const exercises = Object.entries(exerciseModules).map(([path, module]) => {
    const label = module.label ? module.label : getLabelFromPath(path);
    const problemArray = module.problemsArray;
    return { label, problemArray };
  });

  return (
    <Card sx={{ margin: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Elegir ejercicios:
        </Typography>
        <Stack spacing={1}>
          {exercises.map((exercise, idx) => (
            <Button
              key={idx}
              variant="outlined"
              onClick={() => {
                console.log("Ejercicio seleccionado:", exercise.label);
                onSelect(exercise.problemArray);
              }}
            >
              {exercise.label}
            </Button>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default MenuEjercicios;

