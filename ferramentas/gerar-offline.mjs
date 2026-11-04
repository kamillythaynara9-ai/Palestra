// Gera dist/apresentacao-offline.html: a apresentação inteira num único
// arquivo, com fontes, fotos, estilos e scripts embutidos. Funciona sem
// internet, é só abrir no navegador (Chrome ou Edge).
//
// Uso:  node ferramentas/gerar-offline.mjs
// Opcional: node ferramentas/gerar-offline.mjs --artifact  (versão sem o
// esqueleto <html>/<head>/<body>, para publicar como página do Claude)

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname, extname } from "node:path";
import { fileURLToPath } from "node:url";

const raiz = join(dirname(fileURLToPath(import.meta.url)), "..");
const ler = (p) => readFileSync(join(raiz, p), "utf8");
const MIME = { ".woff2": "font/woff2", ".webp": "image/webp", ".png": "image/png", ".jpg": "image/jpeg", ".svg": "image/svg+xml", ".mp4": "video/mp4", ".mp3": "audio/mpeg" };
const dataURI = (p) => `data:${MIME[extname(p)]};base64,${readFileSync(join(raiz, p)).toString("base64")}`;
const embutirImagens = (txt) => txt.replace(/assets\/img\/[\w.-]+\.(webp|png|jpg)/g, (m) => dataURI(m));
const semFechamento = (js) => js.replace(/<\/script/gi, "<\\/script");

let html = ler("index.html");

// estilos com as fontes embutidas
const css = ler("css/estilo.css").replace(/url\(\.\.\/(assets\/fontes\/[\w.-]+\.woff2)\)/g, (m, p) => `url(${dataURI(p)})`);
html = html.replace(/<link rel="stylesheet" href="https:\/\/fonts\.googleapis\.com[^>]*>\n?/, "");
html = html.replace(/<!-- reserva online[^>]*-->\n?/, "");
html = html.replace('<link rel="stylesheet" href="css/estilo.css">', () => `<style>\n${css}\n</style>`);

// scripts embutidos
html = html.replace(/<script src="(js\/[\w.-]+\.js)"><\/script>/g, (m, p) => `<script>\n${semFechamento(ler(p))}\n</script>`);

// fotos e logo
html = embutirImagens(html);

// trecho do filme: a capa vai sempre embutida
html = html.replace(/assets\/video\/[\w.-]+\.jpg/g, (m) => dataURI(m));
// o vídeo vai embutido. No arquivo offline, como MP4 (toca no <video> do navegador).
// Na página do Claude o <video> é bloqueado, então vai como H.264 puro + MP3, que a
// apresentação decodifica sozinha (WebCodecs + Web Audio). Esses dois arquivos são
// gerados a partir do MP4 com os comandos do README.
const artifactModo = process.argv.includes("--artifact");
html = html.replace(/video: "(assets\/video\/([\w-]+)\.mp4)"/, (m, p, nome) => artifactModo
  ? `h264: "data:video/h264;base64,${readFileSync(join(raiz, `assets/video/${nome}.h264`)).toString("base64")}", audio: "${dataURI(`assets/video/${nome}.mp3`)}", codec: "avc1.4d401e", fps: 30`
  : `video: "${dataURI(p)}"`);

const artifact = process.argv.includes("--artifact");
if (artifact) {
  // a página do Claude já traz o esqueleto do documento: fica só o conteúdo
  html = html
    .replace(/<!doctype html>\n?/i, "")
    .replace(/<html[^>]*>\n?/, "").replace(/<\/html>\n?/, "")
    .replace(/<head>\n?/, "").replace(/<\/head>\n?/, "")
    .replace(/<body>\n?/, "").replace(/<\/body>\n?/, "")
    .replace(/<meta charset="utf-8">\n?/, "").replace(/<meta name="viewport"[^>]*>\n?/, "")
    .replace(/<meta property="og:[^>]*>\n?/g, "").replace(/<link rel="icon"[^>]*>\n?/, "");
}

const saida = artifact ? "dist/artifact/index.html" : "dist/apresentacao-offline.html";
mkdirSync(join(raiz, dirname(saida)), { recursive: true });
writeFileSync(join(raiz, saida), html);
console.log(`${saida} gerado (${(html.length / 1e6).toFixed(2)} MB)`);
