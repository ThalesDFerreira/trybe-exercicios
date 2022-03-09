// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". 
// Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'thales';

let invertida = word.split('').reverse().join('');  //split = transforma uma string em um arrey; 
                                                    //reverse = ele pega o arrey e inverte os caracteres;
                                                    //join = junta os caracteres do arrey;
console.log(invertida); 