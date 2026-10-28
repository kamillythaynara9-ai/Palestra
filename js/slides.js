/* =====================================================================
   CONTEÚDO DA PALESTRA
   "Eu poderia ter me tornado amarga, mas escolhi amar"
   Jennifer Mayara Martins · Projeto Lutando pelo Futuro

   Para mudar um texto, edite aqui. Para mudar a ordem, mova o bloco
   inteiro { ... } de lugar. Nada mais precisa ser alterado.

   Marcações dentro dos textos:
     *palavra*    destaque em letra de pincel, com sublinhado pintado
     **frase**    negrito
   Campos:
     tipo    modelo do slide (veja a lista em js/apresentacao.js)
     clima   fundo animado (veja a lista em js/fundo.js)
     round   número do round (abre o "cartão de round" com o gongo)
     notas   aparece só para quem apresenta (tecla N)
   ===================================================================== */

window.EVENTO = {
  titulo: "Eu poderia ter me tornado amarga, mas escolhi amar",
  palestrante: "Jennifer Mayara Martins",
  projeto: "Projeto Lutando pelo Futuro"
};

window.FOTOS = {
  logo: "assets/img/logo.webp",
  retrato: "assets/img/jennifer.webp"
};

window.ROUNDS = {
  1: "A proposta da palestra",
  2: "A luta que ninguém vê",
  3: "A menina que cresceu sem saber que era amada",
  4: "Quando a gente procura fora o amor que não recebeu dentro de casa",
  5: "Para as mulheres: amor não deveria exigir o seu desaparecimento",
  6: "O dia em que eu decidi sair",
  7: "A segunda vez que eu precisei recomeçar",
  8: "Endometriose: quando o corpo também pede socorro",
  9: "A cirurgia que se tornou um recomeço",
  10: "Terapia: tirando os band-aids",
  11: "A segunda cirurgia: mas eu já não era a mesma",
  12: "Deus começou a reconstruir a minha identidade",
  13: "O ringue da vida",
  14: "Pais: o que nossos filhos estão aprendendo com a gente?",
  15: "Para as crianças: não se diminua para caber",
  INT: "Intervalo · Momento interativo",
  16: "A luta para acreditar em mim mesma",
  17: "A mulher que eu sou hoje",
  18: "A grande virada: eu poderia ter me tornado amarga",
  19: "Os tijolos",
  20: "Mensagem final para as mães",
  21: "Mensagem final para as crianças",
  22: "Continue lutando pelo futuro",
  23: "Frase final"
};

window.SLIDES = [

  /* ---------------- ANTES DE COMEÇAR ---------------- */
  { id: "espera", tipo: "espera", clima: "noite",
    notas: "Tela de espera: deixe aberta enquanto as famílias chegam. Quando for começar, aperte → (ou o passador)." },

  { id: "capa", tipo: "capa", clima: "noite",
    notas: "Abertura. As cores começam escuras, como um ringue à noite, e vão clareando e esquentando conforme a história avança. A corda vermelha no rodapé é o fio condutor: ela cresce até o fim e vira um coração no último slide." },

  { id: "lutas", tipo: "abertura", clima: "noite",
    titulo: "As lutas que *ninguém vê*",
    textos: [
      "Abusos, rejeição, violência, doença e perdas não conseguiram roubar a minha fé e a minha capacidade de amar.",
      "Esta é a história de uma mulher que aprendeu a se reconstruir."
    ] },

  /* ---------------- ROUND 1 ---------------- */
  { id: "r01a", tipo: "historia", clima: "noite", round: 1,
    textos: [
      "A palestra nasce da conexão entre o universo do boxe e as lutas internas que muitas pessoas enfrentam sem que ninguém perceba.",
      "A ideia é conversar com crianças, adolescentes e adultos sobre identidade, autoestima, limites, saúde emocional, pedir ajuda, recomeço e esperança."
    ] },
  { id: "r01q", tipo: "citacao", clima: "noite", round: 1,
    citacao: "Existem lutas que acontecem dentro do *ringue*. E existem lutas que acontecem *dentro da gente*." },
  { id: "r01b", tipo: "historia", clima: "noite", round: 1, fio: true,
    textos: [
      "A minha história será usada como **fio condutor**: não para expor cada detalhe daquilo que vivi, mas para mostrar que experiências difíceis podem fazer parte da nossa história sem precisar definir o nosso futuro."
    ],
    notas: "A corda vermelha que atravessa este slide é o fio condutor. Ela acompanha a palestra inteira no rodapé." },

  /* ---------------- ROUND 2 ---------------- */
  { id: "r02a", tipo: "historia", clima: "noite", round: 2,
    textos: [
      "“Quando eu recebi o convite para estar aqui, comecei a pensar no significado da palavra lutar. Aqui, vocês ensinam crianças a lutar. Elas aprendem golpes, defesa, disciplina, resistência e concentração. Mas existe uma luta que não acontece dentro do ringue.”"
    ] },
  { id: "r02b", tipo: "historia", clima: "noite", round: 2,
    textos: [
      "“Existe a luta contra o medo, contra a rejeição, contra a baixa autoestima, contra a sensação de não ser capaz. Existe a luta para colocar limites, pedir ajuda e recomeçar.”"
    ] },
  { id: "r02q", tipo: "citacao", clima: "noite", round: 2,
    citacao: "E algumas dessas lutas podem ser muito mais difíceis do que qualquer luta que aconteça dentro de um ringue." },
  { id: "r02s", tipo: "impacto", clima: "noite", round: 2,
    linhas: ["“E eu conheço muito bem", "*essa luta.*”"] },

  /* ---------------- ROUND 3 ---------------- */
  { id: "r03a", tipo: "historia", clima: "chuva", round: 3,
    textos: [
      "Minha história começou antes mesmo de eu nascer. Minha mãe não aceitou a gravidez e escondeu de todos. Quem me acolheu foi minha avó e, principalmente, minha bisavó, que se tornou meu **porto seguro**.",
      "Cresci sem ouvir um “eu te amo”, sem muito carinho e atenção, carregando um sentimento de rejeição que eu nem sabia explicar."
    ] },
  { id: "r03b", tipo: "historia", clima: "chuva", round: 3,
    textos: [
      "Aos 8 anos, fui abusada por uma pessoa. Por não entender que aquilo era abuso, a situação se repetiu mais tarde com outra pessoa e por muitos anos. Eu tinha medo de falar e não sabia se alguém acreditaria em mim."
    ],
    notas: "Momento delicado. O slide é sóbrio de propósito: sem efeitos fortes." },
  { id: "r03c", tipo: "historia", clima: "chuva", round: 3,
    textos: [
      "Minha bisavó era quem me protegia. Muitas vezes entrou na frente para me defender das agressões da minha mãe.",
      "Por volta dos 10 anos, ela sofreu um AVC e ficou acamada. Enquanto outras crianças brincavam, eu cuidava dela. Trocava fraldas, dava banho, colocava a comadre e acordava durante a madrugada. Eu sentia que estava apenas retribuindo o amor que ela havia me dado."
    ] },
  { id: "r03s", tipo: "pausa", clima: "chuva", round: 3,
    antes: "Aos 12 anos, ela faleceu.",
    frase: "E eu perdi meu porto seguro.",
    notas: "Pausa. As letras aparecem devagar e a chuva fica mais fina." },

  /* ---------------- ROUND 4 ---------------- */
  { id: "r04a", tipo: "historia", clima: "chuva", round: 4,
    textos: [
      "Aos 16 anos, conheci o pai dos meus filhos. No meu coração, eu acreditava que ele seria meu refúgio. Pensei: “Agora eu vou sair de casa. Agora alguém vai me amar e cuidar de mim.”"
    ] },
  { id: "r04b", tipo: "historia", clima: "chuva", round: 4,
    textos: [
      "Depois vieram a gravidez, o abandono inicial, o nascimento do meu filho e uma grave infecção que o levou a passar quinze dias internado e em isolamento. Eu vivi meu resguardo praticamente dentro do hospital e sozinha."
    ] },
  { id: "r04c", tipo: "historia", clima: "chuva", round: 4,
    textos: [
      "Mais tarde, acreditando que finalmente construiria uma família, vieram as agressões físicas e verbais. Ele usava minhas próprias dores contra mim. Eu tinha uma dependência emocional que não sabia reconhecer e pouca rede de apoio."
    ] },
  { id: "r04q", tipo: "citacao", clima: "chuva", round: 4,
    citacao: "Quando você cresce sem amor, às vezes aprende a aceitar *migalhas* achando que são *banquetes*." },

  /* ---------------- ROUND 5 ---------------- */
  { id: "r05a", tipo: "historia", clima: "tempestade", round: 5,
    textos: [
      "Talvez exista aqui uma mulher que esteja vivendo algo parecido e ninguém saiba. Talvez esteja sorrindo por fora e sobrevivendo por dentro. Talvez esteja aceitando situações que sabe que não deveria aceitar por medo de ficar sozinha."
    ] },
  { id: "r05q", tipo: "citacao", clima: "tempestade", round: 5,
    citacao: "Amor não exige que você *desapareça* para que o outro exista." },
  { id: "r05b", tipo: "historia", clima: "tempestade", round: 5,
    textos: [
      "**Pedir ajuda não é fracasso.** Procurar uma amiga, familiar, profissional ou serviço de apoio não significa que você fracassou. Significa reconhecer que algumas lutas não precisam ser atravessadas sozinha."
    ],
    aviso: "Em situações de violência, é importante buscar ajuda com segurança e recorrer à rede de proteção disponível." },

  /* ---------------- ROUND 6 ---------------- */
  { id: "r06a", tipo: "historia", clima: "tempestade", round: 6,
    textos: [
      "Em 2016, depois de uma humilhação na porta do meu trabalho e de uma agressão, encontrei uma força que eu nem sabia que existia e **me separei.**"
    ] },
  { id: "r06b", tipo: "historia", clima: "tempestade", round: 6, carnaval: true,
    textos: [
      "Eu não tinha para onde ir. Minha tia me acolheu por quatro meses.",
      "Quando aluguei minha primeira casa, entrei com apenas um colchão de casal emprestado. Minha casa parecia um *carnaval*: cada móvel era de uma cor, porque tudo havia sido doado."
    ],
    notas: "Os móveis coloridos que aparecem são a casa “carnaval”: as primeiras cores da palestra." },
  { id: "r06c", tipo: "passos", clima: "tempestade", round: 6, estilo: "suave",
    itens: [
      "Muitas vezes deixei de comer para que meus filhos comessem.",
      "Troquei maquiagem por contas de água. Troquei roupas por contas de luz.",
      "Chorei muitas madrugadas achando que não conseguiria."
    ],
    notas: "Cada clique mostra uma frase." },
  { id: "r06s", tipo: "impacto", clima: "luz", round: 6, explosao: true,
    linhas: ["“Mas eu", "*continuei.*”"],
    notas: "A primeira luz dourada da palestra." },

  /* ---------------- ROUND 7 ---------------- */
  { id: "r07a", tipo: "historia", clima: "tempestade", round: 7,
    textos: [
      "Em 2018, acreditei novamente no amor. Houve carinho e esperança, mas, com o tempo, vieram traições, mentiras, pornografia e um grande desgaste emocional.",
      "A dependência emocional fazia com que eu não enxergasse sinais que já estavam diante dos meus olhos. Eu insistia, acreditando que o amor seria suficiente para mudar tudo."
    ] },
  { id: "r07s", tipo: "virada", clima: "luz", round: 7,
    frase: "Em julho de 2022, tive *coragem* de me separar.",
    depois: "Pela segunda vez, estava começando do zero." },

  /* ---------------- ROUND 8 ---------------- */
  { id: "r08a", tipo: "historia", clima: "amanhecer", round: 8,
    textos: [
      "Em fevereiro de 2023, fiquei internada por dez dias e descobri uma endometriose profunda. Vieram dores, hemorragias e internações frequentes."
    ] },
  { id: "r08b", tipo: "historia", clima: "amanhecer", round: 8,
    textos: [
      "A endometriose é uma doença inflamatória crônica na qual um tecido semelhante ao endométrio cresce fora do útero. Pode afetar diferentes regiões da pelve e causar dor e outros sintomas. A apresentação varia muito de uma mulher para outra."
    ] },
  { id: "r08c", tipo: "grade", clima: "amanhecer", round: 8,
    titulo: "Alguns sinais e sintomas que merecem avaliação médica incluem:",
    itens: [
      "cólicas menstruais intensas e incapacitantes",
      "dor pélvica persistente",
      "dor durante ou depois da relação sexual",
      "dor para evacuar ou urinar, especialmente durante a menstruação",
      "sangramento menstrual intenso ou irregular",
      "sintomas intestinais ou urinários relacionados ao ciclo",
      "dificuldade para engravidar",
      "cansaço e impacto emocional associados à doença"
    ],
    aviso: "**Importante:** sintomas intensos ou persistentes não devem ser normalizados. A investigação e o tratamento precisam ser individualizados por profissionais de saúde." },

  /* ---------------- ROUND 9 ---------------- */
  { id: "r09a", tipo: "historia", clima: "amanhecer", round: 9,
    textos: [
      "Os médicos disseram que, se o tratamento não funcionasse, seria necessária uma cirurgia. Eu tinha medo e chorava nas consultas.",
      "Durante a terapia, minha psicóloga, Leila, me ajudou a olhar para aquele processo de outra maneira. Ela disse:"
    ] },
  { id: "r09q", tipo: "citacao", clima: "amanhecer", round: 9, menor: true,
    citacao: "Do dia da descoberta até a cirurgia serão nove meses. Você não está gerando um bebê, mas uma *nova mulher*. Essa cirurgia será como uma cesárea. Você entrará naquela sala carregando dores, medos e traumas, mas sairá dali com uma *nova Jennifer*.",
    autor: "Leila, minha psicóloga",
    notas: "A fala da Leila marca o amanhecer da palestra." },
  { id: "r09b", tipo: "historia", clima: "amanhecer", round: 9,
    textos: [
      "Naquele dia, eu chorei como uma criança. Porque, pela primeira vez, entendi que aquela cirurgia não era um fim. **Era um recomeço.**",
      "Em novembro de 2023, fiz a cirurgia e retirei o útero e as duas trompas."
    ] },
  { id: "r09q2", tipo: "citacao", clima: "papel", round: 9,
    citacao: "Aquela mulher que entrou naquela sala cheia de medo e traumas *não foi a mesma que saiu.*",
    notas: "Primeiro slide claro: a mulher que saiu da cirurgia já não é a mesma." },

  /* ---------------- ROUND 10 ---------------- */
  { id: "r10a", tipo: "historia", clima: "papel", round: 10,
    textos: [
      "Comecei a terapia em junho de 2023, por orientação da minha nutricionista. Fui sem querer. Achava que psicólogo era para quem estava muito mal.",
      "**A verdade é que eu estava muito mal e não sabia.**"
    ] },
  { id: "r10b", tipo: "historia", clima: "papel", round: 10,
    textos: [
      "Eu dizia que gostava de ficar em casa e de ficar sozinha. Entrava em casa na sexta-feira e só saía na segunda. Achava que aquele era meu jeito, mas comecei a perceber que estava me isolando do mundo."
    ] },
  { id: "r10c", tipo: "historia", clima: "papel", round: 10, curativos: true,
    textos: [
      "A terapia começou a revelar feridas que estavam escondidas atrás de *band-aids*. Comecei a “limpar o quarto” do meu interior. Mexer em caixinhas fechadas doeu, mas foi necessário para que as feridas começassem a cicatrizar."
    ] },
  { id: "r10d", tipo: "passos", clima: "papel", round: 10, estilo: "cartao",
    itens: [
      "**Descobri** um luto mal resolvido pela perda da minha bisavó.",
      "**Descobri** uma dependência emocional que me fazia aceitar migalhas por medo de ser abandonada.",
      "**Descobri** que me diminuía para caber na vida das pessoas."
    ],
    notas: "Cada clique mostra uma descoberta." },
  { id: "r10q", tipo: "citacao", clima: "papel", round: 10,
    citacao: "Eu estava aprendendo que a cura não era apagar a história. Era *não permitir que ela continuasse comandando a minha vida.*" },

  /* ---------------- ROUND 11 ---------------- */
  { id: "r11a", tipo: "historia", clima: "papel", round: 11,
    textos: [
      "Depois de aproximadamente um ano e meio, descobri uma hérnia umbilical e precisei enfrentar uma segunda cirurgia. Durante a recuperação, tive complicações: meu organismo rejeitou a tela utilizada na correção da hérnia, desenvolvi um seroma e precisei fazer um tratamento delicado."
    ] },
  { id: "r11b", tipo: "historia", clima: "papel", round: 11,
    textos: [
      "Fisicamente, foi doloroso. **Mas dessa vez eu já não era a mesma mulher.** Eu já estava em terapia, aprendendo a olhar para mim, respeitar meus limites e cuidar das minhas emoções."
    ] },
  { id: "r11q", tipo: "citacao", clima: "papel", round: 11,
    citacao: "Se antes eu teria enfrentado tudo sozinha, agora eu estava aprendendo a viver um *processo de cura* por completo." },

  /* ---------------- ROUND 12 ---------------- */
  { id: "r12a", tipo: "passos", clima: "papel", round: 12, estilo: "riscado",
    intro: "Comecei a entender que eu não era aquilo que fizeram comigo.",
    itens: [
      "Eu não era a rejeição.",
      "Eu não era o abuso.",
      "Eu não era a violência.",
      "Eu não era o abandono.",
      "Eu não era as escolhas erradas que fizeram comigo."
    ],
    notas: "Cada clique mostra uma frase. A palavra “não” aparece pintada em vermelho." },
  { id: "r12q", tipo: "citacao", clima: "papel", round: 12,
    citacao: "O que aconteceu comigo faz parte da minha história. Mas *não tem o direito de decidir o meu futuro.*" },

  /* ---------------- ROUND 13 ---------------- */
  { id: "r13a", tipo: "historia", clima: "ringue", round: 13,
    textos: [
      "Foi aí que comecei a entender por que essa história conversa tanto com o projeto Lutando pelo Futuro.",
      "Quando vocês entram no ringue, aprendem a lutar. Mas um bom lutador também aprende a se defender, ouvir, respeitar limites, respirar e entender que nem todo golpe precisa ser respondido com outro golpe."
    ] },
  { id: "r13s", tipo: "impacto", clima: "ringue", round: 13, explosao: true,
    linhas: ["“Na vida também", "*é assim.*”"] },
  { id: "r13b", tipo: "passos", clima: "ringue", round: 13, estilo: "golpe",
    itens: [
      "Você pode ser rejeitado.",
      "Pode errar.",
      "Pode perder.",
      "Pode ser diferente.",
      "Pode passar por coisas que ninguém sabe."
    ],
    fecho: "Mas nada disso precisa *decidir quem você será.*",
    notas: "Cada clique é um “golpe”. O último clique mostra a frase de fechamento." },

  /* ---------------- ROUND 14 ---------------- */
  { id: "r14a", tipo: "destaque", clima: "ringue", round: 14,
    frase: "Nós precisamos ensinar nossos filhos a *lutar*, mas também precisamos ensinar que eles *não precisam lutar sozinhos.*" },
  { id: "r14b", tipo: "passos", clima: "ringue", round: 14, estilo: "balao",
    intro: "Não é apenas ensinar uma criança a ser forte. É ensinar que ela pode dizer:",
    itens: [
      "“Eu estou com medo.”",
      "“Isso me machucou.”",
      "“Eu não gostei.”",
      "“Preciso de ajuda.”",
      "“Isso ultrapassou meu limite.”"
    ],
    notas: "Cada clique abre um balão de fala." },
  { id: "r14q", tipo: "citacao", clima: "ringue", round: 14,
    citacao: "Educar não é apagar a personalidade de uma criança. É ajudá-la a construir *caráter* sem destruir sua *identidade*." },
  { id: "r14c", tipo: "historia", clima: "ringue", round: 14,
    textos: [
      "Às vezes dizemos “engole o choro”, “você é forte”, “isso não é nada” ou “para de frescura”. Precisamos refletir se estamos ensinando força ou ensinando a criança a esconder aquilo que sente."
    ] },
  { id: "r14q2", tipo: "citacao", clima: "ringue", round: 14,
    citacao: "Uma criança que aprende que não pode falar sobre a sua dor pode crescer acreditando que precisa *suportar tudo em silêncio.*" },

  /* ---------------- ROUND 15 ---------------- */
  { id: "r15a", tipo: "passos", clima: "ringue", round: 15, estilo: "pensamento",
    intro: "Talvez você já tenha pensado:",
    itens: [
      "“Eu queria ser igual ao meu amigo.”",
      "“Eu queria ser mais bonito.”",
      "“Eu queria ser mais forte.”",
      "“Eu queria que gostassem de mim.”"
    ],
    notas: "Cada clique mostra um pensamento." },
  { id: "r15q", tipo: "citacao", clima: "ringue", round: 15, maior: true,
    citacao: "Você não precisa deixar de ser você *para ser amado.*" },
  { id: "r15b", tipo: "passos", clima: "ringue", round: 15, estilo: "golpe",
    itens: [
      "**Não** aceite desrespeito só para fazer parte de um grupo.",
      "**Não** machuque outra pessoa para parecer forte.",
      "**Não** esconda aquilo que está machucando você.",
      "E **não** tenha vergonha de pedir ajuda."
    ] },
  { id: "r15s", tipo: "impacto", clima: "ringue", round: 15, explosao: true,
    linhas: ["“Você não nasceu para caber.", "*Você nasceu para ser.*”"] },

  /* ---------------- INTERVALO: LUCA, DIVERTIDA-MENTE E O BOXE ---------------- */
  { id: "i00", tipo: "intervalo", clima: "mar", round: "INT",
    cartoes: [
      ["Luca", "a voz interior que diz “você não consegue”."],
      ["Divertida-Mente", "as emoções que sentimos e que nem sempre sabemos explicar."],
      ["Minha história", "como eu precisei aprender a reconhecer minhas dores, buscar ajuda e acreditar em mim mesma."],
      ["A mensagem do boxe", "assim como treinamos o corpo, também podemos aprender a cuidar das emoções, estabelecer limites e pedir ajuda."]
    ],
    notas: "Intervalo: um pequeno momento interativo com as crianças. Os trechos dos filmes não tocam dentro dos slides: deixe os vídeos prontos em outra aba ou baixados no computador. Dica: a tecla B mostra uma tela de pausa com a logo enquanto o vídeo passa." },

  { id: "lu1", tipo: "nocaute", clima: "mar", round: "INT",
    rotulo: "Trecho do filme · Luca",
    grito: "“Silêncio, *Bruno!*”",
    frases: ["“Você não consegue.”", "“Você vai falhar.”", "“É melhor nem tentar.”"],
    notas: "Mostre a cena em que o Alberto ensina o Luca a dizer “Silêncio, Bruno!”. Depois, cada clique dá um soco numa frase da voz de dúvida e ela sai voando. A própria Pixar explicou que o Bruno representa essa voz de dúvida que impede o Luca de avançar. Para achar a cena: https://www.youtube.com/results?search_query=Luca+Sil%C3%AAncio+Bruno" },
  { id: "lu2", tipo: "passos", clima: "mar", round: "INT", estilo: "pergunta",
    intro: "Levante a mão quem já…",
    itens: [
      "Quem aqui já deixou de tentar alguma coisa por medo de errar?",
      "Quem já pensou que não era bom o suficiente?",
      "Quem já ouviu aquela voz na cabeça dizendo que não conseguiria?"
    ],
    notas: "Depois do trecho, pergunte às crianças, uma pergunta por clique." },
  { id: "lu3", tipo: "citacao", clima: "mar", round: "INT", menor: true,
    citacao: "Sabe aquele *Bruno* que aparece na nossa cabeça? Às vezes ele diz que não somos capazes, que vamos fracassar ou que ninguém vai gostar de nós. Mas precisamos aprender que *sentir medo não significa que somos incapazes.*" },
  { id: "lu4", tipo: "virada", clima: "mar", round: "INT",
    frase: "Coragem não é *não sentir medo.*",
    depois: "É aprender a seguir em frente, com cuidado, mesmo quando sentimos medo.",
    notas: "Conexão com a sua história: você também teve momentos em que não acreditava que seria capaz de estudar, crescer profissionalmente e reconstruir a própria vida. Isso volta no Round 16." },
  { id: "lu5", tipo: "aviso", clima: "mar", round: "INT",
    rotulo: "Uma ressalva importante",
    texto: "Não precisamos silenciar todas as emoções ou ignorar os sinais de perigo. O objetivo é aprender a **reconhecer o medo** sem deixar que ele decida tudo por nós." },

  { id: "dm1", tipo: "emocoes", clima: "emocoes", round: "INT",
    rotulo: "Divertida-Mente 1 e 2",
    titulo: "Todas as emoções têm *algo a nos dizer*",
    filme1: [["Alegria", "#F6C445", "#2A1A00"], ["Tristeza", "#3D7CC9"], ["Raiva", "#E0402F"], ["Medo", "#8566C9"], ["Nojinho", "#3F8F58"]],
    filme2: [["Ansiedade", "#D9621A"], ["Inveja", "#23877F"], ["Vergonha", "#C9467E"], ["Tédio", "#5B6B8C"], ["Nostalgia", "#9C7650"]],
    escolhidas: ["Ansiedade", "Tristeza", "Vergonha"],
    notas: "No primeiro filme: Alegria, Tristeza, Raiva, Medo e Nojinho (o nojo, ou repulsa). No segundo, aparecem novas emoções, incluindo Ansiedade, Inveja, Vergonha e Tédio; a Nostalgia aparece brevemente. Vamos trabalhar só três: Ansiedade, Tristeza e Vergonha (as que pulsam). Você pode clicar em qualquer emoção para ela pular." },
  { id: "dm2", tipo: "emocao", clima: "ansiedade", round: "INT",
    nome: "Ansiedade", sub: "Quando a mente corre para o futuro",
    texto: "O medo de errar, a preocupação com o que os outros vão pensar e a pressão para ser perfeito.",
    cartaoRotulo: "Pergunta para o público",
    cartao: "“Quantas vezes você sofreu por algo que ainda nem aconteceu?”",
    notas: "Fale sobre o medo de errar, a preocupação com o que os outros vão pensar e a pressão para ser perfeito. Depois, faça a pergunta." },
  { id: "dm3", tipo: "emocao", clima: "tristeza", round: "INT",
    nome: "Tristeza", sub: "Quando precisamos de acolhimento",
    texto: "**Chorar não é fraqueza.** Às vezes, a tristeza mostra que precisamos de cuidado, escuta e apoio.",
    cartaoRotulo: "Na minha história",
    cartao: "Eu precisei aprender que não precisava esconder tudo o que sentia.",
    notas: "Explique que chorar não é fraqueza. Conexão com a sua história: você precisou aprender que não precisava esconder tudo o que sentia." },
  { id: "dm4", tipo: "emocao", clima: "vergonha", round: "INT",
    nome: "Vergonha", sub: "Quando temos medo de sermos julgados",
    texto: "Tem criança que esconde os seus sentimentos, tem vergonha de pedir ajuda ou tenta mudar quem é para ser aceita.",
    notas: "Essa emoção ajuda a falar sobre crianças que escondem seus sentimentos, têm vergonha de pedir ajuda ou tentam mudar quem são para serem aceitas." },
  { id: "dm5", tipo: "filme", clima: "sol", round: "INT",
    rotulo: "Trecho do filme · Divertida-Mente 2",
    texto: "Às vezes, você vai realizar seus sonhos em momentos difíceis da sua vida. A vida não é perfeita.",
    frase: "Em alguns momentos, *alegria* e *tristeza* andarão juntas.",
    notas: "1. Mostre o trecho do filme. Deixe o público assistir à cena e refletir por alguns segundos. Não precisa explicar tudo antes. Este trecho combina com a cena do Bruno: um ensina a não deixar o medo decidir tudo por nós; o outro ensina que podemos sentir tristeza e continuar caminhando." },
  { id: "dm6", tipo: "passos", clima: "emocoes", round: "INT", estilo: "pergunta",
    intro: "Uma reflexão:",
    itens: [
      "Quem aqui já sorriu por fora, mas estava triste por dentro?",
      "Quem já teve um sonho, mas, por causa das dificuldades, pensou em desistir?"
    ],
    notas: "2. Faça essa reflexão com o público." },
  { id: "dm7", tipo: "citacao", clima: "sol", round: "INT", menor: true,
    citacao: "Eu aprendi que ser forte não significa estar feliz o tempo todo. Eu também chorei, tive medo e precisei de ajuda. Mas entendi que a tristeza não precisava ser o fim da minha história. Eu podia sentir dor e, mesmo assim, *continuar construindo um futuro melhor.*",
    notas: "3. Conecte com a sua história." },

  { id: "bx1", tipo: "historia", clima: "ringue", round: "INT", titulo: "A mensagem do boxe",
    textos: [
      "No boxe, vocês aprendem a lutar, a treinar e a se levantar depois de uma queda.",
      "**Mas quero que vocês aprendam também que não precisam esconder o que sentem para provar que são fortes.**"
    ],
    notas: "Aqui entra a mensagem para o projeto de boxe: fale direto com as crianças." },
  { id: "bx2", tipo: "trio", clima: "ringue", round: "INT",
    linhas: ["Sentir tristeza *não é fraqueza.*", "Sentir medo *não é covardia.*", "E pedir ajuda *não é desistir.*"],
    notas: "Cada frase entra como um soco." },
  { id: "bx3", tipo: "mar", clima: "sol", round: "INT",
    texto: "Às vezes, a vida vai estar difícil, e ainda assim vocês vão conquistar coisas lindas.",
    frase: "Não esperem que o mar fique sempre calmo para *aprender a navegar.*",
    notas: "O mar ao pôr do sol fecha os dois filmes." },
  { id: "bx4", tipo: "lutador", clima: "ringue", round: "INT",
    texto: "“No boxe, vocês treinam para enfrentar os desafios do ringue. Na vida, também precisamos treinar a coragem, o respeito, o amor-próprio e a capacidade de pedir ajuda.",
    frase: "Porque um verdadeiro lutador *não é aquele que nunca sente medo.*",
    fecho: "É aquele que aprende a lidar com o medo sem desistir de construir o próprio futuro.”",
    notas: "Encerramento do intervalo. Tudo isso combina com o tema central da palestra: você não está ensinando que precisamos ser felizes o tempo todo, e sim mostrando que, mesmo depois de tantas lutas, podemos buscar ajuda, cuidar das nossas emoções e escolher o que queremos construir daqui para frente. Em seguida vem o Round 16." },

  /* ---------------- ROUND 16 ---------------- */
  { id: "r16a", tipo: "historia", clima: "ringue", round: 16,
    textos: [
      "Por muitos anos, eu não acreditava em mim. Não achava que era capaz. Até que entrei na empresa em que trabalho hoje e Deus colocou pessoas no meu caminho que acreditaram em mim antes mesmo de eu conseguir acreditar completamente em mim mesma."
    ] },
  { id: "r16b", tipo: "historia", clima: "ringue", round: 16,
    textos: [
      "Isso me motivou a fazer um curso no SENAI. Durante sete meses, todos os sábados eu saía cedo de casa e voltava quase à noite. Muitas vezes pensei em desistir.",
      "Mas sábado após sábado, eu não estava apenas fazendo um curso. Eu estava vencendo uma parte de mim que dizia: “Você não consegue.”"
    ] },
  { id: "r16q", tipo: "diploma", clima: "ouro", round: 16,
    texto: "Hoje sou formada em Inspetora de Qualidade. Para muita gente pode ser apenas um diploma. Para mim, foi uma prova:",
    frase: "EU SOU CAPAZ.",
    notas: "O carimbo “EU SOU CAPAZ.” entra com um soco." },

  /* ---------------- ROUND 17 ---------------- */
  { id: "r17a", tipo: "foto", clima: "sol", round: 17,
    texto: "Hoje moro com meus filhos. Meu filho serve ao Exército. Minha filha faz boxe.",
    frase: "Hoje estou sozinha, mas *não me sinto sozinha.*",
    notas: "A foto volta, agora com todas as cores." },
  { id: "r17b", tipo: "passos", clima: "sol", round: 17, estilo: "aprendi",
    itens: [
      "**Aprendi** a me amar.",
      "**Aprendi** a colocar limites.",
      "**Aprendi** que não preciso aceitar o mínimo achando que é o máximo.",
      "**Aprendi** que não preciso me diminuir para caber na vida de ninguém."
    ] },
  { id: "r17c", tipo: "historia", clima: "sol", round: 17,
    textos: [
      "Não quero relacionamentos sem propósito, compromisso ou futuro. E acredito que, no tempo certo, Deus preparará alguém, não para me completar, porque *hoje eu já sou inteira*, mas para caminhar ao meu lado."
    ] },

  /* ---------------- ROUND 18 ---------------- */
  { id: "r18a", tipo: "passos", clima: "chuva", round: 18, estilo: "frio",
    itens: [
      "Depois de tudo o que vivi, eu poderia ter escolhido ser amarga.",
      "Poderia ter me tornado uma mulher fria.",
      "Poderia ter descontado nos meus filhos aquilo que fizeram comigo.",
      "Poderia ter perdido a fé.",
      "Poderia ter desistido de acreditar no amor."
    ],
    notas: "Volta proposital ao frio e à chuva: é o caminho que ela poderia ter seguido. Cada clique mostra uma frase." },
  { id: "r18s", tipo: "impacto", clima: "ouro", round: 18, explosao: true, confete: true,
    linhas: ["“Mas eu", "*escolhi amar.*”"],
    notas: "A grande virada: explosão de cor e confete." },
  { id: "r18b", tipo: "historia", clima: "ouro", round: 18,
    textos: [
      "Não porque tudo foi fácil. Não porque eu não sofri. Não porque as pessoas sempre fizeram o certo comigo.",
      "**Mas porque decidi que a dor que recebi não teria permissão para decidir a mulher que eu seria.**"
    ] },
  { id: "r18c", tipo: "viradas", clima: "ouro", round: 18,
    pares: [
      ["Eu poderia ter perdido a fé,", "mas escolhi continuar acreditando."],
      ["Poderia ter desistido,", "mas escolhi recomeçar."],
      ["Poderia ter construído muros,", "mas escolhi construir uma vida."]
    ],
    notas: "Cada clique vira um cartão: do frio para o quente." },

  /* ---------------- ROUND 19 ---------------- */
  { id: "r19a", tipo: "tijolos", clima: "ouro", round: 19,
    texto: "Hoje consigo olhar para trás e perceber que cada dor, cada rejeição, cada humilhação e cada decepção foram como tijolos.",
    tijolos: ["dor", "rejeição", "humilhação", "decepção"],
    notas: "Cada clique coloca um tijolo." },
  { id: "r19q", tipo: "citacao", clima: "ouro", round: 19,
    citacao: "Eu poderia ter usado esses tijolos para construir muros ao meu redor. Mas escolhi usá-los para *construir a mulher que sou hoje.*" },
  { id: "r19b", tipo: "historia", clima: "ouro", round: 19,
    textos: [
      "Através da terapia e da igreja, consegui perdoar pessoas que passaram pela minha vida e deixaram marcas. Perdoar não significa dizer que aquilo foi certo; significa não continuar carregando essas pessoas e acontecimentos dentro de mim.",
      "**Não carrego mágoa, rancor ou raiva.** Sou grata a Deus por ter me sustentado e por tudo o que aprendi no processo."
    ] },

  /* ---------------- ROUND 20 ---------------- */
  { id: "r20a", tipo: "historia", clima: "ouro", round: 20,
    textos: [
      "“Mãe, cuide de você. Não espere estar no seu limite para pedir ajuda. Não ensine seus filhos apenas a serem fortes. Ensine-os também a reconhecer quando algo está machucando.”"
    ] },
  { id: "r20b", tipo: "passos", clima: "ouro", round: 20, estilo: "grande",
    itens: [
      "“Ensine seus filhos que amor não é violência.",
      "Que respeito não é luxo.",
      "Que limite não é falta de amor.",
      "E que pedir ajuda não é vergonha.”"
    ] },

  /* ---------------- ROUND 21 ---------------- */
  { id: "r21a", tipo: "historia", clima: "ouro", round: 21,
    textos: [
      "“Talvez vocês ainda não saibam qual será a profissão de vocês. Talvez ainda estejam descobrindo quem são. Mas **nunca deixem alguém convencer vocês de que não são importantes.**”"
    ] },
  { id: "r21b", tipo: "passos", clima: "ouro", round: 21, estilo: "grande",
    itens: [
      "“Quando estiverem com medo, procurem alguém.",
      "Quando algo machucar, falem.",
      "Quando errarem, aprendam.",
      "Quando caírem, levantem."
    ],
    fecho: "E quando alguém disser que vocês não conseguem, lembrem-se de que até os grandes lutadores começaram aprendendo o primeiro movimento.”" },

  /* ---------------- ROUND 22 ---------------- */
  { id: "r22a", tipo: "historia", clima: "sol", round: 22,
    textos: [
      "“Se hoje eu pudesse abraçar aquela menina que foi rejeitada, abusada, agredida, que perdeu a pessoa que mais a protegia e que tantas vezes achou que não conseguiria, eu diria:"
    ] },
  { id: "r22b", tipo: "passos", clima: "sol", round: 22, estilo: "grande",
    itens: ["Você vai sobreviver.", "Você vai vencer.", "Você ainda vai descobrir o seu valor."],
    fecho: "E um dia vai entender que aquilo que tentaram destruir em você, Deus transformaria em testemunho.”" },
  { id: "r22q", tipo: "citacao", clima: "sol", round: 22,
    citacao: "A minha história começou com rejeição, abuso e dor. Mas Deus transformou a menina que só queria ser amada em uma mulher que *aprendeu a se amar.*" },
  { id: "r22q2", tipo: "citacao", clima: "sol", round: 22,
    citacao: "Eu passei por muitas dores, mas me recusei a permitir que elas roubassem a minha *capacidade de amar.*" },
  { id: "r22q3", tipo: "citacao", clima: "sol", round: 22,
    citacao: "Foi justamente no processo de cura que descobri que Deus não estava escrevendo o fim da minha história. Ele estava escrevendo *um novo começo.*" },
  { id: "r22s", tipo: "levante", clima: "sol", round: 22,
    texto: "“Algumas lutas acontecem dentro do ringue. Outras acontecem dentro da gente. Mas a sua história não termina no lugar onde você caiu.",
    palavras: ["Levante.", "Peça ajuda.", "Recomece."],
    fecho: "E continue *lutando pelo futuro.*”" },

  /* ---------------- ROUND 23 ---------------- */
  { id: "r23", tipo: "final", clima: "final", round: 23,
    notas: "A corda vermelha desenha um coração. Clique mais uma vez para soltar o confete." },

  { id: "obrigada", tipo: "obrigada", clima: "final",
    notas: "Agradecimento. A frase do convite fecha a palestra." }
];
