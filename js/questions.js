filters = [
  { id: -1, label: "Mathematics" },
  { id: 0, label: "Geography" },
  { id: 1, label: "IT" },
  { id: 2, label: "Biology" },
  { id: 3, label: "Physics" },
  { id: 4, label: "Philosophy" },
  { id: 5, label: "Chemistry" },
  { id: 6, label: "Cinema" },
  { id: 7, label: "History" },
  { id: 8, label: "Accounting" },
  { id: 9, label: "Inatro" },
];

const questions = [
  {
    id: 0,
    label: "Qual é capital da China?",
    answers: ["Tokyo", "Pequim", "Ya Ying", "Taywan"],
    answer: "Pequim",
    filter: ["geography"],
  },
  {
    id: 1,
    label: "Em que ano Moçambique ficou independente?",
    answers: ["1965", "1972", "1975", "1977"],
    answer: "1975",
    filter: ["history"],
  },
  {
    id: 2,
    label: "Qual é a melhor aproximação da gravidade na terra?",
    answers: ["8.9", "9.8", "3.14", "9.14"],
    answer: "9.8",
    filter: ["physics"],
  },
  {
    id: 3,
    label: "Qual dos seguintes dispositivos é de saida?",
    answers: ["Câmera", "JBox", "Joystic", "Mouse"],
    answer: "JBox",
    filter: ["physics"],
  },
  {
    id: 4,
    label: "Qual é o nome do símbolo químico P?",
    answers: ["Potássio", "Ferro", "Fósforo", "Alumínio"],
    answer: "Fósforo",
    filter: ["chemistry"],
  },
  {
    id: 5,
    label: "A que grupo pertencem as plantas que produzem astróbilos?",
    answers: ["Angiospérmicas", "Gimnospérmicas", "Pteridófitas", "Fabaceae"],
    answer: "Gimnospérmicas",
    filter: ["biology"],
    exam: "UEM-2017",
  },

  // InatroX
  {
    id: 6,
    label:
      "Em acidente de viação com vítima, deixar de prestar ou providenciar socorro, constitui contravenção:",
    answers: ["Leve", "Média", "Grave"],
    answer: "Grave",
    filter: ["Inatro"],
    exam: "Teste 2",
    img: "",
  },
  {
    id: 7,
    label: "O que indica o sinal?",
    answers: [
      "Fim da fila de trânsito à esquerda",
      "Fim da fila de transito à direita",
      "Convergência de filas de trânsito",
    ],
    answer: "Convergência de filas de trânsito",
    filter: ["Inatro"],
    exam: "Teste 2",
    img: "assets/img/inatro/convergencia-de-fila-de-transito.png",
  },
  {
    id: 8,
    label: "O que é a força centrífuga?",
    answers: [
      "É a força aparente que empurra os veículos para o interior das curvas; ",
      "É a força aparente que empurra os veículos para o exterior das curvas",
      "É a força aparente que trava os veículos nas curvas",
      "NUma força que só ocorre quando o veículo vai em linha recta.",
    ],
    answer:
      "É a força aparente que empurra os veículos para o exterior das curvas",
    filter: ["Inatro"],
    exam: "Teste 2",
    img: "",
  },
  {
    id: 9,
    label:
      "Para conduzir com segurança, deve moderar especialmente a velocidade...",
    answers: [
      "só nas pontes, túneis e passagens de nível.",
      "nos cruzamentos e entroncamentos nos que tenha prioridade de passagem.",
      "nas curvas, lombas e outros locais de visibilidade reduzida.",
      "nos locais assinalados com sinais de obrigação.",
    ],
    answer: "nas curvas, lombas e outros locais de visibilidade reduzida.",
    filter: ["Inatro"],
    exam: "Teste 2",
    img: "",
  },

  // InatroX
];
