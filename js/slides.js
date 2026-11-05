/* =====================================================================
   CONTEÚDO DA PALESTRA
   "Eu poderia ter me tornado amarga, mas escolhi amar"
   Jeniffer Mayara Martins · Projeto Lutando pelo Futuro

   30 slides. Na tela ficam só título, tópicos e as frases de impacto.
   O texto completo do roteiro está nas NOTAS de cada slide (tecla N),
   para a Jeniffer contar a história com as próprias palavras.

   Para mudar um texto, edite aqui. Para mudar a ordem, mova o bloco
   inteiro { ... } de lugar. Nada mais precisa ser alterado.

   Marcações dentro dos textos:
     *palavra*    destaque em letra de pincel, com sublinhado pintado
     **frase**    negrito
   Campos:
     tipo       modelo do slide (lista em js/apresentacao.js)
     clima      fundo animado (lista em js/fundo.js)
     round      número do round (abre o "cartão de round")
     subtitulo  linha menor embaixo do título do round
     itens      tópicos: { tag: "2016", t: "tópico", s: "subtópico" }
     frase      frase de impacto no fim do slide
     notas      aparece só para quem apresenta (tecla N)
   ===================================================================== */

window.EVENTO = {
  titulo: "Eu poderia ter me tornado amarga, mas escolhi amar",
  palestrante: "Jeniffer Mayara Martins",
  projeto: "Projeto Lutando pelo Futuro"
};

window.FOTOS = {
  logo: "assets/img/logo.webp",
  retrato: "assets/img/jennifer.webp"
};

window.ROUNDS = {
  1: "A luta que ninguém vê",
  2: "A menina que aprendeu a ser forte desde criança",
  3: "O amor que eu procurei fora de casa",
  4: "Para as mulheres",
  5: "Dois recomeços",
  6: "Endometriose",
  7: "Terapia",
  8: "Uma nova identidade",
  9: "O ringue da vida",
  10: "Para os pais",
  11: "Para as crianças",
  INT: "Intervalo · Momento interativo",
  12: "A luta para acreditar em mim",
  13: "A mulher que eu sou hoje",
  14: "A grande virada",
  15: "Os tijolos",
  16: "Mensagem para as mães",
  17: "Mensagem para as crianças",
  18: "Continue lutando pelo futuro",
  19: "Frase final"
};

window.SLIDES = [

  /* ---------------- ABERTURA ---------------- */
  /* 1 */
  { id: "capa", tipo: "capa", clima: "noite",
    notas: "Pode deixar esta tela aberta enquanto as famílias chegam. Abertura: “Abusos, rejeição, violência, doença e perdas não conseguiram roubar a minha fé e a minha capacidade de amar. Esta é a história de uma mulher que aprendeu a se reconstruir.” As cores começam escuras, como um ringue à noite, e vão clareando e esquentando conforme a história avança. A corda vermelha no rodapé cresce até o fim e vira um coração no último slide." },

  /* ---------------- ROUND 1 · A luta que ninguém vê ---------------- */
  /* 2 */
  { id: "r01", tipo: "passos", clima: "noite", round: 1, estilo: "golpe",
    intro: "Existem lutas que são visíveis, que são as do ringue,",
    itens: [
      "mas existem lutas que ninguém vê,",
      "e essas são internas."
    ],
    fecho: "E eu conheço *essas lutas.*",
    notas: "A PROPOSTA: a palestra nasce da conexão entre o universo do boxe e as lutas internas que muitas pessoas enfrentam sem que ninguém perceba. A ideia é conversar com crianças, adolescentes e adultos sobre identidade, autoestima, limites, saúde emocional, pedir ajuda, recomeço e esperança. “Existem lutas que acontecem dentro do ringue. E existem lutas que acontecem dentro da gente.” A minha história será usada como fio condutor — não para expor cada detalhe daquilo que vivi, mas para mostrar que experiências difíceis podem fazer parte da nossa história sem precisar definir o nosso futuro. || A LUTA QUE NINGUÉM VÊ: “Quando eu recebi o convite para estar aqui, comecei a pensar no significado da palavra lutar. Aqui, vocês ensinam crianças a lutar. Elas aprendem golpes, defesa, disciplina, resistência e concentração. Mas existe uma luta que não acontece dentro do ringue. Existe a luta contra o medo, contra a rejeição, contra a baixa autoestima, contra a sensação de não ser capaz. Existe a luta para colocar limites, pedir ajuda e recomeçar. E algumas dessas lutas podem ser muito mais difíceis do que qualquer luta que aconteça dentro de um ringue. E eu conheço muito bem essa luta.” Cada clique é um golpe; o último mostra a frase de fechamento." },

  /* ---------------- ROUND 2 · A menina ---------------- */
  /* 3 */
  { id: "r02", tipo: "topicos", clima: "chuva", round: 2,
    itens: [
      { tag: "Minha bisavó", t: "Meu porto seguro", s: "entrava na frente para me defender" },
      { tag: "8 anos", t: "Fui abusada", s: "e tive medo de falar" },
      { tag: "10 anos", t: "Ela teve um AVC, e eu cuidei dela", s: "eu só estava retribuindo o amor que ela me deu" }
    ],
    notas: "Momento delicado: o slide é sóbrio de propósito. Minha história começou antes mesmo de eu nascer. Minha mãe não aceitou a gravidez e escondeu de todos. Quem me acolheu foi minha avó e, principalmente, minha bisavó, que se tornou meu porto seguro. Cresci sem ouvir um “eu te amo”, sem muito carinho e atenção, carregando um sentimento de rejeição que eu nem sabia explicar. Aos 8 anos, fui abusada por uma pessoa. Por não entender que aquilo era abuso, a situação se repetiu mais tarde com outra pessoa e por muitos anos. Eu tinha medo de falar e não sabia se alguém acreditaria em mim. Minha bisavó era quem me protegia. Muitas vezes entrou na frente para me defender das agressões da minha mãe. Por volta dos 10 anos, ela sofreu um AVC e ficou acamada. Enquanto outras crianças brincavam, eu cuidava dela. Trocava fraldas, dava banho, colocava a comadre e acordava durante a madrugada. Eu sentia que estava apenas retribuindo o amor que ela havia me dado." },
  /* 4 */
  { id: "r02s", tipo: "pausa", clima: "chuva", round: 2,
    fotos: [{ src: "assets/img/fotos/bisa.webp", legenda: "minha bisa e eu", alt: "Jeniffer abraçada com a bisavó" }], album: "esq",
    antes: "Aos 12 anos, ela faleceu.",
    frase: "E eu perdi meu porto seguro.",
    notas: "Pausa. As letras aparecem devagar. FOTO: a montagem com a bisavó foi feita depois que ela conseguiu curar o luto mal resolvido e voltar a olhar as fotos da bisa." },

  /* ---------------- ROUND 3 · O amor fora de casa ---------------- */
  /* 5 */
  { id: "r03", tipo: "topicos", clima: "chuva", round: 3,
    itens: [
      { tag: "16 anos", t: "Conheci o pai dos meus filhos", s: "“Agora alguém vai me amar e cuidar de mim.”" },
      { t: "Agressões físicas e verbais", s: "e uma dependência emocional que eu não sabia reconhecer" }
    ],
    frase: "Quando você cresce sem amor, às vezes aprende a aceitar *migalhas* achando que são *banquetes*.",
    notas: "Aos 16 anos, conheci o pai dos meus filhos. No meu coração, eu acreditava que ele seria meu refúgio. Pensei: “Agora eu vou sair de casa. Agora alguém vai me amar e cuidar de mim.” Depois vieram a gravidez, o abandono inicial, o nascimento do meu filho e uma grave infecção que o levou a passar quinze dias internado e em isolamento. Eu vivi meu resguardo praticamente dentro do hospital e sozinha. Mais tarde, acreditando que finalmente construiria uma família, vieram as agressões físicas e verbais. Ele usava minhas próprias dores contra mim. Eu tinha uma dependência emocional que não sabia reconhecer e pouca rede de apoio. “Quando você cresce sem amor, às vezes aprende a aceitar migalhas achando que são banquetes.”" },

  /* ---------------- ROUND 4 · Para as mulheres ---------------- */
  /* 6 */
  { id: "r04", tipo: "topicos", clima: "tempestade", round: 4,
    itens: [
      { t: "Talvez você esteja vivendo algo parecido", s: "sorrindo por fora e sobrevivendo por dentro" },
      { t: "Pedir ajuda não é fracasso", s: "uma amiga · a família · um profissional · um serviço de apoio" }
    ],
    frase: "Amor não exige que você *desapareça* para que o outro exista.",
    aviso: "Em situações de violência, busque ajuda com segurança: **Ligue 180** (gratuito, 24h). Em emergência, **190**.",
    notas: "Talvez exista aqui uma mulher que esteja vivendo algo parecido e ninguém saiba. Talvez esteja sorrindo por fora e sobrevivendo por dentro. Talvez esteja aceitando situações que sabe que não deveria aceitar por medo de ficar sozinha. “Amor não exige que você desapareça para que o outro exista.” Pedir ajuda não é fracasso. Procurar uma amiga, familiar, profissional ou serviço de apoio não significa que você fracassou. Significa reconhecer que algumas lutas não precisam ser atravessadas sozinha. Em situações de violência, é importante buscar ajuda com segurança e recorrer à rede de proteção disponível. (O Ligue 180 é a Central de Atendimento à Mulher: ligação gratuita, 24 horas. Em perigo imediato, 190.)" },

  /* ---------------- ROUND 5 · Dois recomeços ---------------- */
  /* 7 */
  { id: "r05", tipo: "topicos", clima: "tempestade", round: 5, carnaval: true,
    itens: [
      { tag: "2016", t: "Me separei", s: "depois de uma humilhação e uma agressão" },
      { t: "Um colchão emprestado", s: "móveis doados, cada um de uma cor: um *carnaval*" },
      { tag: "2018", t: "Acreditei de novo no amor", s: "vieram traições, mentiras e desgaste" },
      { tag: "Julho de 2022", t: "Coragem para me separar", s: "pela segunda vez, do zero" }
    ],
    frase: "Chorei muitas madrugadas. *Mas eu continuei.*",
    notas: "O DIA EM QUE EU DECIDI SAIR: Em 2016, depois de uma humilhação na porta do meu trabalho e de uma agressão, encontrei uma força que eu nem sabia que existia e me separei. Eu não tinha para onde ir. Minha tia me acolheu por quatro meses. Quando aluguei minha primeira casa, entrei com apenas um colchão de casal emprestado. Minha casa parecia um carnaval: cada móvel era de uma cor, porque tudo havia sido doado. Muitas vezes deixei de comer para que meus filhos comessem. Troquei maquiagem por contas de água. Troquei roupas por contas de luz. Chorei muitas madrugadas achando que não conseguiria. Mas eu continuei. || O SEGUNDO RECOMEÇO: Em 2018, acreditei novamente no amor. Houve carinho e esperança, mas, com o tempo, vieram traições, mentiras, pornografia e um grande desgaste emocional. A dependência emocional fazia com que eu não enxergasse sinais que já estavam diante dos meus olhos. Eu insistia, acreditando que o amor seria suficiente para mudar tudo. Em julho de 2022, tive coragem de me separar. Pela segunda vez, estava começando do zero. Os móveis coloridos são a casa “carnaval”: as primeiras cores da palestra." },

  /* ---------------- ROUND 6 · Endometriose e a cirurgia ---------------- */
  /* 8 */
  { id: "r06", tipo: "topicos", clima: "amanhecer", round: 6,
    fotos: [{ src: "assets/img/fotos/antes.webp", legenda: "nós três", alt: "Jeniffer com os dois filhos, antes da doença" }],
    subtitulo: "Quando o corpo também pede socorro",
    itens: [
      { tag: "Fevereiro de 2023", t: "10 dias internada", s: "diagnóstico: endometriose profunda" },
      { tag: "O que é", t: "Doença inflamatória crônica", s: "tecido parecido com o endométrio cresce fora do útero" },
      { tag: "Sinais", t: "Cólica incapacitante · dor pélvica", s: "sangramento intenso · dificuldade para engravidar" }
    ],
    aviso: "**Importante:** sintomas intensos ou persistentes não devem ser normalizados. Procure avaliação de profissionais de saúde.",
    notas: "Em fevereiro de 2023, fiquei internada por dez dias e descobri uma endometriose profunda. Vieram dores, hemorragias e internações frequentes. A endometriose é uma doença inflamatória crônica na qual um tecido semelhante ao endométrio cresce fora do útero. Pode afetar diferentes regiões da pelve e causar dor e outros sintomas. A apresentação varia muito de uma mulher para outra. Alguns sinais e sintomas que merecem avaliação médica incluem: cólicas menstruais intensas e incapacitantes; dor pélvica persistente; dor durante ou depois da relação sexual; dor para evacuar ou urinar, especialmente durante a menstruação; sangramento menstrual intenso ou irregular; sintomas intestinais ou urinários relacionados ao ciclo; dificuldade para engravidar; cansaço e impacto emocional associados à doença. Importante: sintomas intensos ou persistentes não devem ser normalizados. A investigação e o tratamento precisam ser individualizados por profissionais de saúde. Esta parte tem caráter educativo e não substitui avaliação médica. FOTO: nós três, antes de ficar doente e descobrir a endometriose. (Também viveu, durante o tratamento, muita perda de cabelo e perdeu 14 kg.)" },
  /* ---------------- ROUND 7 · Terapia e a segunda cirurgia ---------------- */
  /* 9 */
  { id: "r07", tipo: "topicos", clima: "papel", round: 7, curativos: true,
    fotos: [{ src: "assets/img/fotos/terapia.webp", legenda: "terapia", alt: "Jeniffer sorrindo numa chamada de vídeo de terapia" }, { src: "assets/img/fotos/cirurgia2.webp", legenda: "2ª cirurgia", alt: "Jeniffer no hospital antes da segunda cirurgia" }, { src: "assets/img/fotos/seroma-pb.webp", legenda: "com 9 dias", alt: "Barriga com o curativo, em preto e branco" }],
    subtitulo: "Tirando os band-aids",
    itens: [
      { tag: "Junho de 2023", t: "Comecei a terapia, sem querer", s: "eu estava muito mal e não sabia" },
      { tag: "Descobri", t: "Um luto mal resolvido", s: "uma dependência emocional · que eu me diminuía para caber" },
      { tag: "Um ano e meio depois", t: "Segunda cirurgia, já em terapia", s: "dessa vez, vivendo a cura por completo" }
    ],
    frase: "A cura não era apagar a história. Era *não permitir que ela continuasse comandando a minha vida.*",
    notas: "TERAPIA: Comecei a terapia em junho de 2023, por orientação da minha nutricionista. Fui sem querer. Achava que psicólogo era para quem estava muito mal. A verdade é que eu estava muito mal e não sabia. Eu dizia que gostava de ficar em casa e de ficar sozinha. Entrava em casa na sexta-feira e só saía na segunda. Achava que aquele era meu jeito, mas comecei a perceber que estava me isolando do mundo. A terapia começou a revelar feridas que estavam escondidas atrás de band-aids. Comecei a “limpar o quarto” do meu interior. Mexer em caixinhas fechadas doeu, mas foi necessário para que as feridas começassem a cicatrizar. Descobri um luto mal resolvido pela perda da minha bisavó. Descobri uma dependência emocional que me fazia aceitar migalhas por medo de ser abandonada. Descobri que me diminuía para caber na vida das pessoas. “Eu estava aprendendo que a cura não era apagar a história. Era não permitir que ela continuasse comandando a minha vida.” || A SEGUNDA CIRURGIA: Depois de aproximadamente um ano e meio, descobri uma hérnia umbilical e precisei enfrentar uma segunda cirurgia. Durante a recuperação, tive complicações: meu organismo rejeitou a tela utilizada na correção da hérnia, desenvolvi um seroma e precisei fazer um tratamento delicado. Fisicamente, foi doloroso. Mas dessa vez eu já não era a mesma mulher. Eu já estava em terapia, aprendendo a olhar para mim, respeitar meus limites e cuidar das minhas emoções. “Se antes eu teria enfrentado tudo sozinha, agora eu estava aprendendo a viver um processo de cura por completo.” Os band-aids descolam e caem sozinhos. FOTOS: começou o processo de terapia; “quando eu achei que já estava tudo bem, olha eu de novo passando pela segunda cirurgia. Mal eu sabia que o pior estava por vir.”; com 9 dias precisei voltar ao hospital, porque o organismo rejeitou a tela e tive seroma (aumento de líquido interno). Essa foto está em preto e branco." },

  /* 10 */
  { id: "r06q", tipo: "citacao", clima: "amanhecer", round: 7, menor: true,
    fotos: [{ src: "assets/img/fotos/cirurgia1.webp", legenda: "a primeira cirurgia", paisagem: true, alt: "Jeniffer no hospital com o filho, na primeira cirurgia" }], album: "dir",
    citacao: "Serão nove meses. Você não está gerando um bebê, mas uma *nova mulher*. Você entrará naquela sala carregando dores, medos e traumas, mas sairá dali com uma *nova Jeniffer*.",
    autor: "Leila, minha psicóloga",
    notas: "A CIRURGIA QUE VIROU RECOMEÇO: Os médicos disseram que, se o tratamento não funcionasse, seria necessária uma cirurgia. Eu tinha medo e chorava nas consultas. Durante a terapia, minha psicóloga, Leila, me ajudou a olhar para aquele processo de outra maneira. Ela disse: “Do dia da descoberta até a cirurgia serão nove meses. Você não está gerando um bebê, mas uma nova mulher. Essa cirurgia será como uma cesárea. Você entrará naquela sala carregando dores, medos e traumas, mas sairá dali com uma nova Jeniffer.” FOTO: a primeira cirurgia da endometriose." },
  /* 11 */
  { id: "r06v", tipo: "virada", clima: "papel", round: 7,
    frase: "Não era um fim. *Era um recomeço.*",
    depois: "Novembro de 2023: a mulher que entrou naquela sala não foi a mesma que saiu.",
    notas: "Naquele dia, eu chorei como uma criança. Porque, pela primeira vez, entendi que aquela cirurgia não era um fim. Era um recomeço. Em novembro de 2023, fiz a cirurgia e retirei o útero e as duas trompas. “Aquela mulher que entrou naquela sala cheia de medo e traumas não foi a mesma que saiu.” Primeiro slide claro da palestra." },

  /* ---------------- ROUND 8 · Uma nova identidade ---------------- */
  /* 12 */
  { id: "r08", tipo: "passos", clima: "papel", round: 8, estilo: "riscado",
    intro: "Eu não era aquilo que fizeram comigo.",
    itens: [
      "Eu não era a rejeição.",
      "Eu não era o abuso.",
      "Eu não era a violência.",
      "Eu não era o abandono."
    ],
    fecho: "Faz parte da minha história, mas *não tem o direito de decidir o meu futuro.*",
    notas: "Deus começou a reconstruir a minha identidade. Comecei a entender que eu não era aquilo que fizeram comigo. Eu não era a rejeição. Eu não era o abuso. Eu não era a violência. Eu não era o abandono. Eu não era as escolhas erradas que fizeram comigo. “O que aconteceu comigo faz parte da minha história. Mas não tem o direito de decidir o meu futuro.” Cada clique mostra uma frase, e o rótulo é riscado." },

  /* ---------------- ROUND 9 · O ringue da vida ---------------- */
  /* 13 */
  { id: "r09", tipo: "topicos", clima: "ringue", round: 9,
    subtitulo: "Por que essa história conversa com o projeto",
    itens: [
      { t: "No ringue, vocês aprendem a lutar" },
      { t: "Um bom lutador também aprende a:", s: "se defender · ouvir · respeitar limites · respirar" },
      { t: "Na vida também é assim", s: "rejeição, erros e perdas não decidem quem você será" }
    ],
    frase: "Nem todo golpe precisa ser respondido *com outro golpe.*",
    notas: "Foi aí que comecei a entender por que essa história conversa tanto com o projeto Lutando pelo Futuro. Quando vocês entram no ringue, aprendem a lutar. Mas um bom lutador também aprende a se defender, ouvir, respeitar limites, respirar e entender que nem todo golpe precisa ser respondido com outro golpe. Na vida também é assim. Você pode ser rejeitado. Pode errar. Pode perder. Pode ser diferente. Pode passar por coisas que ninguém sabe. Mas nada disso precisa decidir quem você será." },

  /* ---------------- ROUND 10 · Para os pais ---------------- */
  /* 14 */
  { id: "r10", tipo: "passos", clima: "ringue", round: 10, estilo: "balao",
    intro: "Uma criança precisa saber que pode dizer:",
    itens: [
      "“Eu estou com medo.”",
      "“Isso me machucou.”",
      "“Preciso de ajuda.”",
      "“Isso ultrapassou meu limite.”"
    ],
    fecho: "Ensinar a *lutar*, e que eles *não precisam lutar sozinhos.*",
    notas: "Pais: o que nossos filhos estão aprendendo com a gente? Nós precisamos ensinar nossos filhos a lutar, mas também precisamos ensinar que eles não precisam lutar sozinhos. Não é apenas ensinar uma criança a ser forte. É ensinar que ela pode dizer: “Eu estou com medo.” “Isso me machucou.” “Eu não gostei.” “Preciso de ajuda.” “Isso ultrapassou meu limite.” “Educar não é apagar a personalidade de uma criança. É ajudá-la a construir caráter sem destruir sua identidade.” Às vezes dizemos “engole o choro”, “você é forte”, “isso não é nada” ou “para de frescura”. Precisamos refletir se estamos ensinando força ou ensinando a criança a esconder aquilo que sente. “Uma criança que aprende que não pode falar sobre a sua dor pode crescer acreditando que precisa suportar tudo em silêncio.” Cada clique abre um balão de fala." },

  /* ---------------- ROUND 11 · Para as crianças ---------------- */
  /* 15 */
  { id: "r11", tipo: "impacto", clima: "ringue", round: 11, explosao: true,
    linhas: ["“Você não nasceu para caber.", "*Você nasceu para ser.*”"],
    notas: "Talvez você já tenha pensado: “Eu queria ser igual ao meu amigo.” “Eu queria ser mais bonito.” “Eu queria ser mais forte.” “Eu queria que gostassem de mim.” Você não precisa deixar de ser você para ser amado. Não aceite desrespeito só para fazer parte de um grupo. Não machuque outra pessoa para parecer forte. Não esconda aquilo que está machucando você. E não tenha vergonha de pedir ajuda. “Você não nasceu para caber. Você nasceu para ser.”" },

  /* ---------------- INTERVALO: LUCA, DIVERTIDA-MENTE E O BOXE ---------------- */
  /* 16 */
  { id: "luca", tipo: "cinema", clima: "cinema", round: "INT",
    rotulo: "Trecho do filme · Luca (Pixar, 2021)",
    titulo: "Silêncio, *Bruno!*",
    video: "assets/video/luca.mp4",
    capa: "assets/video/luca-capa.jpg",
    duracao: 81,
    duvidas: [["Você não consegue.", 20], ["Você vai falhar.", 26], ["É melhor nem tentar.", 32], ["Ninguém vai gostar de você.", 38]],
    grito: 44,
    voo: 69,
    momentos: [
      { t: 0, nome: "O medo", txt: "Repare: o Luca quer ir, mas o medo trava." },
      { t: 18, nome: "O Bruno", txt: "Aquela voz que diz “você não consegue” ganha um nome: *Bruno.*" },
      { t: 44, nome: "Silêncio!", lado: "fim", txt: "Reconhecer o medo, *sem deixar que ele decida tudo.*" },
      { t: 52, nome: "Coragem", lado: "ini", txt: "Coragem é seguir em frente, com cuidado, *mesmo sentindo medo.*" },
      { t: 69, nome: "O voo", txt: "Sentir medo *não significa ser incapaz.*" }
    ],
    medidor: [[0, .22], [17, .12], [40, .05], [44, .42], [52, .7], [69, 1], [81, 1]],
    final: "Qual é o *seu Bruno?*",
    notas: "INTERVALO, um pequeno momento interativo: Luca (a voz interior que diz “você não consegue”), Divertida-Mente (as emoções que sentimos e nem sempre sabemos explicar), a minha história (reconhecer as dores, buscar ajuda e acreditar em mim) e a mensagem do boxe (assim como treinamos o corpo, podemos aprender a cuidar das emoções, estabelecer limites e pedir ajuda). || COMO USAR ESTE SLIDE: o trecho do Luca (1min21) já está dentro do slide. O 1º clique (ou clicar no vídeo) dá o play; clicar no vídeo pausa; a tecla P também pausa e continua. Os nomes embaixo do vídeo (O medo, O Bruno, Silêncio!, Coragem, O voo) pulam para aquela parte. Enquanto o vídeo passa, as frases do Bruno aparecem do lado direito, o medidor de coragem sobe à esquerda e as frases embaixo acompanham a cena. No fim aparece “E você? Qual é o seu Bruno?”: a cada clique, a luva dá um soco numa frase do Bruno (chame as crianças: “vamos mandar o Bruno calar?”). || A própria Pixar explicou que o Bruno representa a voz de dúvida que impede o Luca de avançar. Depois do vídeo, pergunte às crianças: Quem aqui já deixou de tentar alguma coisa por medo de errar? Quem já pensou que não era bom o suficiente? Quem já ouviu aquela voz na cabeça dizendo que não conseguiria? “Sabe aquele Bruno que aparece na nossa cabeça? Às vezes ele diz que não somos capazes, que vamos fracassar ou que ninguém vai gostar de nós. Mas precisamos aprender que sentir medo não significa que somos incapazes. Coragem não é não sentir medo. É aprender a seguir em frente, com cuidado, mesmo quando sentimos medo.” Ressalva: não precisamos silenciar todas as emoções ou ignorar os sinais de perigo. O objetivo é aprender a reconhecer o medo sem deixar que ele decida tudo por nós. Conexão com a sua história: você também não acreditava que seria capaz de estudar, crescer profissionalmente e reconstruir a própria vida (volta no Round 12)." },
  /* 17 */
  { id: "dm1", tipo: "emocoes", clima: "emocoes", round: "INT",
    rotulo: "Divertida-Mente 1 e 2",
    titulo: "Todas as emoções têm *algo a nos dizer*",
    filme1: [["Alegria", "#F6C445", "#2A1A00"], ["Tristeza", "#3D7CC9"], ["Raiva", "#E0402F"], ["Medo", "#8566C9"], ["Nojinho", "#3F8F58"]],
    filme2: [["Ansiedade", "#D9621A"], ["Inveja", "#23877F"], ["Vergonha", "#C9467E"], ["Tédio", "#5B6B8C"], ["Nostalgia", "#9C7650"]],
    escolhidas: ["Ansiedade", "Tristeza", "Vergonha"],
    notas: "No primeiro filme: Alegria, Tristeza, Raiva, Medo e Nojinho. No segundo, aparecem novas emoções, incluindo Ansiedade, Inveja, Vergonha e Tédio; a Nostalgia aparece brevemente. Vamos falar de três (as que pulsam; clicar numa emoção faz ela pular). ANSIEDADE, quando a mente corre para o futuro: medo de errar, preocupação com o que os outros vão pensar, pressão para ser perfeito. Pergunte: “Quantas vezes você sofreu por algo que ainda nem aconteceu?” TRISTEZA, quando precisamos de acolhimento: chorar não é fraqueza; às vezes a tristeza mostra que precisamos de cuidado, escuta e apoio. Na sua história: você precisou aprender que não precisava esconder tudo o que sentia. VERGONHA, quando temos medo de sermos julgados: crianças que escondem seus sentimentos, têm vergonha de pedir ajuda ou tentam mudar quem são para serem aceitas." },
  /* 18 */
  { id: "divertida", tipo: "memorias", clima: "mente", round: "INT",
    rotulo: "Trecho do filme · Divertida-Mente (Pixar, 2015)",
    titulo: "Uma memória, *dois olhares*",
    video: "assets/video/divertida.mp4",
    capa: "assets/video/divertida-capa.jpg",
    largura: 480, altura: 852, duracao: 55,
    memorias: [
      { nome: "Uma coisa divertida", t: 0, alegria: ["Pensa numa coisa bem divertida.", 0.3], tristeza: ["O filme em que o pai do leãozinho morre.", 3] },
      { nome: "Leite pelo nariz", t: 8, alegria: ["A Riley riu tão forte que saiu leite pelo nariz!", 9.5], tristeza: ["Mas ardeu… parecia fogo queimando.", 16] },
      { nome: "Um passeio", t: 21, alegria: ["Tem o sol e a praia! O papai enterrado na areia.", 29], tristeza: ["Eu tava pensando em chuva…", 34] },
      { nome: "A chuva", t: 37, alegria: ["Poças, guarda-chuvas coloridos e relâmpagos!", 40], tristeza: ["Pé ensopado, frio, tremedeira… tudo fica sombrio.", 46] }
    ],
    balanco: [[0, .6], [2.6, .6], [3, -.6], [6, -.6], [6.4, .5], [15.6, .6], [16, -.6], [19.3, -.6], [19.6, .5], [23.6, .5], [24, -.5], [27.6, -.5], [28, .6], [33.6, .6], [34, -.6], [37.3, -.6], [37.6, .7], [45.6, .7], [46, -.8], [55, -.8]],
    final: "Em alguns momentos, *alegria* e *tristeza* andarão juntas.",
    notas: "COMO USAR ESTE SLIDE: o trecho da Divertida-Mente (55 segundos) já está dentro do slide. O 1º clique (ou clicar no vídeo) dá o play; clicar no vídeo ou a tecla P pausa e continua. Clicar numa memória (dos lados) pula para aquela parte. Enquanto o vídeo passa, cada memória acende dos dois lados: à esquerda, como a Alegria vê; à direita, como a Tristeza vê. A luz do fundo puxa para o dourado quando a Alegria fala e para o azul quando a Tristeza fala. Depois do vídeo, a cada clique uma memória junta os dois lados numa esfera só, dourada e azul; na última aparece a frase “Em alguns momentos, alegria e tristeza andarão juntas.” || 1. Mostre o trecho do filme. Deixe o público assistir e refletir por alguns segundos. “Às vezes, você vai realizar seus sonhos em momentos difíceis da sua vida. A vida não é perfeita. Em alguns momentos, alegria e tristeza andarão juntas.” 2. Reflexão: “Quem aqui já sorriu por fora, mas estava triste por dentro? Quem já teve um sonho, mas, por causa das dificuldades, pensou em desistir?” 3. Conecte com a sua história: “Eu aprendi que ser forte não significa estar feliz o tempo todo. Eu também chorei, tive medo e precisei de ajuda. Mas entendi que a tristeza não precisava ser o fim da minha história. Eu podia sentir dor e, mesmo assim, continuar construindo um futuro melhor.”" },
  /* 19 */
  { id: "bx2", tipo: "trio", clima: "ringue", round: "INT",
    intro: "Ninguém precisa esconder o que sente para provar que é forte.",
    linhas: ["Sentir tristeza *não é fraqueza.*", "Sentir medo *não é covardia.*", "E pedir ajuda *não é desistir.*"],
    notas: "A mensagem do boxe: “No boxe, vocês aprendem a lutar, a treinar e a se levantar depois de uma queda. Mas quero que vocês aprendam também que não precisam esconder o que sentem para provar que são fortes. Sentir tristeza não é fraqueza. Sentir medo não é covardia. E pedir ajuda não é desistir. Às vezes, a vida vai estar difícil, e ainda assim vocês vão conquistar coisas lindas. Não esperem que o mar fique sempre calmo para aprender a navegar. No boxe, vocês treinam para enfrentar os desafios do ringue. Na vida, também precisamos treinar a coragem, o respeito, o amor-próprio e a capacidade de pedir ajuda. Porque um verdadeiro lutador não é aquele que nunca sente medo. É aquele que aprende a lidar com o medo sem desistir de construir o próprio futuro.” Cada frase entra com um clique. Encerra o intervalo." },

  /* ---------------- ROUND 12 · A luta para acreditar em mim ---------------- */
  /* 20 */
  { id: "r12", tipo: "diploma", clima: "ouro", round: 12,
    fotos: [{ src: "assets/img/fotos/senai.webp", legenda: "SENAI", alt: "Jeniffer de camiseta do SENAI" }], album: "esq-baixo",
    texto: "SENAI: sete meses, todos os sábados. Hoje, Inspetora de Qualidade. Para mim, uma prova:",
    frase: "EU SOU CAPAZ.",
    notas: "Por muitos anos, eu não acreditava em mim. Não achava que era capaz. Até que entrei na empresa em que trabalho hoje e Deus colocou pessoas no meu caminho que acreditaram em mim antes mesmo de eu conseguir acreditar completamente em mim mesma. Isso me motivou a fazer um curso no SENAI. Durante sete meses, todos os sábados eu saía cedo de casa e voltava quase à noite. Muitas vezes pensei em desistir. Mas sábado após sábado, eu não estava apenas fazendo um curso. Eu estava vencendo uma parte de mim que dizia: “Você não consegue.” “Hoje sou formada em Inspetora de Qualidade. Para muita gente pode ser apenas um diploma. Para mim, foi uma prova: EU SOU CAPAZ.” O carimbo entra com um soco. FOTO: depois de ter passado por tudo, comecei o curso no SENAI e hoje sou formada Inspetora de Qualidade." },

  /* ---------------- ROUND 13 · A mulher que eu sou hoje ---------------- */
  /* 21 */
  { id: "r13", tipo: "foto", clima: "sol", round: 13,
    foto: "assets/img/fotos/hoje.webp",
    texto: "Aprendi a me amar e a colocar limites. Hoje eu já sou *inteira.*",
    frase: "Hoje estou sozinha, mas *não me sinto sozinha.*",
    notas: "Hoje moro com meus filhos. Meu filho serve ao Exército. Minha filha faz boxe. Hoje estou sozinha, mas não me sinto sozinha. Aprendi a me amar. Aprendi a colocar limites. Aprendi que não preciso aceitar o mínimo achando que é o máximo. Aprendi que não preciso me diminuir para caber na vida de ninguém. Não quero relacionamentos sem propósito, compromisso ou futuro. E acredito que, no tempo certo, Deus preparará alguém — não para me completar, porque hoje eu já sou inteira, mas para caminhar ao meu lado. A foto volta, agora com todas as cores. FOTO: “e pra finalizar, hoje estou assim.”" },

  /* ---------------- ROUND 14 · A grande virada ---------------- */
  /* 22 */
  { id: "r14", tipo: "passos", clima: "chuva", round: 14, estilo: "frio",
    intro: "Depois de tudo, eu poderia…",
    itens: [
      "ter escolhido ser amarga.",
      "ter descontado nos meus filhos.",
      "ter perdido a fé.",
      "ter desistido do amor."
    ],
    notas: "Depois de tudo o que vivi, eu poderia ter escolhido ser amarga. Poderia ter me tornado uma mulher fria. Poderia ter descontado nos meus filhos aquilo que fizeram comigo. Poderia ter perdido a fé. Poderia ter desistido de acreditar no amor. Volta proposital ao frio e à chuva: é o caminho que ela poderia ter seguido. Cada clique mostra uma frase." },
  /* 23 */
  { id: "r14s", tipo: "impacto", clima: "ouro", round: 14, explosao: true, confete: true,
    linhas: ["“Mas eu", "*escolhi amar.*”"],
    notas: "A grande virada: explosão de cor e confete. Não porque tudo foi fácil. Não porque eu não sofri. Não porque as pessoas sempre fizeram o certo comigo. Mas porque decidi que a dor que recebi não teria permissão para decidir a mulher que eu seria. Eu poderia ter perdido a fé, mas escolhi continuar acreditando. Poderia ter desistido, mas escolhi recomeçar. Poderia ter construído muros, mas escolhi construir uma vida." },

  /* ---------------- ROUND 15 · Os tijolos ---------------- */
  /* 24 */
  { id: "r15", tipo: "tijolos", clima: "ouro", round: 15,
    texto: "Eu poderia ter usado esses tijolos para construir muros. Escolhi construir *a mulher que sou hoje.*",
    tijolos: ["dor", "rejeição", "humilhação", "decepção"],
    notas: "Hoje consigo olhar para trás e perceber que cada dor, cada rejeição, cada humilhação e cada decepção foram como tijolos. “Eu poderia ter usado esses tijolos para construir muros ao meu redor. Mas escolhi usá-los para construir a mulher que sou hoje.” O PERDÃO: Através da terapia e da igreja, consegui perdoar pessoas que passaram pela minha vida e deixaram marcas. Perdoar não significa dizer que aquilo foi certo; significa não continuar carregando essas pessoas e acontecimentos dentro de mim. Não carrego mágoa, rancor ou raiva. Sou grata a Deus por ter me sustentado e por tudo o que aprendi no processo. Cada clique coloca um tijolo; o último coloca o coração." },

  /* ---------------- ROUND 16 · Mensagem para as mães ---------------- */
  /* 25 */
  { id: "r16", tipo: "passos", clima: "ouro", round: 16, estilo: "grande",
    intro: "Mãe, cuide de você. E ensine seus filhos que:",
    itens: [
      "Amor não é violência.",
      "Respeito não é luxo.",
      "Limite não é falta de amor.",
      "Pedir ajuda não é vergonha."
    ],
    notas: "“Mãe, cuide de você. Não espere estar no seu limite para pedir ajuda. Não ensine seus filhos apenas a serem fortes. Ensine-os também a reconhecer quando algo está machucando. Ensine seus filhos que amor não é violência. Que respeito não é luxo. Que limite não é falta de amor. E que pedir ajuda não é vergonha.”" },

  /* ---------------- ROUND 17 · Mensagem para as crianças ---------------- */
  /* 26 */
  { id: "r17", tipo: "passos", clima: "ouro", round: 17, estilo: "grande",
    intro: "Nunca deixem ninguém convencer vocês de que *não são importantes.*",
    itens: [
      "Com medo? Procurem alguém.",
      "Machucou? Falem.",
      "Errou? Aprendam.",
      "Caiu? Levantem."
    ],
    fecho: "Até os grandes lutadores começaram pelo *primeiro movimento.*",
    notas: "“Talvez vocês ainda não saibam qual será a profissão de vocês. Talvez ainda estejam descobrindo quem são. Mas nunca deixem alguém convencer vocês de que não são importantes. Quando estiverem com medo, procurem alguém. Quando algo machucar, falem. Quando errarem, aprendam. Quando caírem, levantem. E quando alguém disser que vocês não conseguem, lembrem-se de que até os grandes lutadores começaram aprendendo o primeiro movimento.”" },

  /* ---------------- ROUND 18 · Continue lutando pelo futuro ---------------- */
  /* 27 */
  { id: "r18", tipo: "passos", clima: "sol", round: 18, estilo: "grande",
    intro: "Se eu pudesse abraçar aquela menina, eu diria:",
    itens: ["Você vai sobreviver.", "Você vai vencer.", "Você vai descobrir o seu valor."],
    fecho: "O que tentaram destruir em você, Deus transformaria em *testemunho.*",
    notas: "“Se hoje eu pudesse abraçar aquela menina que foi rejeitada, abusada, agredida, que perdeu a pessoa que mais a protegia e que tantas vezes achou que não conseguiria, eu diria: Você vai sobreviver. Você vai vencer. Você ainda vai descobrir o seu valor. E um dia vai entender que aquilo que tentaram destruir em você, Deus transformaria em testemunho.” “A minha história começou com rejeição, abuso e dor. Mas Deus transformou a menina que só queria ser amada em uma mulher que aprendeu a se amar.” Pode dizer também: “Eu passei por muitas dores, mas me recusei a permitir que elas roubassem a minha capacidade de amar.” “Foi justamente no processo de cura que descobri que Deus não estava escrevendo o fim da minha história. Ele estava escrevendo um novo começo.”" },
  /* 28 */
  { id: "r18s", tipo: "levante", clima: "sol", round: 18,
    texto: "A sua história não termina no lugar onde você caiu.",
    palavras: ["Levante.", "Peça ajuda.", "Recomece."],
    fecho: "E continue *lutando pelo futuro.*",
    notas: "“Algumas lutas acontecem dentro do ringue. Outras acontecem dentro da gente. Mas a sua história não termina no lugar onde você caiu. Levante. Peça ajuda. Recomece. E continue lutando pelo futuro.”" },

  /* ---------------- ROUND 19 · Frase final ---------------- */
  /* 29 */
  { id: "r19", tipo: "final", clima: "final", round: 19,
    notas: "A corda vermelha desenha um coração. Clique mais uma vez para soltar o confete." },

  /* 30 */
  { id: "obrigada", tipo: "obrigada", clima: "final",
    notas: "Agradecimento." }
];
