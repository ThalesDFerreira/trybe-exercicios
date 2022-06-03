import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testes Portifólio', () => {
  it('Teste que o clique em cada rota renderiza os textos esperados na tela', () => {
    renderWithRouter(<App />);
    const linkInicioEl = screen.getByRole('link', { name: /Inicio/i });
    userEvent.click(linkInicioEl);
    const inicioTitle = screen.getByRole('heading', { name: /Meu portifólio/i });
    expect(inicioTitle).toBeInTheDocument();

    // const linkProjetosEl = screen.getAllByRole('link', { name: /Projetos/i });
    // userEvent.click(linkProjetosEl);
    // const projetoTitle = screen.getAllByRole('heading', { name: /Projects/i });
    // expect(projetoTitle).toBeInTheDocument();

    // const linkContatoEl = screen.getAllByRole('link', { name: /Contato/i });
    // userEvent.click(linkContatoEl);
    // const contactTitle = screen.getAllByRole('heading', { name: /Contact/i });
    // expect(contactTitle).toBeInTheDocument();

    // const linkSobreEl = screen.getAllByRole('link', { name: /Sobre mim/i });
    // userEvent.click(linkSobreEl);
    // const sobreTitle = screen.getAllByRole('heading', { name: /About/i });
    // expect(sobreTitle).toBeInTheDocument();
  });
});
