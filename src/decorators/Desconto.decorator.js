export default class Desconto {
  constructor({ produto }) {
    this.produto = produto;
    this.disconto = 0;
  }

  setDesconto({ desconto }) {
    this.desconto = desconto;
  }

  getValor() {
    const valorBase = this.produto.getValor();
    const valorTotal = valorBase * (1 - this.desconto);
    return valorTotal;
  }
}
