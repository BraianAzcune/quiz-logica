// problemCard.jsx
import { useState } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardContent,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import useStore from "./useStore";

export const ProblemCard = ({ problem }) => {
  const [selected, setSelected] = useState(new Set());
  const addAnswer = useStore((state) => state.addAnswer);

  const handleOptionClick = (index) => {
    // Si es el primer intento para este problema, actualizamos el store
    if (selected.size === 0) {
      const isCorrect = index === problem.correctIndex;
      addAnswer(isCorrect);
    }
    // Actualizamos el estado local para evitar múltiples respuestas en el mismo problema
    const newSelected = new Set(selected);
    newSelected.add(index);
    setSelected(newSelected);
  };

  return (
    <Card sx={{ mb: 2, p: 2, width: 500, minHeight: 300 }}>
      <CardHeader
        title={
          <Typography variant="h6" align="center">
            {problem.enunciado}
          </Typography>
        }
      />
      <CardContent>
        <Stack spacing={2}>
          {problem.options.map((option, index) => {
            const isSelected = selected.has(index);
            const variant = isSelected ? "contained" : "outlined";
            let color;
            if (isSelected && index === problem.correctIndex) {
              color = "success";
            } else if (isSelected && index !== problem.correctIndex) {
              color = "error";
            } else {
              color = "primary";
            }
            return (
              <Button
                key={option}
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

