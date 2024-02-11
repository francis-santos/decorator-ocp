import Produto from "./src/Produto.js";
import Desconto from "./src/decorators/Desconto.decorator.js";
import Imposto from "./src/decorators/Imposto.decorator.js";

const produto = new Produto({
  nome: 'Camiseta',
  valor: 45,
});

const produtoComImposto = new Imposto({ produto });
const produtoComDesconto = new Desconto({ produto });

produtoComDesconto.setDesconto({ desconto: 0.1 });

console.log(`Preço base: ${produto.getValor()}`);
// Preço base: 45

console.log(`Preço com imposto: ${produtoComImposto.getValor()}`);
// Preço com imposto: 49.5

console.log(`Preço com desconto: ${produtoComDesconto.getValor()}`);
//Preço com desconto: 40.5
