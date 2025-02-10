export const problemsArray = [
    {
        enunciado: "p → q",
        options: ["p v q", "~p v q", "p v ~q"],
        correctIndex: 1, // La respuesta correcta es "~p v q"
    },
    {
        enunciado: "q → p",
        options: ["q v p", "q v ~p", "~q v p"],
        correctIndex: 2, // La respuesta correcta es "~q v p"
    },
    {
        enunciado: "r → s",
        options: ["~r v s", "r v s", "r v ~s"],
        correctIndex: 0, // La respuesta correcta es "~r v s"
    },
    {
        enunciado: "p → ~q",
        options: ["~p v ~q", "p v ~q", "p v q"],
        correctIndex: 0, // La respuesta correcta es "~p v ~q"
    },
    {
        enunciado: "q → ~p",
        options: ["q v ~p", "q v p", "~q v ~p"],
        correctIndex: 2, // La respuesta correcta es "~q v ~p"
    },
    {
        enunciado: "r → ~s",
        options: ["r v ~s", "r v s", "~r v ~s"],
        correctIndex: 2, // La respuesta correcta es "~r v ~s"
    },
    {
        enunciado: "s → p",
        options: ["~s v p", "s v p", "s v ~p"],
        correctIndex: 0, // La respuesta correcta es "~s v p"
    },
    {
        enunciado: "t → r",
        options: ["t v r", "~t v r", "t v ~r"],
        correctIndex: 1, // La respuesta correcta es "~t v r"
    },
];