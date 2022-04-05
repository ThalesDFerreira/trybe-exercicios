// 2 - A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
//   1 - Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
//   2 - Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
//   3 - Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
const { myRemove } = require("./myRemove");

describe("A função myRemove", () => {
  test("Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado", () => {
    const arr = [1, 2, 3, 4];
    expect(myRemove(arr, 3)).not.toContain(myRemove(3));
  });

  test("Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado", () => {
    const arr = [1, 2, 3, 4];
    expect(myRemove(arr, 3)).not.toContain(myRemove(5));
  });
});
