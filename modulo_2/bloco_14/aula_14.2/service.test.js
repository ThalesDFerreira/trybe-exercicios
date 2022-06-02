const { test } = require('@jest/globals');
const service = require('./service');

describe('Exercício 1', () => {
  test("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
    service.geraNumAleatório = jest.fn().mockReturnValue(10);
  
    expect(service.geraNumAleatório()).toBe(10);
    expect(service.geraNumAleatório).toHaveBeenCalled();
    expect(service.geraNumAleatório).toHaveBeenCalledTimes(1);
  });
});

describe('Exercício 2', () => {
  test('testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros', () => {
    service.geraNumAleatório = jest.fn().mockImplementationOnce((a, b) => a / b);

    expect(service.geraNumAleatório(10, 2)).toBe(5);
    expect(service.geraNumAleatório).toHaveBeenCalled();
    expect(service.geraNumAleatório).toHaveBeenCalledTimes(1);
    expect(service.geraNumAleatório).toHaveBeenCalledWith(10, 2);
  });
});
