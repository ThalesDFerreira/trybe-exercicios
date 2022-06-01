import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from '../App';

describe('Testando a App.js', () => {
  test('Verificando se o label e o input existem no documento', () => {
    render(<App />);
    const labelTask = screen.getByText('Tarefa:');
    const inputTask = screen.getByLabelText('Tarefa:');

    expect(labelTask).toBeInTheDocument();
    expect(inputTask).toBeInTheDocument();
  });

  test('Verificando o tipo do input', () => {
    render(<App />);
    const inputTask = screen.getByLabelText('Tarefa:');
    expect(inputTask.type).toBe('text');
  });
});

describe('Exercicio 1', () => {
  test('Verifica se existe um botão para adicionar a tarefa', () => {
    // acessar os elementos da tela
    render(<App />);
    const button = screen.getByText(/Adicionar/i);
    const inputTask = screen.getByLabelText('Tarefa:');
    
    // fazer os testes
    expect(button).toBeInTheDocument();
    expect(button.type).toBe('button');

    userEvent.click(button);

    expect(button).toHaveTextContent('');
  });
});

// acessar os elementos da tela

// interagir com os elementos (se for necessário)

// fazer os testes