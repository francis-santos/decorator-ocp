export default class Produto {
  constructor({ nome, valor }) {
    this.nome = nome;
    this.valor = valor;
  }

  getValor() {
    return this.valor;
  }
}
