console.log(
  "Intentando llamar a 'funcionDeclarada' antes de su declaración:"
);
try {
  console.log(funcionDeclarada());
} catch (error) {
  console.log("Error:", error.message);
}

console.log(
  "Intentando llamar a 'funcionExpresada' antes de su declaración:"
);
try {
  console.log(funcionExpresada());
} catch (error) {
  console.log("Error:", error.message);
}

// Declaración de una función declarada
function funcionDeclarada() {
  return "Función declarada ha sido llamada.";
}

// Declaración de una función expresada
const funcionExpresada = function () {
  return "Función expresada ha sido llamada.";
};

console.log("Llamando a 'funcionDeclarada' después de su declaración:");
console.log(funcionDeclarada());

console.log("Llamando a 'funcionExpresada' después de su declaración:");
console.log(funcionExpresada());

/*
// Respuestas a las preguntas
1. ¿Qué sucedió cuando intentaste llamar a las funciones antes de su declaración?
  R/ Si son declaradas, functiona porque actúa el hoisting. Si son expresadas, aparece un error de tipo 'ReferenceError'
2. ¿Cómo difieren los resultados entre la función declarada y la función expresada?
  R/ Una es afectada por hoisting y la otra no, por lo que una función declarada puede ser definida en cualquier parte del código, mientras que una función expresada debe ser obligatoriamente definida antes de ser llamada.
3. ¿Qué indica esto sobre cómo el JavaScript maneja estas dos diferentes declaraciones de funciones?
  R/ Las expresadas permiten menos flexibilidad al obligar al usuario a definirlas antes de ser llamadas (en la parte superior del código)
 */