// Score.jsx
import { Card, CardContent, Typography, Box } from "@mui/material";
import useStore from "./useStore";

export const Score = () => {
  const correctAnswers = useStore((state) => state.correctAnswers);
  const totalProblems = useStore((state) => state.totalProblems);

  return (
    <Card
      sx={{
        position: "fixed",
        bottom: 6,
        right: 6,
        boxShadow: 3,
      }}
    >
      <CardContent>
        <Typography variant="body1">
          Problemas resueltos a la primera:{" "}
          <Box
            component="span"
            sx={{ color: "success.main", fontWeight: "bold" }}
          >
            {correctAnswers}
          </Box>
          /{totalProblems}
        </Typography>
      </CardContent>
    </Card>
  );
};

