# Eu poderia ter me tornado amarga, mas escolhi amar

Apresentação animada da palestra de **Jennifer Mayara Martins** no **Projeto Lutando pelo Futuro**, projeto que ensina boxe de graça na comunidade. A palestra é para as famílias dos alunos.

A apresentação é uma página web: abre em qualquer navegador, tem fundos animados, letras que aparecem com efeito, cartão de round e momentos interativos. É silenciosa: não tem nenhum som. Não precisa de PowerPoint nem de internet na hora da palestra.

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
| H | mostra a ajuda das teclas |

Passadores de slide (clickers) funcionam, porque enviam PageDown e PageUp.

## Como a apresentação foi pensada

- **Pouco texto na tela:** cada slide tem título, tópicos curtos (com subtópicos e etiquetas de data, idade ou lugar) e uma frase de impacto. O texto completo do roteiro está nas notas de cada slide (tecla N), para a Jennifer contar a história com as próprias palavras.

- **Identidade visual do projeto:** o turquesa do selo, o vermelho da corda, o creme da letra feita à mão, pinceladas e letra manuscrita.
- **O ambiente do boxe:** cordas do ringue no fundo, refletor, poste do corner, cartão de "ROUND" em cada parte da história, luvas, soco nas frases do "Bruno" e impacto nas frases fortes.
- **As cores contam a história:** começa no ringue escuro, à noite. Passa pela chuva da infância, pela tempestade roxa e pelo amanhecer da cirurgia. Depois vêm o papel claro da terapia, as cores do ringue e, no fim, o dourado e o pôr do sol.
- **A corda vermelha no rodapé é o fio condutor.** Ela cresce do primeiro ao último slide e vira um coração no final.
- **Intervalo:** depois do Round 15 vem o momento interativo com Luca ("Silêncio, Bruno!"), Divertida-Mente (Ansiedade, Tristeza e Vergonha) e a mensagem do boxe. Os trechos dos filmes não tocam dentro dos slides: deixe os vídeos prontos em outra aba.

### Interações

- **Cartão de round:** a cada round novo, uma pincelada atravessa a tela com o número e o nome da parte.
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
- `itens` são os tópicos: `{ tag: "2016", t: "tópico", s: "subtópico" }`; `frase` é a frase de impacto; `subtitulo` aparece embaixo do título do round;
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

## Trecho do filme (Luca)

O slide 16 mostra o trecho do Luca (1min21) dentro da apresentação, com a margem interativa: frases do Bruno, medidor de coragem, linha do tempo clicável e luzes que acompanham a cena.

- 1º clique (ou clicar no vídeo): play. Clicar no vídeo ou apertar **P**: pausa e continua.
- Os nomes embaixo do vídeo pulam para aquela parte.
- Depois do vídeo, cada clique dá um soco numa frase do Bruno.

Na página publicada no Claude o navegador não deixa tocar vídeo comum, então lá o trecho vai como H.264 puro + MP3, e a própria apresentação decodifica e desenha o vídeo (WebCodecs + Web Audio). Para gerar esses dois arquivos a partir do MP4:

```
ffmpeg -i assets/video/luca.mp4 -an -vf fps=30 -c:v libx264 -preset veryfast -crf 25 -bf 0 -g 30 -keyint_min 30 -sc_threshold 0 -pix_fmt yuv420p -profile:v main -level 3.0 -bsf:v h264_metadata=aud=insert -f h264 assets/video/luca.h264
ffmpeg -i assets/video/luca.mp4 -vn -c:a libmp3lame -b:a 112k assets/video/luca.mp3
```

O vídeo fica em `assets/video/luca.mp4` (com a capa em `assets/video/luca-capa.jpg`) e é publicado junto com o site. O arquivo `apresentacao-offline.html` também traz o vídeo dentro.

## Trecho do filme (Divertida-Mente)

O slide 18 mostra o trecho da Divertida-Mente (55 s, vídeo em pé) com a ideia "uma memória, dois olhares": à esquerda o que a Alegria vê, à direita o que a Tristeza vê. Cada memória acende quando aparece no vídeo, e a luz do fundo pende para o dourado ou para o azul conforme quem fala. Depois do vídeo, cada clique junta as duas metades de uma memória numa esfera dourada e azul; na última aparece "Em alguns momentos, alegria e tristeza andarão juntas."

- 1º clique (ou clicar no vídeo): play. Clicar no vídeo ou apertar **P**: pausa e continua.
- Clicar numa memória pula para aquela parte do vídeo.
- Arquivos: `assets/video/divertida.mp4` e `assets/video/divertida-capa.jpg`. Para a página do Claude, gere também `divertida.h264` (24 quadros por segundo, nível 3.1) e `divertida.mp3`, como no Luca.
