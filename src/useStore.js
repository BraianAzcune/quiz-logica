// useStore.js
import { create } from "zustand";

const initialState = {
    correctAnswers: 0,
    totalProblems: 0,
};

const useStore = create((set) => ({
    ...initialState,
    addAnswer: (isCorrect) =>
        set((state) => ({
            correctAnswers: isCorrect ? state.correctAnswers + 1 : state.correctAnswers,
        })),
    setTotalProblems: (total) => set({ totalProblems: total }),
    reset: () => set({ ...initialState }),
}));

export default useStore;
