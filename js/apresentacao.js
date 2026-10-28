/* =====================================================================
   MOTOR DA APRESENTAÇÃO
   Monta os slides a partir de js/slides.js, anima as letras, troca os
   climas do fundo, abre o cartão de round com o gongo e cuida das
   interações (socos, cartões que viram, tijolos, confete).

   Tipos de slide: espera, capa, abertura, historia, citacao, impacto,
   pausa, virada, grade, passos, destaque, intervalo, nocaute, aviso,
   emocoes, emocao, filme, trio, mar, lutador, diploma, foto, viradas,
   tijolos, levante, final, obrigada

   Teclas: → espaço PageDown avança · ← PageUp volta · F tela cheia
           N notas · G todos os slides · B pausa · S som · H ajuda
   ===================================================================== */
(function () {
  "use strict";
  const S = window.SLIDES, RD = window.ROUNDS, FOT = window.FOTOS, EV = window.EVENTO;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const calmo = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const palco = $("#palco"), caixa = $("#slides"), cortina = $("#cortina"), hud = $("#hud");
  const pad = n => String(n).padStart(2, "0");
  const EASE = "cubic-bezier(.2,.8,.2,1)", MOLA = "cubic-bezier(.18,1.35,.4,1)";

  /* ---------------- pinceladas geradas (bordas de tinta) ---------------- */
  function pincel(cor, semente, forma) {
    const d = forma === "mancha"
      ? "M120 160 C 80 70 260 20 420 40 C 600 60 760 30 860 120 C 960 210 940 420 860 520 C 760 640 520 660 340 620 C 160 580 40 480 60 360 C 70 280 150 240 120 160 Z"
      : "M24 78 C 240 34 690 26 976 60 C 990 120 985 190 968 236 C 700 272 260 268 34 244 C 14 190 12 120 24 78 Z";
    const vb = forma === "mancha" ? "0 0 1000 700" : "0 0 1000 300";
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='${vb}' preserveAspectRatio='none'><defs><filter id='f' x='-8%' y='-25%' width='116%' height='150%'><feTurbulence type='fractalNoise' baseFrequency='0.011 0.16' numOctaves='3' seed='${semente}'/><feDisplacementMap in='SourceGraphic' scale='44'/></filter></defs><g filter='url(#f)'><path d='${d}' fill='${cor}'/><path d='M60 110 C 300 90 700 96 950 104' stroke='rgba(255,255,255,.16)' stroke-width='10' fill='none'/><path d='M50 200 C 320 214 680 206 940 196' stroke='rgba(0,0,0,.14)' stroke-width='14' fill='none'/></g></svg>`;
    return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
  }
  const raiz = document.documentElement.style;
  raiz.setProperty("--pincel-turquesa", pincel("#26A9B5", 4));
  raiz.setProperty("--pincel-chip", pincel("#C8202F", 7));
  raiz.setProperty("--pincel-mancha", pincel("#1E9AA6", 11, "mancha"));
  const faixaVermelha = pincel("#C8202F", 2), faixaTurquesa = pincel("#168F9B", 9);

  /* ---------------- desenhos ---------------- */
  const SVG = {
    luva: `<svg viewBox="0 0 200 150" aria-hidden="true"><path d="M58 30 C 70 8 130 2 165 20 C 196 36 198 92 180 113 C 164 131 120 137 92 129 L 68 125 C 60 110 56 60 58 30 Z" fill="#C8202F"/><path d="M72 92 C 50 90 40 110 52 123 C 62 133 84 129 94 120" fill="#9E1426"/><rect x="6" y="42" width="64" height="82" rx="16" fill="#F4ECDD"/><rect x="6" y="66" width="64" height="13" fill="#C8202F"/><path d="M108 24 C 140 18 170 30 180 54" stroke="#FF8A95" stroke-width="9" fill="none" stroke-linecap="round" opacity=".55"/></svg>`,
    luvasPenduradas: `<svg viewBox="0 0 260 420" aria-hidden="true"><path d="M130 0 C 128 60 96 110 86 150 M130 0 C 132 60 168 110 178 150" stroke="#F4ECDD" stroke-width="5" fill="none"/><g transform="translate(150 140) rotate(96)"><path d="M58 30 C 70 8 130 2 165 20 C 196 36 198 92 180 113 C 164 131 120 137 92 129 L 68 125 C 60 110 56 60 58 30 Z" fill="#B71C2C"/><path d="M72 92 C 50 90 40 110 52 123 C 62 133 84 129 94 120" fill="#8E1424"/><rect x="6" y="42" width="64" height="82" rx="16" fill="#E9DFCB"/><rect x="6" y="66" width="64" height="13" fill="#B71C2C"/></g><g transform="translate(250 150) rotate(84)"><path d="M58 30 C 70 8 130 2 165 20 C 196 36 198 92 180 113 C 164 131 120 137 92 129 L 68 125 C 60 110 56 60 58 30 Z" fill="#D2283A"/><path d="M72 92 C 50 90 40 110 52 123 C 62 133 84 129 94 120" fill="#9E1426"/><rect x="6" y="42" width="64" height="82" rx="16" fill="#F4ECDD"/><rect x="6" y="66" width="64" height="13" fill="#D2283A"/><path d="M108 24 C 140 18 170 30 180 54" stroke="#FF8A95" stroke-width="9" fill="none" stroke-linecap="round" opacity=".5"/></g></svg>`,
    sino: `<svg viewBox="0 0 100 100" aria-hidden="true"><rect x="45" y="4" width="10" height="12" rx="4" fill="#F2A93B"/><path d="M50 12 C 28 12 21 32 21 52 L 13 74 L 87 74 L 79 52 C 79 32 72 12 50 12 Z" fill="#F2A93B"/><path d="M34 30 C 38 22 44 19 50 19" stroke="#FFE3A8" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="50" cy="84" r="9" fill="#F2A93B"/></svg>`,
    play: `<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="22" fill="#C8202F"/><path d="M19 14 L35 24 L19 34 Z" fill="#F4ECDD"/></svg>`,
    mao: `<svg viewBox="0 0 100 100" aria-hidden="true"><g fill="currentColor"><rect x="30" y="18" width="11" height="42" rx="5.5"/><rect x="43" y="8" width="11" height="50" rx="5.5"/><rect x="56" y="12" width="11" height="48" rx="5.5"/><rect x="69" y="22" width="10" height="40" rx="5"/><path d="M28 50 Q 28 90 54 91 Q 80 91 80 58 L 80 50 Z"/><rect x="13" y="44" width="11" height="32" rx="5.5" transform="rotate(-34 18 60)"/></g></svg>`,
    alerta: `<svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="46" fill="#F2A93B"/><rect x="44" y="22" width="12" height="38" rx="6" fill="#0A1519"/><circle cx="50" cy="74" r="7" fill="#0A1519"/></svg>`,
    coracaoTraco: `<svg class="coracao-desenho" viewBox="0 0 120 110" data-a="desenha" aria-hidden="true"><path class="traco" d="M60 100 C 22 72 6 52 8 32 C 10 14 26 5 40 7 C 52 9 58 18 60 28 C 62 18 70 8 82 6 C 98 4 112 14 112 32 C 112 52 96 72 60 100 Z"/></svg>`,
    rabisco: `<svg class="rabisco" viewBox="0 0 300 40" data-a="desenha" aria-hidden="true"><path class="traco" d="M4 24 C 40 6 70 38 110 20 S 180 6 220 24 S 280 30 296 14"/></svg>`,
    cronometro: `<svg class="cronometro" viewBox="0 0 170 170" aria-hidden="true"><circle cx="85" cy="85" r="70" fill="rgba(0,0,0,.25)" stroke="rgba(244,236,221,.25)" stroke-width="12"/><circle class="ponteiro" cx="85" cy="85" r="70" fill="none" stroke="#FFD27A" stroke-width="12" stroke-linecap="round" stroke-dasharray="440" transform="rotate(-90 85 85)"/><text x="85" y="104" text-anchor="middle" font-family="Bebas Neue, Impact, sans-serif" font-size="56" fill="#F4ECDD">1:00</text></svg>`,
    barco: `<svg class="barquinho" viewBox="0 0 200 130" aria-hidden="true" data-a="sobe"><path d="M8 74 L192 74 L160 116 L40 116 Z" fill="#F4ECDD"/><path d="M62 74 L100 8 L140 74 Z" fill="#FFFFFF"/><path d="M100 8 L100 74" stroke="#D9C9B0" stroke-width="3"/><path d="M40 116 L160 116" stroke="#D9C9B0" stroke-width="3"/></svg>`,
    curativo: `<svg viewBox="0 0 230 78" aria-hidden="true"><rect x="2" y="2" width="226" height="74" rx="37" fill="#E8B98E"/><rect x="82" y="10" width="66" height="58" rx="10" fill="#F6DCC0"/><g fill="#C9956B"><circle cx="30" cy="28" r="3"/><circle cx="46" cy="40" r="3"/><circle cx="30" cy="52" r="3"/><circle cx="184" cy="28" r="3"/><circle cx="200" cy="40" r="3"/><circle cx="184" cy="52" r="3"/></g></svg>`,
    coracaoCheio: `<svg class="coracao-topo" viewBox="0 0 120 110" aria-hidden="true"><path d="M60 104 C 20 74 4 54 6 32 C 8 12 26 3 40 5 C 52 7 58 16 60 26 C 62 16 70 6 82 4 C 98 2 114 12 114 32 C 114 54 98 74 60 104 Z" fill="#EF4A5A" stroke="#F4ECDD" stroke-width="5"/></svg>`
  };
  const MOVEIS = [
    ["#E0795E", '<path d="M26 8h12v42h34v12H26z M26 62h12v30H26z M60 62h12v30H60z"/>'],
    ["#F2B134", '<path d="M30 12h40l14 32H16z M46 44h8v36h-8z M28 80h44v10H28z"/>'],
    ["#6FB58A", '<path d="M8 42h84v30H8z M18 24h64v20H18z M8 72h10v14H8z M82 72h10v14H82z"/>'],
    ["#5DA9E9", '<path d="M6 30h88v11H6z M14 41h9v48h-9z M77 41h9v48h-9z"/>'],
    ["#B07CD8", '<path d="M22 6h56v84H22z" /><path d="M50 10v76" stroke="#3a2a50" stroke-width="3"/><circle cx="44" cy="48" r="3" fill="#3a2a50"/><circle cx="56" cy="48" r="3" fill="#3a2a50"/>']
  ];
  const CORACAO_GRANDE = "M750 930 C 470 760 150 560 150 330 C 150 160 280 60 430 60 C 570 60 690 150 750 280 C 810 150 930 60 1070 60 C 1220 60 1350 160 1350 330 C 1350 560 1030 760 750 930 Z";

  /* ---------------- texto ---------------- */
  const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  function md(s) {
    let n = 0;
    return esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, (m, t) => `<em class="pincel${(n++ % 2) ? " par" : ""}">${t}</em>`);
  }
  const limpo = s => String(s || "").replace(/\*/g, "");
  const rotRound = r => r === "INT" ? "INTERVALO" : "ROUND " + pad(r);

  /* ---------------- modelos de slide ---------------- */
  const M = {
    espera: s => `<div class="espera">
      <img class="espera-logo" src="${FOT.logo}" alt="${EV.projeto}" data-a="gira">
      <p class="rotulo" data-a="sobe">${EV.projeto}</p>
      <h1 data-a="letras">${md("Sejam *bem-vindos!*")}</h1>
      <p class="aguarde" data-a="sobe">A palestra já vai começar<i></i><i></i><i></i></p></div>`,

    capa: s => `<div class="capa-foto" data-a="foto-capa"><div class="mancha" style="background: var(--pincel-mancha) no-repeat center / 100% 100%"></div><span class="aro"></span><img src="${FOT.retrato}" alt="Jennifer Mayara Martins sorrindo"></div>
      <div class="luvas" style="left:600px; top:-40px" data-a="balanco">${SVG.luvasPenduradas}</div>
      <img class="capa-logo" src="${FOT.logo}" alt="${EV.projeto}" data-a="gira">
      <div class="capa-texto">
        <p class="rotulo so-esq" data-a="sobe">Palestra</p>
        <h1 data-a="letras">${md("Eu poderia ter me tornado *amarga,*")}<br>${md("mas escolhi *amar.*").replace('class="pincel"', 'class="pincel par"')}</h1>
        <div class="etiqueta" data-a="pincel"><small>Palestrante</small><span>${EV.palestrante}</span></div>
      </div>`,

    abertura: s => `<div class="centro">
      <h1 class="titulo-grande" data-a="letras">${md(s.titulo)}</h1>
      <p class="texto-medio" data-a="palavras">${md(s.textos[0])}</p>
      <p class="texto-medio" style="color:var(--tx);font-family:var(--f-mao);font-size:54px" data-a="palavras">${md(s.textos[1])}</p></div>`,

    historia: s => {
      const r = s.round, titulo = s.titulo || RD[r];
      const moveis = s.carnaval ? `<div class="moveis">${MOVEIS.map(([c, p]) => `<svg viewBox="0 0 100 100" fill="${c}" data-a="pop" data-g="140" aria-hidden="true">${p}</svg>`).join("")}</div>` : "";
      const curativos = s.curativos ? [[1480, 150, 22], [1590, 820, -14]].map(([x, y, g]) => `<div class="curativo" style="left:${x}px;top:${y}px;rotate:${g}deg" data-a="curativo" data-rot="${g}">${SVG.curativo}</div>`).join("") : "";
      const fio = s.fio ? `<svg class="fio" style="top:880px" viewBox="0 0 2000 120" data-a="desenha" aria-hidden="true"><path class="traco" d="M0 60 C 300 10 500 110 800 60 S 1300 10 1600 60 S 1900 100 2000 50" stroke="#C8202F" stroke-width="16" fill="none" stroke-linecap="round"/><path d="M0 60 C 300 10 500 110 800 60 S 1300 10 1600 60 S 1900 100 2000 50" stroke="rgba(255,190,190,.5)" stroke-width="5" stroke-dasharray="8 14" fill="none"/></svg>` : "";
      const textos = s.textos.map(t => `<p data-a="palavras">${md(t)}</p>`).join("") + (s.aviso ? `<p class="aviso-cartao" data-a="sobe">${md(s.aviso)}</p>` : "");
      return `<div class="col-esq">
        <div class="chip-round${r === "INT" ? " int" : ""}" data-a="pop"><span class="fundo-pincel"></span>${r === "INT" ? "<strong>INTERVALO</strong>" : `<b>ROUND</b><strong>${pad(r)}</strong>`}</div>
        <h2 class="titulo-round" data-a="palavras">${md(titulo)}</h2>${SVG.rabisco}${moveis}</div>
        <div class="col-dir">${textos}</div>${curativos}${fio}`;
    },

    citacao: s => `<div class="citacao${s.menor ? " menor" : ""}${s.maior ? " maior" : ""}">
      <span class="aspas" data-a="pop" aria-hidden="true">“</span>
      <blockquote data-a="leitura">${md(s.citacao)}</blockquote>
      ${s.autor ? `<p class="autor" data-a="sobe">${esc(s.autor)}</p>` : ""}${SVG.coracaoTraco}</div>`,

    impacto: s => `<div class="impacto">
      <p class="l1" data-a="impacto">${md(s.linhas[0])}</p>
      <p class="l2${limpo(s.linhas[1]).length > 14 ? " longa" : ""}" data-a="impacto" data-fx="${s.explosao ? "explosao" : "tremer"}${s.confete ? " confete" : ""}">${md(s.linhas[1])}</p></div>`,

    pausa: s => `<div class="pausa">
      <p class="antes" data-a="lento">${esc(s.antes)}</p><div class="linha-horizonte" data-a="sobe"></div>
      <p class="frase" data-a="lento">${md(s.frase)}</p></div>`,

    virada: s => `<div class="centro virada">
      <h2 class="frase" data-a="letras">${md(s.frase)}</h2>
      <p class="depois" data-a="palavras" data-espera="500">${md(s.depois)}</p></div>`,

    destaque: s => `<div class="centro"><h2 class="destaque-frase" data-a="leitura">${md(s.frase)}</h2>${SVG.coracaoTraco}</div>`,

    grade: s => `<div class="centro esq" style="gap:28px">
      <h2 class="grade-titulo" data-a="palavras">${md(s.titulo)}</h2>
      <div class="grade-lista">${s.itens.map(t => `<p data-a="pop" data-g="110">${md(t)}</p>`).join("")}</div>
      <p class="grade-aviso" data-a="sobe">${md(s.aviso)}</p></div>`,

    passos: s => {
      const est = s.estilo || "suave";
      const anim = { suave: "sobe", cartao: "esq", riscado: "palavras", golpe: "jab", pergunta: "pop", aprendi: "esq", frio: "palavras", grande: "letras" }[est] || "sobe";
      const fx = est === "golpe" ? ' data-fx="soco"' : est === "grande" ? ' data-fx="tremer-leve"' : "";
      let itens;
      if (est === "balao" || est === "pensamento") {
        const pos = est === "balao" ? [[0, 20], [680, 0], [260, 200], [900, 220], [360, 410]] : [[0, 10], [820, 150], [60, 320], [640, 470]];
        itens = `<div class="nuvem-area">${s.itens.map((t, k) => `<p class="${est === "balao" ? "balao b" + ((k % 3) + 1) : "pensamento"}" style="left:${pos[k][0]}px;top:${pos[k][1]}px" data-passo="${k + 1}" data-a="balao">${md(t)}</p>`).join("")}</div>`;
      } else {
        itens = s.itens.map((t, k) => {
          let html = md(t);
          if (est === "riscado") { const m = t.match(/^Eu não era (.*)$/); if (m) html = `Eu <span class="nao">não</span> era <span class="riscar">${md(m[1])}</span>`; }
          if (est === "pergunta") html = `${SVG.mao}<span>${html}</span>`;
          return `<p class="item" data-passo="${k + 1}" data-a="${anim}"${fx}>${html}</p>`;
        }).join("");
      }
      const fecho = s.fecho ? `<p class="fecho" data-passo="${s.itens.length + 1}" data-a="palavras">${md(s.fecho)}</p>` : "";
      return `<div class="passos estilo-${est}">${s.intro ? `<p class="intro" data-a="palavras">${md(s.intro)}</p>` : ""}${itens}${fecho}</div>`;
    },

    intervalo: s => {
      const cores = ["#0E8C8C", "#3A2F7A", "#A8432D", "#A8132A"];
      return `<div class="centro esq" style="gap:42px">
        <div class="intervalo-topo" data-a="esq">${SVG.cronometro}<div><p class="intervalo-sub">Momento interativo</p><p class="intervalo-titulo">Intervalo</p></div></div>
        <div class="cartoes4">${s.cartoes.map((c, k) => `<div class="cartao4" style="background:${cores[k]}" data-a="pop" data-g="160"><h3>${esc(c[0])}</h3><p>${md(c[1])}</p></div>`).join("")}</div></div>`;
    },

    nocaute: s => `<div class="nocaute">
      <p class="filme-rotulo" data-a="sobe">${SVG.play}${esc(s.rotulo)}</p>
      <h2 class="grito" data-a="impacto" data-fx="tremer">${md(s.grito)}</h2>
      <div class="alvos">${s.frases.map(f => `<p class="alvo" data-a="pop">${esc(f)}</p>`).join("")}</div></div>
      <div class="luva-soco">${SVG.luva}</div>
      ${s.frases.map((f, k) => `<i data-passo="${k + 1}" data-acao="soco" data-alvo="${k}"></i>`).join("")}`,

    aviso: s => `<div class="centro"><div class="aviso-grande" data-a="pop">
      <span class="icone">${SVG.alerta}</span><p class="rot">${esc(s.rotulo)}</p><p data-a="palavras">${md(s.texto)}</p></div></div>`,

    emocoes: s => {
      const pil = ([n, bg, fg]) => `<button class="pilula clicavel${s.escolhidas.includes(n) ? " escolhida" : ""}" style="background:${bg};color:${fg || "#fff"}" data-a="pop" data-g="90">${n}</button>`;
      return `<div class="emocoes">
        <p class="rotulo so-esq" data-a="sobe">${esc(s.rotulo)}</p>
        <h2 class="titulo-grande" style="font-size:100px" data-a="letras">${md(s.titulo)}</h2>
        <p class="fileira-rot" data-a="sobe">No primeiro filme:</p><div class="fileira">${s.filme1.map(pil).join("")}</div>
        <p class="fileira-rot" data-a="sobe">No segundo, aparecem novas emoções:</p><div class="fileira">${s.filme2.map(pil).join("")}</div></div>`;
    },

    emocao: s => `<div class="centro esq" style="gap:26px">
      <p class="rotulo so-esq" style="color:#FFE6C2;--acc:#FFE6C2" data-a="sobe">Divertida-Mente</p>
      <h2 class="emocao-nome" data-a="letras">${esc(s.nome)}</h2>
      <p class="emocao-sub" data-a="palavras">${esc(s.sub)}</p>
      <div style="display:flex;gap:60px;align-items:center;margin-top:20px;width:100%">
        <p style="flex:1;font-size:46px;line-height:1.45;color:#FFF4EA" data-a="palavras">${md(s.texto)}</p>
        ${s.cartao ? `<div class="emocao-cartao" style="flex:1" data-a="pop"><span class="rot">${esc(s.cartaoRotulo)}</span><p>${md(s.cartao)}</p></div>` : ""}
      </div></div>`,

    filme: s => {
      let n = 0;
      const frase = md(s.frase).replace(/class="pincel( par)?"/g, () => `class="pincel ${n++ ? "tristeza-cor" : "alegria"}"`);
      return `<div class="centro esq">
        <p class="filme-rotulo" data-a="sobe">${SVG.play}${esc(s.rotulo)}</p>
        <p class="texto-italico" data-a="palavras">${md(s.texto)}</p>
        <h2 class="frase-grande" data-a="letras">${frase}</h2></div>`;
    },

    trio: s => `<div class="trio">${s.linhas.map((l, k) => `<p data-passo="${k + 1}" data-a="jab" data-fx="soco">${md(l)}</p>`).join("")}</div>`,

    mar: s => `<div class="centro esq">
      <p class="texto-medio" style="text-align:left;color:var(--tx)" data-a="palavras">${md(s.texto)}</p>
      <h2 class="frase-grande" data-a="letras">${md(s.frase)}</h2></div>${SVG.barco}`,

    lutador: s => `<div class="centro esq" style="gap:36px">
      <p class="texto-medio" style="text-align:left;max-width:1550px" data-a="palavras">${md(s.texto)}</p>
      <h2 class="frase-grande" style="font-size:88px" data-a="letras">${md(s.frase)}</h2>
      <p class="texto-medio" style="text-align:left;font-weight:800;color:var(--tx);max-width:1550px" data-a="palavras">${md(s.fecho)}</p></div>`,

    diploma: s => `<div class="centro" style="gap:70px">
      <p class="texto-medio" style="font-family:var(--f-mao);font-size:60px;line-height:1.3;color:var(--tx);max-width:1450px" data-a="leitura">${md(s.texto)}</p>
      <div class="carimbo" data-a="carimbo" data-fx="explosao">${esc(s.frase)}</div></div>`,

    foto: s => `<div class="polaroid" data-a="foto"><span class="fita"></span><img src="${FOT.retrato}" alt="Jennifer Mayara Martins sorrindo"><span class="legenda">eu, hoje</span></div>
      <div class="col-dir" style="left:880px;width:900px;gap:46px">
        <p style="font-size:50px" data-a="palavras">${md(s.texto)}</p>
        <h2 class="frase-grande" style="font-size:90px" data-a="letras">${md(s.frase)}</h2>${SVG.coracaoTraco}</div>`,

    viradas: s => `<div class="centro esq" style="gap:34px">
      <p class="rotulo so-esq" data-a="sobe">Do frio para o quente</p>
      <div class="viradas">${s.pares.map(p => `<div class="cartao-vira" data-a="esq"><div class="face frente">${esc(p[0])}</div><div class="face verso">${esc(p[1])}</div></div>`).join("")}</div></div>
      ${s.pares.map((p, k) => `<i data-passo="${k + 1}" data-acao="virar" data-alvo="${k}"></i>`).join("")}`,

    tijolos: s => {
      const pos = [[20, 290], [310, 290], [600, 290], [310, 166]];
      return `<div class="centro" style="gap:30px">
        <p class="texto-medio" style="color:var(--tx)" data-a="palavras">${md(s.texto)}</p>
        <div class="muro">${s.tijolos.map((t, k) => `<div class="tijolo" style="left:${pos[k][0]}px;top:${pos[k][1]}px;width:280px;font-size:48px;letter-spacing:3px" data-passo="${k + 1}" data-a="cai" data-fx="baque">${esc(t)}</div>`).join("")}
        <div style="position:absolute;left:390px;top:20px;width:120px" data-passo="${s.tijolos.length + 1}" data-a="pop" data-fx="explosao">${SVG.coracaoCheio}</div></div></div>`;
    },

    levante: s => `<div class="centro" style="gap:40px">
      <p class="texto-medio" style="font-family:var(--f-mao);font-size:54px;line-height:1.3;color:var(--tx);max-width:1500px" data-a="leitura">${md(s.texto)}</p>
      <div class="levante-palavras">${s.palavras.map(p => `<span data-a="impacto" data-fx="soco">${esc(p)}</span>`).join("")}</div>
      <p class="destaque-frase" style="font-size:76px" data-a="palavras">${md(s.fecho)}</p></div>`,

    final: s => `<svg class="coracao-corda" viewBox="0 0 1500 1000" data-a="corda" aria-hidden="true">
        <path class="traco" d="${CORACAO_GRANDE}" fill="none" stroke="#C8202F" stroke-width="22" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="torcao" d="${CORACAO_GRANDE}" fill="none" stroke="rgba(255,190,190,.55)" stroke-width="6" stroke-dasharray="9 16" stroke-linecap="round"/></svg>
      <div class="final-texto">
        <h1 data-a="letras">${md("“Eu poderia ter me tornado amarga,")}<br>${md("*mas escolhi amar.*”")}</h1>
        <p class="nome" data-a="sobe">${EV.palestrante} · ${EV.projeto}</p></div>
      <i data-passo="1" data-acao="confete"></i>`,

    obrigada: s => `<div class="espera">
      <img class="obrigada-logo" src="${FOT.logo}" alt="${EV.projeto}" data-a="gira">
      <p class="obrigada-titulo" data-a="impacto" data-fx="explosao">Obrigada!</p>
      <p class="nome" style="font-family:var(--f-mao);font-size:48px" data-a="sobe">${EV.palestrante}</p>
      <p class="aguarde" data-a="sobe">${EV.projeto}</p></div>`
  };

  /* ---------------- dividir texto em palavras e letras ---------------- */
  function dividir(el, letras) {
    (function andar(no) {
      Array.from(no.childNodes).forEach(n => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(p => {
            if (!p) return;
            if (/^\s+$/.test(p)) { frag.appendChild(document.createTextNode(" ")); return; }
            const w = document.createElement("span"); w.className = "w";
            if (letras) Array.from(p).forEach(ch => { const c = document.createElement("span"); c.className = "c"; c.textContent = ch; w.appendChild(c); });
            else w.textContent = p;
            frag.appendChild(w);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1 && n.tagName !== "svg" && n.tagName !== "BR") andar(n);
      });
    })(el);
  }

  /* ---------------- montar todos os slides ---------------- */
  const slides = S.map((s, i) => {
    const el = document.createElement("section");
    const tema = window.Fundo.tema(s.clima);
    el.className = `slide ${tema} tipo-${s.tipo} clima-${s.clima}` + (s.tipo === "emocao" ? " " + s.nome.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase() : "");
    el.setAttribute("aria-hidden", "true");
    el.setAttribute("aria-label", `Slide ${i + 1}`);
    el.innerHTML = (M[s.tipo] || M.historia)(s);
    $$("[data-a]", el).forEach(x => {
      const a = x.dataset.a;
      if (a === "letras" || a === "impacto") dividir(x, true);
      else if (a === "palavras" || a === "leitura" || a === "lento") dividir(x, false);
    });
    $$("[data-passo]", el).forEach(x => x.classList.add("esperando"));
    caixa.appendChild(el);
    return el;
  });

  /* ---------------- som (desligado até apertar S) ---------------- */
  const Som = {
    ligado: false, ctx: null,
    prep() { if (!this.ctx) try { this.ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { } if (this.ctx && this.ctx.state === "suspended") this.ctx.resume(); return this.ligado && this.ctx; },
    gongo() {
      const c = this.prep(); if (!c) return; const t = c.currentTime;
      [[523, .5, 2.6], [1046, .32, 2.1], [1568, .18, 1.5], [2349, .1, .9], [3136, .05, .6]].forEach(([f, g, d]) => {
        const o = c.createOscillator(), v = c.createGain(); o.type = "sine"; o.frequency.value = f;
        v.gain.setValueAtTime(0, t); v.gain.linearRampToValueAtTime(g * .45, t + .004); v.gain.exponentialRampToValueAtTime(.0001, t + d);
        o.connect(v).connect(c.destination); o.start(t); o.stop(t + d);
      });
    },
    soco() {
      const c = this.prep(); if (!c) return; const t = c.currentTime;
      const buf = c.createBuffer(1, c.sampleRate * .16, c.sampleRate), d = buf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / d.length, 3);
      const n = c.createBufferSource(), f = c.createBiquadFilter(), g = c.createGain(); n.buffer = buf; f.type = "lowpass"; f.frequency.value = 900; g.gain.value = .55;
      n.connect(f).connect(g).connect(c.destination); n.start(t);
      const o = c.createOscillator(), v = c.createGain(); o.frequency.setValueAtTime(140, t); o.frequency.exponentialRampToValueAtTime(42, t + .2);
      v.gain.setValueAtTime(.6, t); v.gain.exponentialRampToValueAtTime(.001, t + .22); o.connect(v).connect(c.destination); o.start(t); o.stop(t + .24);
    },
    pop() {
      const c = this.prep(); if (!c) return; const t = c.currentTime;
      const o = c.createOscillator(), v = c.createGain(); o.type = "triangle"; o.frequency.setValueAtTime(520, t); o.frequency.exponentialRampToValueAtTime(980, t + .09);
      v.gain.setValueAtTime(.18, t); v.gain.exponentialRampToValueAtTime(.001, t + .14); o.connect(v).connect(c.destination); o.start(t); o.stop(t + .15);
    }
  };
  const botaoSom = $("#botao-som");
  function alternarSom() {
    Som.ligado = !Som.ligado; botaoSom.textContent = Som.ligado ? "Som: ligado" : "Som: desligado";
    botaoSom.setAttribute("aria-pressed", String(Som.ligado));
    try { localStorage.setItem("palestra-som", Som.ligado ? "1" : "0"); } catch (e) { }
    if (Som.ligado) Som.gongo();
  }
  try { if (localStorage.getItem("palestra-som") === "1") { Som.ligado = true; botaoSom.textContent = "Som: ligado"; botaoSom.setAttribute("aria-pressed", "true"); } } catch (e) { }
  botaoSom.addEventListener("click", e => { e.stopPropagation(); alternarSom(); botaoSom.blur(); });

  /* ---------------- animações ---------------- */
  let timers = [];
  const agendar = (fn, ms) => timers.push(setTimeout(fn, ms));
  const limparTimers = () => { timers.forEach(clearTimeout); timers = []; };
  const an = (el, kf, op) => el.animate(kf, Object.assign({ fill: "backwards", easing: EASE }, op));
  const escala = () => palco.getBoundingClientRect().width / 1920;
  function centro(el) {
    const p = palco.getBoundingClientRect(), r = el.getBoundingClientRect(), k = escala();
    return [(r.left + r.width / 2 - p.left) / k, (r.top + r.height / 2 - p.top) / k];
  }

  const ANIM = {
    letras(el, d) {
      const cs = $$(".c", el), st = Math.min(30, 1000 / Math.max(1, cs.length));
      cs.forEach((c, i) => an(c, [{ opacity: 0, translate: "0 .45em", rotate: "8deg", filter: "blur(6px)" }, { opacity: 1, translate: "0 0", rotate: "0deg", filter: "blur(0px)" }], { duration: 640, delay: d + i * st }));
      return cs.length * st + 420;
    },
    palavras(el, d, st0, dur) {
      const ws = $$(".w", el), st = Math.min(st0 || 34, (st0 ? 4200 : 1500) / Math.max(1, ws.length));
      ws.forEach((w, i) => an(w, [{ opacity: 0, translate: "0 18px", filter: "blur(5px)" }, { opacity: 1, translate: "0 0", filter: "blur(0px)" }], { duration: dur || 560, delay: d + i * st }));
      return ws.length * st + 320;
    },
    leitura(el, d) { return ANIM.palavras(el, d, 62, 760); },
    lento(el, d) {
      const ws = $$(".w", el);
      ws.forEach((w, i) => an(w, [{ opacity: 0, filter: "blur(10px)", translate: "0 10px" }, { opacity: 1, filter: "blur(0px)", translate: "0 0" }], { duration: 1300, delay: d + i * 230, easing: "ease-out" }));
      return ws.length * 230 + 700;
    },
    impacto(el, d) {
      const cs = $$(".c", el), st = Math.min(42, 900 / Math.max(1, cs.length));
      cs.forEach((c, i) => an(c, [{ opacity: 0, scale: "2.6", translate: "0 -20px", filter: "blur(10px)" }, { opacity: 1, scale: ".92", translate: "0 0", filter: "blur(0px)", offset: .72 }, { opacity: 1, scale: "1" }], { duration: 460, delay: d + i * st, easing: "cubic-bezier(.3,0,.3,1)" }));
      return cs.length * st + 380;
    },
    sobe(el, d) { an(el, [{ opacity: 0, translate: "0 40px" }, { opacity: 1, translate: "0 0" }], { duration: 760, delay: d }); return 200; },
    esq(el, d) { an(el, [{ opacity: 0, translate: "-110px 0" }, { opacity: 1, translate: "0 0" }], { duration: 760, delay: d, easing: MOLA }); return 200; },
    pop(el, d) { an(el, [{ opacity: 0, scale: ".5" }, { opacity: 1, scale: "1.07", offset: .7 }, { opacity: 1, scale: "1" }], { duration: 620, delay: d }); return 130; },
    balao(el, d) { el.style.transformOrigin = "20% 100%"; an(el, [{ opacity: 0, scale: ".2", rotate: "-12deg" }, { opacity: 1, scale: "1.08", rotate: "2deg", offset: .7 }, { opacity: 1, scale: "1", rotate: "0deg" }], { duration: 640, delay: d, easing: "ease-out" }); return 200; },
    jab(el, d) { an(el, [{ opacity: 0, translate: "-260px 0" }, { opacity: 1, translate: "22px 0", offset: .55 }, { opacity: 1, translate: "0 0" }], { duration: 480, delay: d, easing: "cubic-bezier(.2,.9,.3,1)" }); return 260; },
    pincel(el, d) { an(el, [{ clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)" }], { duration: 850, delay: d, easing: "cubic-bezier(.6,0,.2,1)" }); return 300; },
    desenha(el, d) {
      $$(".traco", el).forEach(p => { const L = p.getTotalLength(); p.style.strokeDasharray = L; an(p, [{ strokeDashoffset: L }, { strokeDashoffset: 0 }], { duration: 1300, delay: d, easing: "cubic-bezier(.5,0,.2,1)" }); });
      return 260;
    },
    corda(el, d) {
      const p = $(".traco", el), L = p.getTotalLength(); p.style.strokeDasharray = L;
      an(p, [{ strokeDashoffset: L }, { strokeDashoffset: 0 }], { duration: 2600, delay: d, easing: "cubic-bezier(.45,0,.25,1)" });
      an($(".torcao", el), [{ opacity: 0 }, { opacity: 1 }], { duration: 800, delay: d + 2300 });
      agendar(() => { window.Fundo.explosao(960, 520, ["#EF4A5A", "#F4ECDD", "#FFD27A"], 70); Som.gongo(); }, d + 2500);
      return 900;
    },
    gira(el, d) { an(el, [{ opacity: 0, rotate: "-200deg", scale: ".3" }, { opacity: 1, rotate: "0deg", scale: "1" }], { duration: 1200, delay: d, easing: MOLA }); return 260; },
    balanco(el, d) { an(el, [{ opacity: 0, translate: "0 -300px" }, { opacity: 1, translate: "0 0" }], { duration: 1300, delay: d, easing: MOLA }); return 0; },
    cai(el, d) { an(el, [{ opacity: 0, translate: "0 -720px", rotate: "-9deg" }, { opacity: 1, translate: "0 0", rotate: "0deg", offset: .72 }, { translate: "0 -22px", offset: .86 }, { opacity: 1, translate: "0 0" }], { duration: 780, delay: d, easing: "ease-in" }); return 560; },
    carimbo(el, d) { an(el, [{ opacity: 0, scale: "3.2" }, { opacity: 1, scale: ".92", offset: .72 }, { opacity: 1, scale: "1" }], { duration: 520, delay: d, easing: "cubic-bezier(.5,0,.4,1)" }); return 420; },
    foto(el, d) { an(el, [{ opacity: 0, translate: "0 -280px", rotate: "16deg" }, { opacity: 1, translate: "0 0", rotate: "-4deg" }], { duration: 1200, delay: d, easing: MOLA }); return 380; },
    "foto-capa"(el, d) { an(el, [{ opacity: 0, scale: ".9", filter: "blur(14px)" }, { opacity: 1, scale: "1", filter: "blur(0px)" }], { duration: 1500, delay: d }); return 350; },
    curativo(el, d) {
      const g = Number(el.dataset.rot || 0);
      an(el, [{ opacity: 0, scale: ".4" }, { opacity: 1, scale: "1" }], { duration: 520, delay: d, easing: MOLA });
      el.animate([{ translate: "0 0", rotate: g + "deg", opacity: 1 }, { translate: "-60px -40px", rotate: (g - 30) + "deg", opacity: 1, offset: .25 }, { translate: "120px 520px", rotate: (g + 90) + "deg", opacity: 0 }], { duration: 1800, delay: d + 3200, easing: "cubic-bezier(.5,0,.8,.5)", fill: "forwards" });
      return 160;
    }
  };

  function efeitos(el) {
    const fx = (el.dataset.fx || "").split(" ");
    if (!fx[0] || calmo) return;
    const [x, y] = centro(el);
    if (fx.includes("tremer") || fx.includes("soco") || fx.includes("explosao") || fx.includes("baque")) {
      palco.classList.remove("tremendo"); void palco.offsetWidth; palco.classList.add("tremendo");
      window.Fundo.tremerCordas(); Som.soco();
    }
    if (fx.includes("tremer-leve")) window.Fundo.tremerCordas();
    if (fx.includes("soco")) window.Fundo.explosao(x, y, ["#FFD27A", "#EF4A5A", "#F4ECDD"], 26);
    if (fx.includes("baque")) window.Fundo.explosao(x, y + 50, ["#C9573A", "#E9C2A6", "#F4ECDD"], 20);
    if (fx.includes("explosao")) window.Fundo.explosao(x, y, null, 110);
    if (fx.includes("confete")) { window.Fundo.confete(); Som.gongo(); }
  }

  function executar(el, t) {
    const f = ANIM[el.dataset.a] || ANIM.sobe;
    let dur;
    if (calmo) { an(el, [{ opacity: 0 }, { opacity: 1 }], { duration: 400, delay: t }); dur = 120; }
    else dur = f(el, t);
    agendar(() => { el.classList.add("pintado"); if (el.closest(".estilo-riscado")) el.classList.add("riscado-on"); efeitos(el); }, t + Math.max(80, dur * .85));
    return dur;
  }

  function construir(sl, base) {
    let t = base;
    $$("[data-a]", sl).filter(e => !e.closest("[data-passo]")).forEach(el => {
      t += Number(el.dataset.espera || 0);
      const d = executar(el, t);
      t += el.dataset.g ? Number(el.dataset.g) : d;
    });
  }

  const ACOES = {
    soco(sl, marca, rapido) {
      const alvo = $$(".alvo", sl)[Number(marca.dataset.alvo)];
      if (!alvo) return;
      if (rapido || calmo) { alvo.style.opacity = "0"; return; }
      const luva = $(".luva-soco", sl), [x, y] = centro(alvo);
      const ax = x - alvo.offsetWidth / 2 - 200;
      luva.style.top = (y - 75) + "px";
      luva.animate([{ left: "-260px", rotate: "-6deg" }, { left: ax + "px", rotate: "0deg", offset: .45 }, { left: ax + "px", offset: .6 }, { left: "-260px", rotate: "-6deg" }], { duration: 700, easing: "cubic-bezier(.3,.9,.3,1)" });
      agendar(() => {
        alvo.classList.add("nocauteado"); Som.soco(); window.Fundo.explosao(x - alvo.offsetWidth / 2 + 20, y, ["#FFD27A", "#EF4A5A", "#F4ECDD"], 40);
        palco.classList.remove("tremendo"); void palco.offsetWidth; palco.classList.add("tremendo");
        alvo.animate([{ translate: "0 0", rotate: "0deg", opacity: 1 }, { translate: "30px -10px", rotate: "4deg", opacity: 1, offset: .2 }, { translate: "520px -620px", rotate: "38deg", opacity: 0 }], { duration: 900, easing: "cubic-bezier(.4,0,.8,.4)", fill: "forwards" });
      }, 300);
    },
    virar(sl, marca, rapido) {
      const c = $$(".cartao-vira", sl)[Number(marca.dataset.alvo)];
      if (!c) return; c.classList.add("virado");
      if (!rapido && !calmo) { Som.pop(); agendar(() => { const [x, y] = centro(c); window.Fundo.explosao(x + 500, y, ["#FFD27A", "#EF4A5A", "#F4ECDD"], 30); }, 450); }
    },
    confete(sl, marca, rapido) { if (!rapido) { window.Fundo.confete(); Som.gongo(); } }
  };

  function revelarPasso(sl, k, rapido) {
    $$(`[data-passo="${k}"]`, sl).forEach(el => {
      el.classList.remove("esperando");
      if (el.dataset.acao) ACOES[el.dataset.acao](sl, el, rapido);
      if (rapido) { el.classList.add("pintado", "riscado-on"); $$("[data-a]", el).forEach(x => x.classList.add("pintado")); return; }
      let t = 0;
      [el].concat($$("[data-a]", el)).forEach(x => { if (!x.dataset.a) return; const d = executar(x, t); t += x.dataset.g ? Number(x.dataset.g) : d; });
    });
    if (!rapido) $$(".estilo-frio .item", sl).forEach(it => { if (Number(it.dataset.passo) < k) it.classList.add("apagando"); });
  }

  function zerar(sl) {
    sl.getAnimations({ subtree: true }).forEach(a => a.cancel());
    $$(".pintado, .riscado-on, .virado, .apagando, .nocauteado", sl).forEach(x => x.classList.remove("pintado", "riscado-on", "virado", "apagando", "nocauteado"));
    $$("[data-passo]", sl).forEach(x => x.classList.add("esperando"));
    $$(".alvo", sl).forEach(a => a.style.opacity = "");
  }

  /* ---------------- cartão de round com gongo ---------------- */
  function cartaoRound(r) {
    if (calmo) return 0;
    $(".rc-round", cortina).textContent = r === "INT" ? "INTERVALO" : "ROUND";
    $(".rc-num", cortina).textContent = r === "INT" ? "" : pad(r);
    $(".rc-titulo", cortina).textContent = r === "INT" ? "Momento interativo" : limpo(RD[r]);
    $(".rc-faixa", cortina).style.backgroundImage = (r === "INT" || r % 2 === 0) ? faixaTurquesa : faixaVermelha;
    cortina.classList.add("ativo");
    $(".rc-faixa", cortina).animate([{ clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", offset: .26 }, { clipPath: "inset(0 0% 0 0)", offset: .74 }, { clipPath: "inset(0 0 0 100%)" }], { duration: 1550, easing: "cubic-bezier(.6,0,.3,1)" });
    $(".rc-conteudo", cortina).animate([{ opacity: 0, scale: "1.7", filter: "blur(10px)" }, { opacity: 1, scale: "1", filter: "blur(0px)", offset: .24 }, { opacity: 1, scale: "1", translate: "0 0", offset: .72 }, { opacity: 0, translate: "280px 0", filter: "blur(6px)" }], { duration: 1550, easing: "ease-out" });
    $(".rc-sino", cortina).animate([{ rotate: "0deg" }, { rotate: "-26deg" }, { rotate: "24deg" }, { rotate: "-16deg" }, { rotate: "10deg" }, { rotate: "0deg" }], { duration: 1000, delay: 240 });
    agendar(() => { Som.gongo(); palco.classList.remove("tremendo"); void palco.offsetWidth; palco.classList.add("tremendo"); }, 300);
    agendar(() => Som.gongo(), 560);
    agendar(() => cortina.classList.remove("ativo"), 1560);
    return 1150;
  }

  /* ---------------- navegação ---------------- */
  let atual = -1, passo = 0, inicioRelogio = 0;
  const totalPassos = i => Math.max(0, ...$$("[data-passo]", slides[i]).map(e => Number(e.dataset.passo)));

  function ir(n, modo) {
    n = Math.max(0, Math.min(S.length - 1, n));
    if (n === atual) return;
    limparTimers();
    cortina.classList.remove("ativo");
    const sAnt = atual >= 0 ? S[atual] : null;
    if (atual >= 0) {
      const velho = slides[atual];
      velho.classList.remove("ativo"); velho.classList.add("saindo"); velho.setAttribute("aria-hidden", "true");
      const a = velho.animate([{ opacity: 1 }, { opacity: 0, translate: "0 -24px", filter: "blur(4px)" }], { duration: 360, easing: "ease-in", fill: "forwards" });
      a.onfinish = () => { if (!velho.classList.contains("ativo")) { velho.classList.remove("saindo"); zerar(velho); } };
    }
    atual = n;
    const s = S[n], sl = slides[n];
    sl.getAnimations({ subtree: true }).forEach(a => a.cancel());
    zerar(sl);
    sl.classList.remove("saindo"); sl.classList.add("ativo"); sl.setAttribute("aria-hidden", "false");
    window.Fundo.limpar();
    window.Fundo.clima(s.clima);
    atualizarHud();
    if (!inicioRelogio && n > 0) inicioRelogio = Date.now();
    if (modo === "tras") {
      passo = totalPassos(n);
      for (let k = 1; k <= passo; k++) revelarPasso(sl, k, true);
      $$("[data-a]", sl).forEach(x => x.classList.add("pintado"));
      an(sl, [{ opacity: 0 }, { opacity: 1 }], { duration: 420 });
    } else {
      passo = 0;
      let base = 260;
      if (s.round != null && modo === "frente" && (!sAnt || sAnt.round !== s.round)) base = cartaoRound(s.round) || 260;
      construir(sl, base);
    }
    try { history.replaceState(null, "", "#" + (n + 1)); } catch (e) { }
    atualizarNotas(); marcarGrade();
  }
  function avancar() {
    if (passo < totalPassos(atual)) { passo++; revelarPasso(slides[atual], passo, false); atualizarNotas(); }
    else ir(atual + 1, "frente");
  }
  const voltar = () => ir(atual - 1, "tras");

  /* ---------------- HUD, notas, grade ---------------- */
  const hudRound = $("#hud-round"), hudCorda = $("#hud-corda");
  function atualizarHud() {
    const s = S[atual];
    hud.classList.toggle("oculto", ["espera", "capa", "final", "obrigada"].includes(s.tipo));
    hud.style.setProperty("--hud-tx", window.Fundo.tema(s.clima) === "claro" ? "#13262B" : "#F4ECDD");
    hudRound.innerHTML = s.round != null ? `${SVG.sino}<span>${rotRound(s.round)}</span><em>${esc(limpo(RD[s.round]))}</em>` : "";
    hudCorda.style.width = (atual / (S.length - 1) * 100) + "%";
  }
  function resumo(s) {
    if (!s) return "fim";
    const t = s.titulo || s.citacao || s.frase || (s.textos && s.textos[0]) || s.intro || (s.itens && s.itens[0]) || (s.linhas && s.linhas.join(" ")) || s.texto || s.grito || s.nome || s.tipo;
    const l = limpo(t); return l.length > 95 ? l.slice(0, 92) + "…" : l;
  }
  const notas = $("#notas");
  function atualizarNotas() {
    const s = S[atual], tot = totalPassos(atual);
    notas.innerHTML = `<div class="topo"><span>${atual + 1} / ${S.length}</span><span>${s.round != null ? rotRound(s.round) : ""}</span>${tot ? `<span>Cliques neste slide: ${passo} de ${tot}</span>` : ""}<span id="relogio"></span></div>
      <div>${esc(s.notas || "Sem notas para este slide.")}</div><div class="proximo">Próximo: ${esc(resumo(S[atual + 1]))}</div>`;
    relogio();
  }
  function relogio() {
    const r = $("#relogio"); if (!r) return;
    if (!inicioRelogio) { r.textContent = "Tempo: 00:00"; return; }
    const sgs = Math.floor((Date.now() - inicioRelogio) / 1000);
    r.textContent = `Tempo: ${pad(Math.floor(sgs / 60))}:${pad(sgs % 60)}`;
  }
  setInterval(relogio, 1000);

  const grade = $("#grade");
  (function montarGrade() {
    let html = "", grupo = null, lista = "";
    const fechar = () => { if (grupo !== null) html += `<h2>${grupo}</h2><div class="lista">${lista}</div>`; lista = ""; };
    S.forEach((s, i) => {
      const g = s.round == null ? (i < 3 ? "Abertura" : "Encerramento") : (s.round === "INT" ? "Intervalo · Luca, Divertida-Mente e o boxe" : `Round ${pad(s.round)} · ${limpo(RD[s.round])}`);
      if (g !== grupo) { fechar(); grupo = g; }
      lista += `<button type="button" data-ir="${i}"><b>${i + 1}</b>${esc(resumo(s))}</button>`;
    });
    fechar();
    grade.innerHTML = `<h2 style="margin-top:0">Todos os slides · clique para ir · Esc fecha</h2>${html}`;
    grade.addEventListener("click", e => { const b = e.target.closest("[data-ir]"); if (!b) return; grade.classList.remove("aberto"); ir(Number(b.dataset.ir), "frente"); });
  })();
  function marcarGrade() { $$("#grade [data-ir]").forEach(b => b.classList.toggle("atual", Number(b.dataset.ir) === atual)); }

  /* ---------------- controles ---------------- */
  const dica = $("#dica"), pausa = $("#pausa");
  let timerDica = setTimeout(() => dica.classList.add("some"), 8000);
  function mostrarDica() { dica.classList.remove("some"); clearTimeout(timerDica); timerDica = setTimeout(() => dica.classList.add("some"), 6000); }
  function telaCheia() { try { if (document.fullscreenElement) document.exitFullscreen(); else document.documentElement.requestFullscreen().catch(() => { }); } catch (e) { } }

  addEventListener("keydown", e => {
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    const k = e.key;
    if (grade.classList.contains("aberto")) { if (k === "Escape" || k === "g" || k === "G") grade.classList.remove("aberto"); return; }
    if (["ArrowRight", "PageDown", " ", "Enter", "ArrowDown"].includes(k)) { e.preventDefault(); if (pausa.classList.contains("ativo")) pausa.classList.remove("ativo"); else avancar(); }
    else if (["ArrowLeft", "PageUp", "Backspace", "ArrowUp"].includes(k)) { e.preventDefault(); voltar(); }
    else if (k === "Home") ir(0, "frente");
    else if (k === "End") ir(S.length - 1, "frente");
    else if (k === "n" || k === "N") notas.classList.toggle("aberto");
    else if (k === "g" || k === "G") { grade.classList.add("aberto"); const b = $("#grade .atual"); if (b) b.focus(); }
    else if (k === "f" || k === "F") telaCheia();
    else if (k === "b" || k === "B" || k === ".") pausa.classList.toggle("ativo");
    else if (k === "s" || k === "S") alternarSom();
    else if (k === "h" || k === "H" || k === "?") mostrarDica();
    else if (k === "Escape") { notas.classList.remove("aberto"); pausa.classList.remove("ativo"); }
  });

  palco.addEventListener("click", e => {
    const pil = e.target.closest(".pilula");
    if (pil) { pil.classList.remove("pulo"); void pil.offsetWidth; pil.classList.add("pulo"); Som.pop(); const [x, y] = centro(pil); window.Fundo.explosao(x, y, [pil.style.backgroundColor, "#F4ECDD"], 24); return; }
    if (pausa.classList.contains("ativo")) { pausa.classList.remove("ativo"); return; }
    if (e.clientX < innerWidth * .3) voltar(); else avancar();
  });
  let toqueX = null;
  addEventListener("touchstart", e => { toqueX = e.touches[0].clientX; }, { passive: true });
  addEventListener("touchend", e => {
    if (toqueX === null) return; const dx = e.changedTouches[0].clientX - toqueX; toqueX = null;
    if (Math.abs(dx) > 50) { dx < 0 ? avancar() : voltar(); }
  });

  let timerCursor;
  addEventListener("mousemove", () => { document.body.classList.remove("cursor-oculto"); clearTimeout(timerCursor); timerCursor = setTimeout(() => document.body.classList.add("cursor-oculto"), 2500); });

  function encaixar() { palco.style.setProperty("--k", Math.min(innerWidth / 1920, innerHeight / 1080)); }
  addEventListener("resize", encaixar); encaixar();

  /* ---------------- começar ---------------- */
  const inicial = Math.max(0, Math.min(S.length - 1, (parseInt(location.hash.slice(1), 10) || 1) - 1));
  const comecar = () => ir(inicial, "frente");
  if (document.fonts && document.fonts.ready) Promise.race([document.fonts.ready, new Promise(r => setTimeout(r, 1800))]).then(comecar);
  else comecar();
  window.Apresentacao = { ir: n => ir(n, "frente"), irRapido: n => ir(n, "tras"), avancar, voltar, total: S.length };
})();
