/* =====================================================================
   FUNDOS ANIMADOS
   Um único canvas atrás dos slides. Cada "clima" tem céu, luz,
   cordas do ringue, partículas e efeitos próprios. Na troca de clima
   o fundo se mistura devagar, sem corte.

   Climas: noite, chuva, tempestade, luz, amanhecer, papel, ringue,
           mar, emocoes, ansiedade, tristeza, vergonha, sol, ouro, final
   ===================================================================== */
(function () {
  "use strict";
  const W = 1920, H = 1080;
  const calmo = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const R = Math.random;
  const TAU = Math.PI * 2;

  const CLIMAS = {
    noite:      { tema: "escuro", ceu: ["#123139", "#0A1A1E", "#050C0E"], luz: { x: .5, forca: .5, cor: "255,236,205" }, cordas: .42,
                  part: [["poeira", 90, ["#F4ECDD", "#9FDDE2"]]], borda: "#050C0E" },
    chuva:      { tema: "escuro", ceu: ["#14293C", "#0C1825", "#060D14"], luz: { x: .32, forca: .22, cor: "190,220,255" }, cordas: .22,
                  part: [["chuva", 150, ["#8DB9DA", "#CFE6F5"]], ["poeira", 25, ["#CFE6F5"]]], borda: "#060D14" },
    tempestade: { tema: "escuro", ceu: ["#2A2458", "#17153A", "#0B0A22"], nevoa: ["#5B3FA8", "#1E9AA6", "#7A2D7E"], cordas: .18,
                  part: [["poeira", 50, ["#C9BFF2", "#9FDDE2"]]], borda: "#0B0A22" },
    luz:        { tema: "escuro", ceu: ["#3A2A5E", "#1C1740", "#0E0B24"], luz: { x: .5, forca: .8, cor: "255,200,120" }, nevoa: ["#7A4A9E", "#F2A93B"],
                  part: [["brasas", 110, ["#F2B134", "#FFD27A", "#FF9F6B"]]], borda: "#0E0B24" },
    amanhecer:  { tema: "escuro", ceu: ["#231A38", "#6B3657", "#D9785F"], sol: { x: .5, y: 1.08, r: .62, cor: "255,196,150" },
                  part: [["subindo", 70, ["#FFE0C2", "#FFC2A8", "#FFF0D0"]]], borda: "#231A38" },
    papel:      { tema: "claro", ceu: ["#FBF5EA", "#F5EBDC", "#EFE2CF"], aquarela: ["#1E9AA6", "#D2283A", "#F2A93B", "#4CC6CF"],
                  part: [["coracoes", 16, ["#D2283A", "#1E9AA6", "#E8806A"]], ["poeira", 26, ["#C9A27A"]]], borda: "#EFE2CF" },
    ringue:     { tema: "escuro", ceu: ["#103038", "#0A1C20", "#050D0F"], luz: { x: .5, forca: .78, cor: "255,240,215" }, cordas: .75, poste: true,
                  part: [["faiscas", 60, ["#EF4A5A", "#F2A93B", "#FFE3B0"]], ["poeira", 60, ["#F4ECDD"]]], borda: "#050D0F" },
    mar:        { tema: "escuro", ceu: ["#0A4A58", "#0E7880", "#0B5F69"], ondas: ["rgba(20,166,160,.55)", "rgba(11,120,128,.75)", "rgba(6,80,92,.95)"],
                  sol: { x: .78, y: .18, r: .28, cor: "255,230,160" }, part: [["bolhas", 42, ["#E6FFFB", "#BDF2EC"]]], borda: "#08414D" },
    emocoes:    { tema: "escuro", ceu: ["#2A1F5C", "#1B1846", "#110E30"], orbes: ["#F6C445", "#3D7CC9", "#E0402F", "#8566C9", "#3F8F58", "#D9621A", "#C9467E"],
                  part: [["poeira", 40, ["#FFFFFF"]]], borda: "#110E30" },
    ansiedade:  { tema: "escuro", ceu: ["#C55B1C", "#A84414", "#7C2C0B"], part: [["risco", 80, ["#FFE3B0", "#FFFFFF", "#FFC07A"]]], borda: "#7C2C0B" },
    tristeza:   { tema: "escuro", ceu: ["#2C5FA8", "#22508F", "#173866"], part: [["gotas", 60, ["#BFD8FF", "#E6F0FF"]], ["subindo", 18, ["#FFE0A8"]]], borda: "#173866" },
    vergonha:   { tema: "escuro", ceu: ["#B23E74", "#953064", "#6A1D45"], nevoa: ["#E06A9E", "#FFB0CC", "#7A2050"],
                  part: [["coracoes", 12, ["#FFE0EC", "#FFC2DA"]]], borda: "#6A1D45" },
    sol:        { tema: "escuro", ceu: ["#16304F", "#3B5F8C", "#D98A66", "#F4B65E"], sol: { x: .8, y: .8, r: .34, cor: "255,214,140" }, montanhas: true,
                  ondas: ["rgba(255,190,120,.18)", "rgba(40,80,110,.55)", "rgba(20,45,70,.9)"], part: [["poeira", 50, ["#FFF1D6"]]], borda: "#16304F" },
    ouro:       { tema: "escuro", ceu: ["#86101F", "#AE2A29", "#CF6A28"], raios: true, sol: { x: .5, y: .55, r: .42, cor: "255,205,140" },
                  part: [["brasas", 80, ["#FFF1C8", "#FFC24A", "#FFFFFF"]], ["confete", 26, ["#FFF6E0", "#13324A", "#1E9AA6", "#FFC24A"]]], borda: "#8E1024" },
    final:      { tema: "escuro", ceu: ["#2C2350", "#9B3C55", "#F09A50"], sol: { x: .5, y: .86, r: .55, cor: "255,205,140" }, montanhas: true,
                  part: [["coracoes", 34, ["#FFFFFF", "#FFD1D6", "#EF4A5A"]], ["brasas", 40, ["#FFE3B0"]]], borda: "#2C2350" }
  };

  /* ---------- partículas ---------- */
  function nova(tipo, cores, inicio) {
    const p = { tipo, c: cores[(R() * cores.length) | 0], x: R() * W, y: R() * H, a: .3 + R() * .6, t: R() * TAU, vx: 0, vy: 0, r: 2 };
    switch (tipo) {
      case "poeira": p.vx = (R() - .5) * .25; p.vy = (R() - .5) * .2 - .05; p.r = .8 + R() * 2.4; break;
      case "chuva": p.vy = 9 + R() * 7; p.vx = -1.6; p.l = 14 + R() * 26; p.a = .12 + R() * .35; if (!inicio) p.y = -40; break;
      case "brasas": p.vy = -(.8 + R() * 2.2); p.vx = (R() - .5) * .8; p.r = 1.4 + R() * 3; if (!inicio) p.y = H + 20; break;
      case "subindo": p.vy = -(.3 + R() * .9); p.vx = (R() - .5) * .4; p.r = 1.5 + R() * 3.5; if (!inicio) p.y = H + 20; break;
      case "faiscas": p.vy = -(1.5 + R() * 3); p.vx = (R() - .5) * 2.2; p.r = 1 + R() * 2; p.l = 6 + R() * 10; if (!inicio) p.y = H + 10; break;
      case "coracoes": p.vy = -(.25 + R() * .6); p.vx = (R() - .5) * .3; p.r = 9 + R() * 14; p.a = .18 + R() * .35; if (!inicio) p.y = H + 30; break;
      case "bolhas": p.vy = -(.5 + R() * 1.4); p.r = 3 + R() * 10; p.a = .25 + R() * .4; if (!inicio) p.y = H + 20; break;
      case "risco": p.vx = 7 + R() * 9; p.l = 40 + R() * 120; p.a = .1 + R() * .3; if (!inicio) p.x = -150; break;
      case "gotas": p.vy = 2 + R() * 2.5; p.r = 3 + R() * 4; p.a = .25 + R() * .4; if (!inicio) p.y = -20; break;
      case "confete": p.vy = 1.2 + R() * 2.2; p.vx = (R() - .5) * 1.2; p.w = 10 + R() * 12; p.h = 6 + R() * 8; p.vr = (R() - .5) * .14; if (!inicio) p.y = -30; break;
      case "nevoa": p.vx = .2 + R() * .5; p.vy = (R() - .5) * .15; p.r = 160 + R() * 260; p.a = .07 + R() * .1; break;
    }
    return p;
  }

  function coracao(ctx, x, y, s) {
    ctx.beginPath();
    ctx.moveTo(x, y + s * .35);
    ctx.bezierCurveTo(x, y, x - s * .5, y - s * .1, x - s * .5, y + s * .25);
    ctx.bezierCurveTo(x - s * .5, y + s * .6, x, y + s * .75, x, y + s);
    ctx.bezierCurveTo(x, y + s * .75, x + s * .5, y + s * .6, x + s * .5, y + s * .25);
    ctx.bezierCurveTo(x + s * .5, y - s * .1, x, y, x, y + s * .35);
    ctx.fill();
  }

  /* ---------- cena (um clima com seus elementos) ---------- */
  function criarCena(nome) {
    const d = CLIMAS[nome] || CLIMAS.noite;
    const cena = { nome, d, parts: [], blobs: [], orbes: [], montanhas: null, t: 0 };
    const fator = calmo ? .35 : 1;
    (d.part || []).forEach(([tipo, n, cores]) => { for (let i = 0; i < Math.round(n * fator); i++) cena.parts.push(nova(tipo, cores, true)); });
    if (d.nevoa) for (let i = 0; i < 9; i++) cena.blobs.push({ x: R() * W, y: R() * H, r: 260 + R() * 360, c: d.nevoa[i % d.nevoa.length], vx: (R() - .5) * .35, vy: (R() - .5) * .25 });
    if (d.aquarela) for (let i = 0; i < 7; i++) cena.blobs.push({ x: R() * W, y: R() * H, r: 240 + R() * 340, c: d.aquarela[i % d.aquarela.length], vx: (R() - .5) * .25, vy: (R() - .5) * .2, aq: true });
    if (d.orbes) d.orbes.forEach(c => cena.orbes.push({ x: R() * W, y: R() * H, r: 70 + R() * 120, c, vx: (R() - .5) * .6, vy: (R() - .5) * .5, f: R() * TAU }));
    if (d.montanhas) cena.montanhas = [0, 1, 2].map(k => {
      const pts = []; const base = H * (.72 + k * .07); const amp = 90 - k * 22;
      for (let x = -20; x <= W + 20; x += 40) pts.push([x, base - Math.abs(Math.sin(x * .0021 + k * 2.1)) * amp - Math.sin(x * .0067 + k) * amp * .35]);
      return pts;
    });
    return cena;
  }

  const cv = document.getElementById("fundo");
  const ctx = cv.getContext("2d");
  cv.width = W; cv.height = H;
  let atual = criarCena("noite"), anterior = null, mistura = 1, inicioMistura = 0;
  let tremorCordas = 0, extras = [], t0 = performance.now(), lento = 0;

  function corComAlfa(hex, a) {
    const n = parseInt(hex.slice(1), 16);
    return `rgba(${n >> 16},${(n >> 8) & 255},${n & 255},${a})`;
  }

  function desenharCeu(c, alfa) {
    const d = c.d; ctx.globalAlpha = alfa;
    const g = ctx.createLinearGradient(0, 0, 0, H);
    d.ceu.forEach((cor, i) => g.addColorStop(i / (d.ceu.length - 1), cor));
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    if (d.sol) {
      const s = d.sol, x = s.x * W, y = s.y * H, r = s.r * W;
      const gs = ctx.createRadialGradient(x, y, 0, x, y, r);
      gs.addColorStop(0, `rgba(${s.cor},.75)`); gs.addColorStop(.18, `rgba(${s.cor},.35)`); gs.addColorStop(1, `rgba(${s.cor},0)`);
      ctx.fillStyle = gs; ctx.fillRect(0, 0, W, H);
      if (d.montanhas || nomeMar(c)) { ctx.fillStyle = `rgba(${s.cor},.9)`; ctx.beginPath(); ctx.arc(x, y, 70, 0, TAU); ctx.fill(); }
    }
    if (d.raios) {
      ctx.save(); ctx.translate(W / 2, H / 2); ctx.rotate(c.t * .00006);
      for (let i = 0; i < 16; i++) { ctx.rotate(TAU / 16); ctx.fillStyle = "rgba(255,240,200,.05)"; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(1500, -120); ctx.lineTo(1500, 120); ctx.fill(); }
      ctx.restore();
    }
    if (c.montanhas) {
      const cores = ["rgba(74,56,104,.55)", "rgba(44,36,74,.75)", "rgba(24,22,44,.92)"];
      c.montanhas.forEach((pts, k) => { ctx.fillStyle = cores[k]; ctx.beginPath(); ctx.moveTo(-20, H); pts.forEach(p => ctx.lineTo(p[0], p[1])); ctx.lineTo(W + 20, H); ctx.fill(); });
    }
    ctx.globalAlpha = 1;
  }
  function nomeMar(c) { return c.nome === "mar"; }

  function desenharLuz(c, alfa) {
    const L = c.d.luz; if (!L) return;
    const pisca = .92 + Math.sin(c.t * .0021) * .05 + Math.sin(c.t * .013) * .02;
    const x = L.x * W, f = L.forca * pisca * alfa;
    const g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, `rgba(${L.cor},${.32 * f})`); g.addColorStop(.7, `rgba(${L.cor},${.07 * f})`); g.addColorStop(1, `rgba(${L.cor},0)`);
    ctx.fillStyle = g; ctx.beginPath(); ctx.moveTo(x - 120, -10); ctx.lineTo(x + 120, -10); ctx.lineTo(x + 760, H); ctx.lineTo(x - 760, H); ctx.closePath(); ctx.fill();
    const r = ctx.createRadialGradient(x, -40, 0, x, -40, 520);
    r.addColorStop(0, `rgba(${L.cor},${.45 * f})`); r.addColorStop(1, `rgba(${L.cor},0)`);
    ctx.fillStyle = r; ctx.fillRect(0, 0, W, 600);
  }

  function desenharCordas(c, alfa) {
    const forca = (c.d.cordas || 0) * alfa; if (!forca) return;
    const vib = tremorCordas;
    const linhas = [[26, 58], [92, 124], [158, 190]];
    linhas.forEach(([y1, y2], i) => {
      const onda = Math.sin(c.t * .0016 + i) * 4 + Math.sin(c.t * .03 + i) * vib * 14;
      const meio = (y1 + y2) / 2 + 16 + onda;
      ctx.globalAlpha = forca;
      ctx.lineCap = "round";
      ctx.strokeStyle = "rgba(0,0,0,.35)"; ctx.lineWidth = 20;
      ctx.beginPath(); ctx.moveTo(-40, y1 + 8); ctx.quadraticCurveTo(W / 2, meio + 8, W + 40, y2 + 8); ctx.stroke();
      const g = ctx.createLinearGradient(0, meio - 9, 0, meio + 9);
      g.addColorStop(0, "#E8394A"); g.addColorStop(.5, "#B71C2C"); g.addColorStop(1, "#7A0E1A");
      ctx.strokeStyle = g; ctx.lineWidth = 15;
      ctx.beginPath(); ctx.moveTo(-40, y1); ctx.quadraticCurveTo(W / 2, meio, W + 40, y2); ctx.stroke();
      ctx.setLineDash([7, 13]); ctx.lineDashOffset = -c.t * .004; ctx.strokeStyle = "rgba(255,190,190,.45)"; ctx.lineWidth = 4;
      ctx.beginPath(); ctx.moveTo(-40, y1 - 3); ctx.quadraticCurveTo(W / 2, meio - 3, W + 40, y2 - 3); ctx.stroke();
      ctx.setLineDash([]);
    });
    if (c.d.poste) {
      ctx.globalAlpha = forca;
      const g = ctx.createLinearGradient(1848, 0, 1920, 0); g.addColorStop(0, "#0E3A42"); g.addColorStop(.5, "#1E9AA6"); g.addColorStop(1, "#0B2B31");
      ctx.fillStyle = g; ctx.fillRect(1858, -20, 56, 300);
      [60, 126, 192].forEach(y => { ctx.fillStyle = "#C8202F"; ctx.beginPath(); if (ctx.roundRect) ctx.roundRect(1846, y - 14, 80, 46, 12); else ctx.rect(1846, y - 14, 80, 46); ctx.fill(); });
    }
    ctx.globalAlpha = 1;
  }

  function desenharBlobs(c, alfa) {
    c.blobs.forEach(b => {
      b.x += b.vx; b.y += b.vy;
      if (b.x < -300 || b.x > W + 300) b.vx *= -1; if (b.y < -300 || b.y > H + 300) b.vy *= -1;
      const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
      const a = b.aq ? .13 : .3;
      g.addColorStop(0, corComAlfa(b.c, a * alfa)); g.addColorStop(1, corComAlfa(b.c, 0));
      ctx.fillStyle = g; ctx.fillRect(b.x - b.r, b.y - b.r, b.r * 2, b.r * 2);
    });
    if (c.orbes.length) {
      ctx.globalCompositeOperation = "lighter";
      c.orbes.forEach(o => {
        o.x += o.vx; o.y += o.vy; o.f += .01;
        if (o.x < 0 || o.x > W) o.vx *= -1; if (o.y < 0 || o.y > H) o.vy *= -1;
        const r = o.r * (1 + Math.sin(o.f) * .12);
        const g = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, r);
        g.addColorStop(0, corComAlfa(o.c, .55 * alfa)); g.addColorStop(.45, corComAlfa(o.c, .18 * alfa)); g.addColorStop(1, corComAlfa(o.c, 0));
        ctx.fillStyle = g; ctx.fillRect(o.x - r, o.y - r, r * 2, r * 2);
      });
      ctx.globalCompositeOperation = "source-over";
    }
  }

  function desenharParticulas(c, alfa) {
    const L = c.d.luz;
    for (let i = 0; i < c.parts.length; i++) {
      const p = c.parts[i];
      p.x += p.vx; p.y += p.vy; p.t += .02;
      let a = p.a * alfa;
      ctx.fillStyle = p.c; ctx.strokeStyle = p.c;
      switch (p.tipo) {
        case "poeira": {
          if (p.x < -10) p.x = W + 10; if (p.x > W + 10) p.x = -10; if (p.y < -10) p.y = H + 10; if (p.y > H + 10) p.y = -10;
          let luzA = 1;
          if (L) { const dx = Math.abs(p.x - L.x * W) - p.y * .55; luzA = dx < 120 ? 1.6 : .55; }
          ctx.globalAlpha = Math.min(1, a * luzA * (.6 + .4 * Math.sin(p.t * 2)));
          ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, TAU); ctx.fill(); break;
        }
        case "chuva":
          ctx.globalAlpha = a; ctx.lineWidth = 1.6; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p.x + p.vx * 2.5, p.y + p.l); ctx.stroke();
          if (p.y > H + 40) c.parts[i] = nova(p.tipo, [p.c], false); break;
        case "brasas": case "subindo":
          ctx.globalAlpha = a * .22; ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 3.2, 0, TAU); ctx.fill();
          ctx.globalAlpha = a * (.6 + .4 * Math.sin(p.t * 3)); ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, TAU); ctx.fill();
          p.x += Math.sin(p.t) * .3;
          if (p.y < -30) c.parts[i] = nova(p.tipo, [p.c], false); break;
        case "faiscas":
          ctx.globalAlpha = a; ctx.lineWidth = p.r; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p.x - p.vx * 3, p.y - p.vy * 3); ctx.stroke();
          if (p.y < -20 || p.x < -20 || p.x > W + 20) c.parts[i] = nova(p.tipo, [p.c], false); break;
        case "coracoes":
          ctx.globalAlpha = a; ctx.save(); ctx.translate(p.x + Math.sin(p.t) * 14, p.y); ctx.rotate(Math.sin(p.t * .7) * .3); coracao(ctx, 0, -p.r / 2, p.r); ctx.restore();
          if (p.y < -40) c.parts[i] = nova(p.tipo, [p.c], false); break;
        case "bolhas":
          ctx.globalAlpha = a; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(p.x + Math.sin(p.t * 2) * 6, p.y, p.r, 0, TAU); ctx.stroke();
          ctx.globalAlpha = a * .6; ctx.beginPath(); ctx.arc(p.x + Math.sin(p.t * 2) * 6 - p.r * .35, p.y - p.r * .35, p.r * .22, 0, TAU); ctx.fill();
          if (p.y < -20) c.parts[i] = nova(p.tipo, [p.c], false); break;
        case "risco":
          ctx.globalAlpha = a; ctx.lineWidth = 3; ctx.lineCap = "round"; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p.x - p.l, p.y); ctx.stroke();
          if (p.x - p.l > W) c.parts[i] = nova(p.tipo, [p.c], false); break;
        case "gotas":
          ctx.globalAlpha = a; ctx.beginPath(); ctx.moveTo(p.x, p.y - p.r * 2.4); ctx.quadraticCurveTo(p.x + p.r, p.y, p.x, p.y + p.r); ctx.quadraticCurveTo(p.x - p.r, p.y, p.x, p.y - p.r * 2.4); ctx.fill();
          if (p.y > H + 20) c.parts[i] = nova(p.tipo, [p.c], false); break;
        case "confete":
          p.t += p.vr; ctx.globalAlpha = a; ctx.save(); ctx.translate(p.x + Math.sin(p.t) * 10, p.y); ctx.rotate(p.t); ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h * Math.cos(p.t * 1.7)); ctx.restore();
          if (p.y > H + 30) c.parts[i] = nova(p.tipo, [p.c], false); break;
      }
    }
    ctx.globalAlpha = 1;
  }

  function desenharOndas(c, alfa) {
    const cores = c.d.ondas; if (!cores) return;
    cores.forEach((cor, k) => {
      ctx.globalAlpha = alfa; ctx.fillStyle = cor; ctx.beginPath();
      const base = H - 210 + k * 62, amp = 16 + k * 6, vel = .0009 + k * .0004;
      ctx.moveTo(0, H);
      for (let x = 0; x <= W; x += 24) ctx.lineTo(x, base + Math.sin(x * .006 + c.t * vel + k * 1.7) * amp + Math.sin(x * .017 - c.t * vel * 1.6) * amp * .3);
      ctx.lineTo(W, H); ctx.fill();
    });
    ctx.globalAlpha = 1;
  }

  function desenharVinheta(c, alfa) {
    const g = ctx.createRadialGradient(W / 2, H / 2, H * .35, W / 2, H / 2, H * 1.05);
    const forte = c.d.tema === "claro" ? .16 : .55;
    g.addColorStop(0, "rgba(0,0,0,0)"); g.addColorStop(1, `rgba(0,0,0,${forte * alfa})`);
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
  }

  function desenharExtras() {
    for (let i = extras.length - 1; i >= 0; i--) {
      const p = extras[i];
      p.x += p.vx; p.y += p.vy; p.vy += p.g; p.vx *= .985; p.vida -= 1; p.rot += p.vr;
      if (p.vida <= 0 || p.y > H + 60) { extras.splice(i, 1); continue; }
      ctx.globalAlpha = Math.min(1, p.vida / 40); ctx.fillStyle = p.c;
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot);
      if (p.forma === "coracao") coracao(ctx, 0, -p.s / 2, p.s);
      else if (p.forma === "faixa") ctx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2 * Math.cos(p.rot * 2));
      else { ctx.beginPath(); ctx.arc(0, 0, p.s / 3, 0, TAU); ctx.fill(); }
      ctx.restore();
    }
    ctx.globalAlpha = 1;
  }

  function quadro(agora) {
    const dt = agora - t0; t0 = agora;
    lento = lento * .95 + (dt > 34 ? 1 : 0) * .05;
    if (lento > .6 && atual.parts.length > 40) { atual.parts.length = Math.round(atual.parts.length * .7); lento = 0; }
    if (mistura < 1) mistura = Math.min(1, (agora - inicioMistura) / 1300);
    const m = mistura < .5 ? 2 * mistura * mistura : 1 - Math.pow(-2 * mistura + 2, 2) / 2;
    tremorCordas *= .96;
    atual.t += dt; if (anterior) anterior.t += dt;

    ctx.clearRect(0, 0, W, H);
    if (anterior && m < 1) desenharCeu(anterior, 1);
    desenharCeu(atual, anterior && m < 1 ? m : 1);
    [[anterior, 1 - m], [atual, anterior && m < 1 ? m : 1]].forEach(([c, a]) => {
      if (!c || a <= 0.001) return;
      desenharBlobs(c, a); desenharLuz(c, a); desenharCordas(c, a); desenharParticulas(c, a); desenharOndas(c, a);
    });
    desenharVinheta(atual, 1);
    desenharExtras();
    if (m >= 1) anterior = null;
    if (!calmo || mistura < 1 || extras.length) requestAnimationFrame(quadro); else setTimeout(() => requestAnimationFrame(quadro), 250);
  }
  requestAnimationFrame(quadro);

  function explodir(x, y, cores, qtd, forma) {
    for (let i = 0; i < qtd; i++) {
      const ang = R() * TAU, v = 4 + R() * 14;
      extras.push({ x, y, vx: Math.cos(ang) * v, vy: Math.sin(ang) * v - 4, g: .32, vida: 70 + R() * 60, c: cores[(R() * cores.length) | 0], s: 10 + R() * 18, rot: R() * TAU, vr: (R() - .5) * .3, forma: forma || (R() < .5 ? "faixa" : "bola") });
    }
  }

  window.Fundo = {
    climas: CLIMAS,
    tema(nome) { return (CLIMAS[nome] || CLIMAS.noite).tema; },
    clima(nome) {
      if (atual.nome === nome) return;
      anterior = atual; atual = criarCena(nome); mistura = 0; inicioMistura = performance.now();
      document.body.style.backgroundColor = (CLIMAS[nome] || CLIMAS.noite).borda;
    },
    tremerCordas() { tremorCordas = 1; },
    limpar() { extras = []; },
    explosao(x, y, cores, qtd) { if (!calmo) explodir(x, y, cores || ["#FFD27A", "#EF4A5A", "#F4ECDD", "#4CC6CF"], qtd || 90); },
    confete() {
      if (calmo) return;
      for (let i = 0; i < 160; i++) extras.push({ x: R() * W, y: -40 - R() * 400, vx: (R() - .5) * 3, vy: 2 + R() * 4, g: .05, vida: 400, c: ["#FFD27A", "#EF4A5A", "#F4ECDD", "#4CC6CF", "#C8202F"][(R() * 5) | 0], s: 14 + R() * 16, rot: R() * TAU, vr: (R() - .5) * .2, forma: R() < .3 ? "coracao" : "faixa" });
    }
  };
})();
