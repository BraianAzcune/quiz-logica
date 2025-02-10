import { useState } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Card,
  CardHeader,
  CardContent,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

import { problemsArray } from "./ejercicios/condicional";

// Componente para cada problema (tarjeta del quiz)
const ProblemCard = ({ problem }) => {
  const [selected, setSelected] = useState(null);

  // Si ya se seleccionó una opción, no se permite volver a elegir
  const handleOptionClick = (index) => {
    if (selected !== null) return;
    setSelected(index);
  };

  return (
    <Card sx={{ mb: 2 }}>
      <CardHeader
        title={<Typography variant="h6">{problem.enunciado}</Typography>}
      />
      <CardContent>
        {/* Usamos Stack para disponer las opciones verticalmente con un spacing de 2 (16px) */}
        <Stack spacing={2}>
          {problem.options.map((option, index) => {
            const isSelected = selected !== null && index === selected;
            const variant = isSelected ? "contained" : "outlined";
            const color =
              isSelected && index === problem.correctIndex
                ? "primary"
                : isSelected && index !== problem.correctIndex
                ? "error"
                : "primary";
            return (
              <Button
                key={index}
                fullWidth
                variant={variant}
                color={color}
                onClick={() => handleOptionClick(index)}
              >
                {option}
              </Button>
            );
          })}
        </Stack>
      </CardContent>
    </Card>
  );
};

ProblemCard.propTypes = {
  problem: PropTypes.shape({
    enunciado: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    correctIndex: PropTypes.number.isRequired,
  }).isRequired,
};

const App = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        py: 4,
        backgroundColor: "#f7f7f7",
        minHeight: "100vh",
      }}
    >
      {/* Grid container centra horizontalmente las cards */}
      <Grid container spacing={3} justifyContent="center">
        {problemsArray.map((problem, index) => (
          <Grid xs={12} key={index}>
            <ProblemCard problem={problem} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default App;

