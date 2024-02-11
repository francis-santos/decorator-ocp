export default class Imposto {
  constructor({ produto }) {
    this.produto = produto;
    this.imposto = 0.1; // 10% de imposto por padrão
  }

  getValor() {
    const valorBase = this.produto.getValor();
    const valorTotal = valorBase * (1 + this.imposto);
    return parseFloat(valorTotal.toFixed(2));
  }
}
