const notaPessoaCandidata = 82;

if (notaPessoaCandidata < 60) {
    console.log("Você foi reprovada(o)")
} 
else if (notaPessoaCandidata >= 60 && notaPessoaCandidata < 80) {
    console.log("Você está na nossa lista de espera");
} 
else if (notaPessoaCandidata >= 80) {
    console.log("Parabéns, você foi aprovada(o)!");
}