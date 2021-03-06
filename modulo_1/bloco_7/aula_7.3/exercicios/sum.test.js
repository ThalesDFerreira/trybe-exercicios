// 1 - Teste se o retorno de sum(4, 5) é 9
// 2 - Teste se o retorno de sum(0, 0) é 0
// 3 - Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
// 4 - Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
const { sum } = require("./sum");

describe("A função sum", () => {
  test("Espera que 4 mais 5 é igual a 9", () => {
    expect(sum(4, 5)).toBe(9);
  });

  test("Espera que 0 mais 0 é igual a 0", () => {
    expect(sum(0, 0)).toBe(0);
  });

  test("Espera erro quando os parâmetros são 4 e `5`", () => {
    expect(() => {
      sum(4, "5");
    }).toThrow("parameters must be numbers");
  });
});
