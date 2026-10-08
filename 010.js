// 1. 
let idade = 17;

if (idade < 16) {
  console.log('Nao');
} else if (idade >= 16 && idade <= 17) {
  console.log('16-17');
} else {
  console.log('Pode');
}

// 2. 
let mensagem = idade >= 18 ? 'Pode' : 'Nao';
console.log(mensagem);

// 3. 
let color = 'vermelho';

switch (color) {
  case 'vermelho':
    console.log('Pare');
    break;
  case 'amarelo':
    console.log('Atencao');
    break;
  case 'verde':
    console.log('Siga');
    break;
  default:
    console.log('Cor invalida');
}

// 4.
let numero = 7;

if (numero % 2 === 0) {
  console.log('Par');
} else {
  console.log('Impar');
}

// 5. 
let nota = 8.5;

if (nota >= 9 && nota <= 10) {
  console.log('A');
} else if (nota >= 7 && nota < 9) {
  console.log('B');
} else if (nota >= 5 && nota < 7) {
  console.log('C');
} else if (nota >= 0 && nota < 5) {
  console.log('D');
} else {
  console.log('Nota invalida');
}
// 6. 
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 7.
const frutas = ['uva', 'pera', 'maca'];

for (const fruta of frutas) {
  console.log(fruta);
}

// 8. 
let j = 0;

while (j < 3) {
  console.log(j);
  j++;
}

// 9. 
for (let i = 0; i <= 20; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

// 10. 
let contador = 10;

while (contador >= 0) {
  console.log(contador);
  contador--;
}


// 11.
const numeros = [1, 2, 3, 4];
const triplo = numeros.map(num => num * 3);
console.log(triplo); 

// 12. 
const idades = [12, 17, 18, 22, 15, 30];
const maioresDeIdade = idades.filter(idade => idade >= 18);
console.log(maioresDeIdade); 

// 13.
const carrinho = [10, 20.5, 30];
const total = carrinho.reduce((acc, preco) => acc + preco, 0);
console.log(total); 

// 14. 
const nomes = ['Jose', 'Henrique', 'Berto'];
nomes.forEach(nome => {
  console.log(`Ola, ${nome}!`);
});

// 15. 
const numerosDe1a10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const paresMultiplicados = numerosDe1a10
  .filter(num => num % 2 === 0)
  .map(num => num * 5);

console.log(paresMultiplicados); 


// 16. 
const a = [1, 2];
const b = [3, 4];
const c = [...a, ...b];
console.log(c); 

// 17. 
const user = { nome: 'Jose', idade: 30, cidade: 'Rio de Janeiro' };
const { nome, idade: idadeUser } = user;
console.log(nome, idadeUser); 

// 18. 
const cores = ['azul', 'verde', 'amarelo'];
const [cor1, cor2] = cores;
console.log(cor1, cor2); 

// 19.
const configPadrao = { tema: 'escuro', volume: 50 };
const configUsuario = {
  ...configPadrao,
  idioma: 'pt-BR'
};
console.log(configUsuario); 


// 20. 
const alunos = [
  { nome: 'Jose', nota: 8.5 },
  { nome: 'HEnrique', nota: 6.0 },
  { nome: 'Berto', nota: 9.0 },
  { nome: 'Santos', nota: 5.5 }
];

const aprovados = alunos
  .filter(aluno => aluno.nota > 7)
  .map(({ nome }) => nome);

console.log(aprovados); 