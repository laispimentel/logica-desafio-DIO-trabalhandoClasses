# 🛡️ Desafio: Criando Classes de um Jogo com JavaScript

Este projeto consiste na criação de uma classe `Heroi` para representar personagens de um jogo de aventura. O desafio faz parte do aprendizado de programação orientada a objetos (POO), trabalhando com **classes**, **objetos**, **funções**, **estruturas de decisão** e **laços de repetição**.

---

## 🚀 Tecnologias usadas

- JavaScript (ES6+)
- Paradigma de Programação Orientada a Objetos (POO)

---

## 📋 Descrição do desafio

Você deve criar uma classe que represente heróis de uma aventura, com as seguintes propriedades:

- `nome`
- `idade`
- `tipo` (como mago, guerreiro, monge, ninja)

Além disso, deve conter um método chamado `atacar`, que imprime uma mensagem com base no tipo do herói:

### Exemplo de saída:

---

## 🧠 Lógica da construção da classe

### 📦 Estrutura da classe `Heroi`

```text
┌─────────────────────────────┐
│          Heroi              │
├─────────────────────────────┤
│ - nome: string              │
│ - idade: number             │
│ - tipo: string              │
├─────────────────────────────┤
│ + atacar(): void            │
└─────────────────────────────┘
```
## 🔎 Explicação

- O construtor recebe os valores de nome, idade e tipo, e armazena dentro do objeto.

- O método atacar() verifica o tipo do herói e imprime uma mensagem personalizada com base nisso.

- Uma lista de heróis é usada para instanciar vários objetos de Heroi.

- Um laço de repetição (for) percorre essa lista e chama o método atacar() de cada um.
