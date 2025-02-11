import { shuffleOptions } from "../shuffleOptions";

const problemas = [
    // ------------------ Morgan ------------------
    {
        enunciado: "morgan",
        // Aplicación de Morgan a ~(P ∧ Q)
        options: [
            "~(P ∧ Q) <--> ~P ∨ ~Q",  // Correcta
            "~(P ∧ Q) <--> ~P ∧ ~Q",
            "~(P ∧ Q) <--> P ∨ ~Q",
        ],
        correctIndex: 0,
    },
    {
        enunciado: "morgan",
        // Aplicación de Morgan a ~(P ∨ Q)
        options: [
            "~(P ∨ Q) <--> ~P ∧ ~Q",  // Correcta
            "~(P ∨ Q) <--> ~P ∨ ~Q",
            "~(P ∨ Q) <--> P ∧ Q",
        ],
        correctIndex: 0,
    },
    {
        enunciado: "morgan",
        // Variante: aplicar Morgan a ~(~P ∨ Q)
        // ~(~P ∨ Q) = ~~P ∧ ~Q = P ∧ ~Q
        options: [
            "~(~P ∨ Q) <--> P ∧ ~Q",  // Correcta
            "~(~P ∨ Q) <--> ~P ∧ Q",
            "~(~P ∨ Q) <--> P ∨ ~Q",
        ],
        correctIndex: 0,
    },
    {
        enunciado: "morgan",
        // Variante: aplicar Morgan a ~(~P ∧ ~Q)
        // ~(~P ∧ ~Q) = ~~P ∨ ~~Q = P ∨ Q
        options: [
            "~(~P ∧ ~Q) <--> P ∨ Q",  // Correcta
            "~(~P ∧ ~Q) <--> ~P ∧ ~Q",
            "~(~P ∧ ~Q) <--> P ∧ Q",
        ],
        correctIndex: 0,
    },
    {
        enunciado: "morgan",
        // Variante con literales distintos: ~(A ∧ ~B)
        // ~(A ∧ ~B) = ~A ∨ B
        options: [
            "~(A ∧ ~B) <--> ~A ∨ B",  // Correcta
            "~(A ∧ ~B) <--> A ∨ ~B",
            "~(A ∧ ~B) <--> ~A ∧ B",
        ],
        correctIndex: 0,
    },
    {
        enunciado: "morgan",
        // Otra variante: aplicar Morgan a ~(B ∨ ~C)
        // ~(B ∨ ~C) = ~B ∧ C
        options: [
            "~(B ∨ ~C) <--> ~B ∧ C",  // Correcta
            "~(B ∨ ~C) <--> B ∧ ~C",
            "~(B ∨ ~C) <--> ~B ∨ C",
        ],
        correctIndex: 0,
    },

    // ------------------ Condicional ------------------
    {
        enunciado: "condicional",
        // Equivalencia básica: P → Q es equivalente a ~P ∨ Q.
        options: [
            "P → Q <--> ~P ∨ Q",   // Correcta
            "P → Q <--> P ∨ Q",
            "P → Q <--> ~P ∧ Q",
        ],
        correctIndex: 0,
    },
    {
        enunciado: "condicional",
        // Variante: A → (B ∧ C) es equivalente a ~A ∨ (B ∧ C).
        options: [
            "A → (B ∧ C) <--> ~A ∨ (B ∧ C)",  // Correcta
            "A → (B ∧ C) <--> A ∨ (B ∧ C)",
            "A → (B ∧ C) <--> ~A ∧ (B ∧ C)",
        ],
        correctIndex: 0,
    },

    // ------------------ Bicondicional ------------------
    {
        enunciado: "bicondicional",
        // Equivalencia común: P ↔ Q es equivalente a (P → Q) ∧ (Q → P).
        options: [
            "P ↔ Q <--> (P → Q) ∧ (Q → P)",  // Correcta
            "P ↔ Q <--> (P → Q) ∨ (Q → P)",
            "P ↔ Q <--> (P ∧ Q) ∧ (~P ∧ ~Q)",
        ],
        correctIndex: 0,
    },
    {
        enunciado: "bicondicional",
        // Otra forma: A ↔ B es equivalente a (~A ∨ B) ∧ (~B ∨ A).
        options: [
            "A ↔ B <--> (~A ∨ B) ∧ (~B ∨ A)",  // Correcta
            "A ↔ B <--> (~A ∨ B) ∨ (~B ∨ A)",
            "A ↔ B <--> (A → B) ∨ (B → A)",
        ],
        correctIndex: 0,
    },

    // ------------------ Doble Negación ------------------
    {
        enunciado: "doble negacion",
        // Ley de doble negación: ~~P es equivalente a P.
        options: [
            "~~P <--> P",   // Correcta
            "~~P <--> ~P",
            "~~P <--> P ∧ ~P",
        ],
        correctIndex: 0,
    },
    {
        enunciado: "doble negacion",
        // Variante con disyunción: ~~(A ∨ B) es equivalente a A ∨ B.
        options: [
            "~~(A ∨ B) <--> A ∨ B",  // Correcta
            "~~(A ∨ B) <--> A ∧ B",
            "~~(A ∨ B) <--> ~A ∨ ~B",
        ],
        correctIndex: 0,
    },

    // ------------------ Distributiva ------------------
    {
        enunciado: "distributiva",
        // Distribución de la disyunción sobre la conjunción:
        // P ∨ (Q ∧ R) es equivalente a (P ∨ Q) ∧ (P ∨ R).
        options: [
            "P ∨ (Q ∧ R) <--> (P ∨ Q) ∧ (P ∨ R)",  // Correcta
            "P ∨ (Q ∧ R) <--> (P ∨ Q) ∨ (P ∨ R)",
            "P ∨ (Q ∧ R) <--> (P ∧ Q) ∧ (P ∧ R)",
        ],
        correctIndex: 0,
    },
    {
        enunciado: "distributiva",
        // Distribución de la conjunción sobre la disyunción:
        // P ∧ (Q ∨ R) es equivalente a (P ∧ Q) ∨ (P ∧ R).
        options: [
            "P ∧ (Q ∨ R) <--> (P ∧ Q) ∨ (P ∧ R)",  // Correcta
            "P ∧ (Q ∨ R) <--> (P ∧ Q) ∧ (P ∧ R)",
            "P ∧ (Q ∨ R) <--> (P ∨ Q) ∨ (P ∨ R)",
        ],
        correctIndex: 0,
    },

    // ------------------ Absorción ------------------
    {
        enunciado: "absorbcion",
        // Ley de absorción: P ∨ (P ∧ Q) es equivalente a P.
        options: [
            "P ∨ (P ∧ Q) <--> P",   // Correcta
            "P ∨ (P ∧ Q) <--> P ∧ Q",
            "P ∨ (P ∧ Q) <--> P ∨ Q",
        ],
        correctIndex: 0,
    },
    {
        enunciado: "absorbcion",
        // Variante: P ∧ (P ∨ Q) es equivalente a P.
        options: [
            "P ∧ (P ∨ Q) <--> P",   // Correcta
            "P ∧ (P ∨ Q) <--> P ∨ Q",
            "P ∧ (P ∨ Q) <--> P ∧ Q",
        ],
        correctIndex: 0,
    },

    // ------------------ Conmutativa ------------------
    {
        enunciado: "coonmutativa",
        // Ley conmutativa para la disyunción: P ∨ Q es equivalente a Q ∨ P.
        options: [
            "P ∨ Q <--> Q ∨ P",   // Correcta
            "P ∨ Q <--> P ∧ Q",
            "P ∨ Q <--> ~P ∨ Q",
        ],
        correctIndex: 0,
    },
    {
        enunciado: "coonmutativa",
        // Ley conmutativa para la conjunción: P ∧ Q es equivalente a Q ∧ P.
        options: [
            "P ∧ Q <--> Q ∧ P",   // Correcta
            "P ∧ Q <--> P ∨ Q",
            "P ∧ Q <--> ~P ∧ Q",
        ],
        correctIndex: 0,
    },
];

export const problemsArray = shuffleOptions(problemas);