import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import useStore from "./useStore";

export const PerfectScore = () => {
  const correctAnswers = useStore((state) => state.correctAnswers);
  const totalProblems = useStore((state) => state.totalProblems);

  const [showConfetti, setShowConfetti] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const updateSize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight + window.scrollY, // Ajusta el confetti al tamaño total con scroll
      });
    };

    window.addEventListener("resize", updateSize);
    window.addEventListener("scroll", updateSize);
    updateSize(); // Llamar al inicio por si hay scroll ya

    return () => {
      window.removeEventListener("resize", updateSize);
      window.removeEventListener("scroll", updateSize);
    };
  }, []);

  useEffect(() => {
    if (correctAnswers === totalProblems && totalProblems > 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    }
  }, [correctAnswers, totalProblems]);

  return (
    <>
      {showConfetti && (
        <Confetti width={dimensions.width - 100} height={dimensions.height} />
      )}
    </>
  );
};

