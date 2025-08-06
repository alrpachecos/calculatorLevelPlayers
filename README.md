🏆 Calculadora de Partidas Ranqueadas
Este projeto é uma calculadora de partidas ranqueadas que determina o nível de um herói com base no seu saldo de vitórias e derrotas. Ele foi desenvolvido em Node.js com foco em organização e clareza de código.

📂 Estrutura de Pastas
```
src/
 └── utils/
     ├── calculatorRankedMatch.js   # Função que calcula o saldo de vitórias e retorna o nível
     └── checkPlayerStatus.js       # Função que determina o nível com base no saldo
index.js                            # Arquivo principal que executa a aplicação
package.json                        # Dependências e metadados do projeto
```

🚀 Como funciona

O usuário informa a quantidade de vitórias e derrotas de um herói. A aplicação calcula o saldo de vitórias e, com base nesse saldo, retorna o nível correspondente, conforme a tabela:
Saldo de Vitórias	Nível
```
|------------------------------------|
| Saldo de Vitórias  |     Nível     |
|--------------------|---------------|
| 0 ou menos         | Sem nível     |
| 1 a 10             | Ferro         |
| 11 a 20            | Bronze        |
| 21 a 50            | Prata         |
| 51 a 80            | Ouro          |
| 81 a 90            | Diamante      |
| 91 a 100           | Lendário      |
| 101 ou mais        | Imortal       |
|------------------------------------|
```

💻 Como executar o projeto
Clone o repositório:
```
git clone https://github.com/seu-usuario/nome-do-repo.git
cd nome-do-repo
```

Instale as dependências (se houver):
```npm install```

Execute o projeto:
```node index.js```

🧠 Exemplo de uso

index.js

```import calculatorRankedMatch from './src/utils/calculatorRankedMatch.js';```

```const { result, level } = calculatorRankedMatch(40, 30);```

```console.log(`O Herói tem saldo de ${result} e está no nível ${level}`);```

✅ Saída esperada:

```O Herói tem saldo de 10 e está no nível Ferro```

🛠 Tecnologias utilizadas
- Node.js
- JavaScript (ES6+)
