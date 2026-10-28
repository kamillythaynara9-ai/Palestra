# Eu poderia ter me tornado amarga, mas escolhi amar

Apresentação animada da palestra de **Jennifer Mayara Martins** no **Projeto Lutando pelo Futuro**, projeto que ensina boxe de graça na comunidade. A palestra é para as famílias dos alunos.

A apresentação é uma página web: abre em qualquer navegador, tem fundos animados, letras que aparecem com efeito, cartão de round com som de gongo e momentos interativos. Não precisa de PowerPoint nem de internet na hora da palestra.

## Como apresentar

**Sem internet (recomendado no dia):** baixe `dist/apresentacao-offline.html` e abra no Chrome ou no Edge. Esse arquivo único tem tudo dentro: fontes, fotos e animações.

**Pelo repositório:** abra `index.html` por um servidor (GitHub Pages, Vercel ou `npx serve`). Abrindo o `index.html` direto do computador, o navegador pode bloquear as fontes. Para usar sem servidor, prefira o arquivo offline.

| Tecla | O que faz |
|---|---|
| → · espaço · PageDown · clique | avança (e revela o próximo item quando o slide tem cliques) |
| ← · PageUp | volta |
| F | tela cheia |
| N | notas de quem apresenta, com o tempo de palestra e o próximo slide |
| G | todos os slides, para pular para qualquer um |
| B | tela de pausa com a logo (bom para quando passar os vídeos) |
| S | liga e desliga o som do gongo e dos socos |
| H | mostra a ajuda das teclas |

Passadores de slide (clickers) funcionam, porque enviam PageDown e PageUp.

## Como a apresentação foi pensada

- **Identidade visual do projeto:** o turquesa do selo, o vermelho da corda, o creme da letra feita à mão, pinceladas e letra manuscrita.
- **O ambiente do boxe:** cordas do ringue no fundo, refletor, poste do corner, cartão de "ROUND" com gongo em cada parte da história, luvas, soco nas frases do "Bruno" e impacto nas frases fortes.
- **As cores contam a história:** começa no ringue escuro, à noite. Passa pela chuva da infância, pela tempestade roxa e pelo amanhecer da cirurgia. Depois vêm o papel claro da terapia, as cores do ringue e, no fim, o dourado e o pôr do sol.
- **A corda vermelha no rodapé é o fio condutor.** Ela cresce do primeiro ao último slide e vira um coração no final.
- **Intervalo:** depois do Round 15 vem o momento interativo com Luca ("Silêncio, Bruno!"), Divertida-Mente (Ansiedade, Tristeza e Vergonha) e a mensagem do boxe. Os trechos dos filmes não tocam dentro dos slides: deixe os vídeos prontos em outra aba.

### Interações

- **Cartão de round:** a cada round novo, uma pincelada atravessa a tela com o número e o gongo toca.
- **Silêncio, Bruno!:** cada clique dá um soco numa frase da voz de dúvida e ela sai voando.
- **Cliques um a um:** perguntas, balões de fala, pensamentos e listas aparecem uma por clique.
- **"Eu não era…":** cada frase aparece e o rótulo é riscado com tinta vermelha.
- **Do frio para o quente:** cada clique vira um cartão de "poderia ter…" para "mas escolhi…".
- **Os tijolos:** caem um a um e terminam com um coração.
- **EU SOU CAPAZ.:** entra como carimbo.
- **Divertida-Mente:** clicar numa emoção faz ela pular.
- **Final:** a corda desenha um coração, e mais um clique solta o confete.

## Como mudar textos, ordem e fotos

Todo o conteúdo fica em **`js/slides.js`**. Cada slide é um bloco `{ ... }`:

- para trocar um texto, edite entre as aspas;
- para mudar a ordem, mova o bloco inteiro;
- `*palavra*` vira destaque em letra de pincel e `**frase**` vira negrito com marca-texto;
- `clima` escolhe o fundo animado (lista em `js/fundo.js`);
- `notas` aparece só para quem apresenta (tecla N).

Depois de mudar, gere de novo o arquivo offline:

```
node ferramentas/gerar-offline.mjs
```

## Estrutura

```
index.html                 página da apresentação
css/estilo.css             identidade visual, tipos de slide e animações de CSS
js/slides.js               todo o texto da palestra (edite aqui)
js/fundo.js                fundos animados (ringue, chuva, mar, pôr do sol...)
js/apresentacao.js         motor: monta os slides, anima as letras, interações e teclas
assets/img/                logo do projeto e foto da Jennifer (tratada, sem alterar o conteúdo)
assets/fontes/             Kalam, Caveat Brush, Nunito e Bebas Neue
ferramentas/gerar-offline.mjs   gera dist/apresentacao-offline.html
dist/apresentacao-offline.html  versão de um arquivo só, para usar sem internet
```

## Créditos

- Texto: Jennifer Mayara Martins.
- Logo: Projeto Lutando pelo Futuro.
- Fontes: Kalam, Caveat Brush, Nunito e Bebas Neue, todas livres pela SIL Open Font License, via Google Fonts e Fontsource.
