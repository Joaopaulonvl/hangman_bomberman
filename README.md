# 💣 Hangman: Bomberman - Jogo da Forca
Este projeto é um jogo da forca que possui elementos da franquia **Bomberman**. Ele foi desenvolvido para oferecer uma experiência nostálgica e divertida, unindo a mecânica clássica de adivinhação de palavras com os elementos visuais e sonoros do icônico jogo de explosões.

## 👤 Autor
Desenvolvido por João Paulo Naval.

## Imagens
`![Screenshot](images/Screenshot_mainMenu.png)`
`![Screenshot](images/Screenshot_game.png)`

## 🕹️ Como Jogar
Acesse a versão online: **[CLIQUE AQUI PARA JOGAR](https://joaopaulonvl.github.io/hangman_bomberman/)**

1. O objetivo é adivinhar a palavra secreta antes que o **Bomberman** seja derrotado.
2. Para jogar, você deve clicar nas letras do teclado virtual.
3. Você tem um limite de **6 erros**, caso chegue no limite, a bomba será detonada e o personagem derrotado.
4. Durante a partida, uma **DICA** será exibida para auxiliar na decifragem da palavra.

---

## ✨ Principais Funcionalidades
* **Sistema Bilíngue** Suporte completo para Português do Brasil (pt-BR) e Inglês (en-US).
* **Feedback Dinâmico** Animações em GIF que mudam conforme o estado do jogo (vitória e derrota).
* **Imersão Sonora** Alguns efeitos de som originais do Bomberman para os resultados finais.
* **Reiniciar o jogo sem recarregar a página** Função personalizada para reiniciar a partida instantâneamente.
* **Design responsivo em telas grandes** Adaptado para diferentes tamanhos de tela (portabilidade para dispositivos móveis em desenvolvimento).

---

# 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:
* [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML) - Estrutura da página.
* [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS) - Estilização e animações.
* [JavaScript (ES6+)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - Lógica do jogo e manipulação de áudio.
* [jQuery](https://jquery.com/) - Manipulação do DOM e eventos de interface.
* [JSON](https://www.json.org/json-en.html) - Gerenciamento do banco de palavras e dicas.
* [Aseprite] (https://www.aseprite.org/) - Software utilizado para criação, edição e animação dos sprites do Bomberman e da bomba (como a pose idle, vitória, derrota e explosão).

---

## 📂 Estrutura de Pastas
```text
├── pt-BR/          # Arquivos da versão em Português
├── images/         # Todos os GIFs e sprites do Bomberman, da bomba e demais imagens do projeto
├── sounds/         # Efeitos sonoros do jogo
├── styles.css      # Estilização global do projeto
├── game.js         # Funcionalidades do jogo
├── game.html       # Página onde o jogo é executado
├── index.js        # Funcionalidades do Menu Principal
├── index.html      # Página de entrada (Menu Principal)
└── words_en.json   # Banco de palavras e dicas
