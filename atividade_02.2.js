// 1. function expression - calcularMedia
const calcularMedia = function (nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3
}
// 2. Arrow Function - Aprovação
const Aprovacao = (Nota) => Nota >= 7;
if (Aprovacao(calcularMedia(7, 10, 7))) {
    console.log("Aluno Aprovado");
} else {    console.log("Aluno Reprovado");
}
// 3. Function Declaration - exibirNotaFinal
function exibirNotaFinal (Nota) {
    console.log("Nota final: " + Nota);
}
// 4. Execução
exibirNotaFinal(Nota = calcularMedia(7, 10, 7)); 