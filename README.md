# Exemplo de Uso do Padrão Decorator em JavaScript e o Princípio Aberto/Fechado (OCP) do SOLID

Este é um exemplo simples de como aplicar o padrão Decorator em JavaScript para adicionar funcionalidades extras a uma classe base `Produto`.

## Visão Geral

O código consiste em três classes principais:

1. **Produto**: Representa um produto com um nome e um valor.
2. **Imposto**: Um decorador que adiciona imposto ao valor do produto.
3. **Desconto**: Um decorador que aplica um desconto ao valor do produto.

Os decoradores (`Imposto` e `Desconto`) implementam a mesma interface que a classe base `Produto`, permitindo que sejam usados de forma intercambiável.

## Como Usar

1. **Definindo um Produto**: Crie uma instância da classe `Produto`, passando um objeto contendo o nome e o valor do produto.

```javascript
const produto = new Produto({
  nome: 'Camiseta',
  valor: 45,
});
```

2. **Aplicando Decoradores**: Crie instâncias dos decoradores desejados, passando o produto como parâmetro.

```javascript
const produtoComImposto = new Imposto({ produto });
const produtoComDesconto = new Desconto({ produto });
```

3. **Personalizando os Decoradores (Opcional)**: Se necessário, você pode personalizar os decoradores. Por exemplo, para aplicar um desconto específico, use o método `setDesconto`.

```javascript
produtoComDesconto.setDesconto({ desconto: 0.1 }); // 10% de desconto
```

4. **Obtendo o Valor Final**: Use o método `getValor()` para obter o valor final do produto com os decoradores aplicados.

```javascript
console.log(`Preço base: ${produto.getValor()}`);
console.log(`Preço com imposto: ${produtoComImposto.getValor()}`);
console.log(`Preço com desconto: ${produtoComDesconto.getValor()}`);
```

## Exemplo de Saída

```
Preço base: 45
Preço com imposto: 49.5
Preço com desconto: 40.5
```

## Considerações

Este exemplo demonstra como o padrão Decorator pode ser usado para estender dinamicamente o comportamento de objetos em tempo de execução, seguindo os princípios do design orientado a objetos, como o Princípio Aberto/Fechado (OCP), permitindo a adição de novas funcionalidades sem modificar o código existente.