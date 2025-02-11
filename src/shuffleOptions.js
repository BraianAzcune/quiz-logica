export function shuffleOptions(problemsArray) {
    return problemsArray.map(problem => {
        const options = [...problem.options]; // Copia de las opciones
        const correctOption = options[problem.correctIndex]; // Obtener la opción correcta

        // Mezclar las opciones usando Fisher-Yates Shuffle
        for (let i = options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [options[i], options[j]] = [options[j], options[i]];
        }

        // Encontrar el nuevo índice de la opción correcta
        const newCorrectIndex = options.indexOf(correctOption);

        // Devolver el problema con las opciones aleatorizadas y el índice correcto actualizado
        return {
            ...problem,
            options: options,
            correctIndex: newCorrectIndex,
        };
    });
}