# Jogo da Velha

**Projeto final do curso de Tecnologia do Pedagoginga**.  
Um **jogo da velha interativo** feito com **HTML, CSS e JavaScript**, desenvolvido para demonstrar conhecimentos adquiridos durante o curso.  

Os jogadores se alternam entre **X (azul)** e **O (vermelho)**, e o jogo indica vitória ou empate automaticamente. Possui botão para reiniciar a partida.
---

## 🖥️ Como usar

1. Clone ou baixe o projeto.
2. Abra o arquivo `index.html` no navegador.
3. Clique nas células para jogar:
   - Jogador **X** (azul)
   - Jogador **O** (vermelho)
4. O jogo mostrará:
   - Vitória de X ou O
   - Empate, se todas as células forem preenchidas
5. Clique em **Reiniciar** para começar uma nova partida.

---

## 🎨 Funcionalidades

- Alternância automática entre X e O.
- Destaque de cores para cada jogador:
  - X → azul
  - O → vermelho
- Previne marcação em células já preenchidas.
- Mensagem de status do jogo (quem joga, vitória ou empate).
- Botão de reinício do jogo.

---

## 🛠️ Tecnologias usadas

- HTML5
- CSS3
- JavaScript (Vanilla)

---

## 📌 Observações

- Cada célula do tabuleiro possui `data-index` de 0 a 8, usado pelo JavaScript para identificar posições.
- Estilos das células `.x` e `.o` controlam as cores de fundo e do texto.
- Estrutura modular: arquivos separados em `css/` e `js/` para melhor organização.
