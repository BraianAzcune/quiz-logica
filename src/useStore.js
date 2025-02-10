// useStore.js
import { create } from "zustand";

const useStore = create((set) => ({
    correctAnswers: 0,
    totalProblems: 0,
    addAnswer: (isCorrect) =>
        set((state) => ({
            correctAnswers: isCorrect ? state.correctAnswers + 1 : state.correctAnswers,
        })),
    setTotalProblems: (total) => set({ totalProblems: total }),
}));

export default useStore;
