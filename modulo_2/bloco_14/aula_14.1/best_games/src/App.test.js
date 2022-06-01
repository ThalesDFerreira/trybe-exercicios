import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';

describe('Exercício 1', () => {
  it('Verifica se aparece na tela a mensagem "Carregando..."', () => {
    render(<App />);
    const loadingEl = screen.getByText(/carregando.../i);
    expect(loadingEl).toBeInTheDocument();
    });
});

describe('Exercício 2', async () => {
  it('Verifica se o jogo com o texto `Minecraft` é renderizado na tela após a saída do carregando.', () => {
    render(<App />);
    await waitForElementToBeRemoved(() =>
      screen.getByText(/carregando.../i))
});

// describe('Exercício 3', async () => {
//   it('Verifica se o jogo com o texto `Minecraft` é renderizado na tela após a saída do carregando.', () => {
//     render(<App />);
    
// });
