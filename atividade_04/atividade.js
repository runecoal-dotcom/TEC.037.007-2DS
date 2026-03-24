const vendasRaw = [
    { produto: 'Teclado', preco: 150 },
    { produto: 'Mouse', preco: 80 },
    { produto: 'Teclado', preco: 150 },
    { produto: 'Monitor', preco: 900 },
    { produto: 'Mouse', preco: 80 }, 
    { produto: 'Mousepad', preco: 30 }
];

const produtosUnicosSet = new Set(vendasRaw.map(item => item.produto));
const produtosUnicosArray = [...produtosUnicosSet];
console.log(produtosUnicosArray);

const mapaPrecos = new Map();
vendasRaw.forEach(item => {
    mapaPrecos.set(item.produto, item.preco);
});
console.log(mapaPrecos);

let total = 0;
for (const item of vendasRaw) {
    total += item.preco;
}
console.log(total);