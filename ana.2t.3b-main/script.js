const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está preparado para o teste? ",

        alternativas: [
            {
                texto: "Sim",
                afirmacao: ""
            },
            {
                texto: "Lógico",
                afirmacao: ""
            }
        ]
    },{
        enunciado: "Qual é a principal característica da água do mar?",

        alternativas: [
            {
                texto: "É salgada",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "É doce",
                afirmacao: "Falso"
            },
            {
                texto: "É potável",
                afirmacao: "Falso"
            },
            {
                texto: "Não contém minerais",
                afirmacao: "Falso"
            }
        ]
    },
    {
        enunciado: "Qual é o maior oceano do planeta?",
        alternativas: [
            {
                texto: "Oceano Atlântico",
                afirmacao: "Falso"
            },
            {
                texto: "Oceano Pacifico",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "Oceano Índico",
                afirmacao: "Falso"
            },
            {
                texto: "Oceano Ártico",
                afirmacao: "Falso"
            }
        ]
    },
    {
        enunciado: "O que provoca as marés?",
        alternativas: [
            {
                texto: "A atração da Lua e do Sol",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "A chuva",
                afirmacao: "Falso"
            },
            {
                texto: "O vento",
                afirmacao: "Falso"
            },
            {
                texto: "Os terremotos",
                afirmacao: "Falso"
            }      
        ]
    },
    {
        enunciado: "Qual destes animais vive no mar?",
        alternativas: [
            {
                texto: "Girafa",
                afirmacao: "Falso"
            },
            {
                texto: "Elefante",
                afirmacao: "Falso"
            },
            {
                texto: "Leão",
                afirmacao: "Falso"
            },
            {
                texto: "Baleia",
                afirmacao: "Verdadeiro"
            }
        ]
    },
    {
        enunciado: "Qual é um dos maiores problemas enfrentados pelos mares atualmente?",
        alternativas: [
            {
                texto: "Poluição por lixo e plástico",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "Excesso de água doce",
                afirmacao: "Falso"
            },
            {
                texto: "Falta de peixes coloridos",
                afirmacao: "Falso"
            },
            {
                texto: "Pouca luz do sol",
                afirmacao: "Falso"
            }
        ]
    },
    {
        enunciado: " Qual destes materiais demora muito tempo para se decompor no mar?",
        alternativas: [
            {
                texto: "Papel",
                afirmacao: "Falso"
            },
            {
                texto: "Pástico",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "Madeira",
                afirmacao: "Falso"
            },
            {
                texto: "Casca de banana",
                afirmacao: "Falso"
            }
        ]
    },
    {
        enunciado: "Qual destes ecossistemas é conhecido por abrigar grande diversidade de vida marinha?",
        alternativas: [
            {
                texto: "Recife coral",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "Savana",
                afirmacao: "Falso"
            },
            {
                texto: "Deserto",
                afirmacao: "Falso"
            },
            {
                texto: "Floresta de pinheiros",
                afirmacao: "Falso"
            }    
        ]
    },
    {
        enunciado: "Como podemos ajudar a preservar os mares?",
        alternativas: [
            {
                texto: "Jogando lixo na praia",
                afirmacao: "Falso"
            },
            {
                texto: "Reduzindo o uso de plástico e reciclando",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "Desperdiçando água",
                afirmacao: "Falso"
            },
            {
                texto: "Alimentando animais marinhos com restos de comida",
                afirmacao: "Falso"
            }
        ]
    },
    {
        enunciado: "Qual destes animais é um mamífero marinho?",
        alternativas: [
            {
                texto: "Tubarão",
                afirmacao: "Falso"
            },
            {
                texto: "Polvo",
                afirmacao: "Falso"
            },
            {
                texto: "Lula",
                afirmacao: "Falso"
            },
            {
                texto: "Golfinho",
                afirmacao: "Verdadeiro"
            }
        ]
    },
    {
        enunciado: "Por que os mares são importantes para o planeta?",
        alternativas: [
            {
                texto: "Porque produzem areia para todas as praias",
                afirmacao: "Falso"
            },
            {
                texto: "Porque impedem a formação de nuvens",
                afirmacao: "Falso"
            },
            {
                texto: "Porque regulam o clima e abrigam muitas espécies",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "Porque são feitos de água doce",
                afirmacao: "Falso"
            }
        ]
    }    
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();

let contagemAfirmacoes = {}; // Objeto para armazenar a contagem de cada afirmação

function respostaSelecionada(opcaoSelecionada) {
    const afirmacaoSelecionada = opcaoSelecionada.afirmacao;
    if (contagemAfirmacoes.hasOwnProperty(afirmacaoSelecionada)) {
        contagemAfirmacoes[afirmacaoSelecionada]++;
    } else {
        contagemAfirmacoes[afirmacaoSelecionada] = 1;
    }
    
    historiaFinal += afirmacaoSelecionada + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    if (Object.keys(contagemAfirmacoes).length > 0) {
        caixaPerguntas.innerHTML = '<a class="clique2" href="https://anabarros-22.github.io/anabarros.2T.3B/">Reiniciar Teste</a> Parabéns pela tentativa. De 10 questões, você acertou: ';
        const numeroVerdadeiro = contagemAfirmacoes['Verdadeiro'] || 0;
        textoResultado.textContent = numeroVerdadeiro > 1 ? numeroVerdadeiro : 0;
        caixaAlternativas.textContent = "";
    } else {
        caixaPerguntas.innerHTML = '<a class="clique2" href="https://anabarros-22.github.io/anabarros.2T.3B/">Reiniciar Teste</a> Parabéns pela tentativa. De 10 questões, você acertou: ';
        textoResultado.textContent = 0;
        caixaAlternativas.textContent = "";
    }
}