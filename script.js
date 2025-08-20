const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está observando um experimento onde uma bola é lançada horizontalmente de uma mesa. Durante o movimento, você nota que a bola segue uma trajetória curva até atingir o chão. Qual sua primeira reação?",
        alternativas: [
            {
                texto: "Fico intrigado com a trajetória parabólica!",
                afirmacao: [
                    "Ficou fascinado com como a gravidade influencia o movimento dos objetos. ",
                    "Começou a perceber a física presente em situações cotidianas. "
                ]
            },
            {
                texto: "Me pergunto por que a bola não cai em linha reta.",
                afirmacao: [
                    "Questionou-se sobre as forças que atuam sobre os corpos em movimento. ",
                    "Desenvolveu curiosidade sobre os princípios da mecânica clássica. "
                ]
            }
        ]
    },
    {
        enunciado: "Seu professor de física propõe um experimento para medir a aceleração da gravidade usando um pêndulo simples. Como você aborda esta atividade?",
        alternativas: [
            {
                texto: "Foco em fazer medições precisas do período de oscillação e calcular g usando as fórmulas.",
                afirmacao: [
                    "Desenvolveu habilidades experimentais e aprendeu a importância da precisão nas medições. ",
                    "Compreendeu como a matemática se conecta com fenômenos físicos reais. "
                ]
            },
            {
                texto: "Observo primeiro o movimento para entender o que está acontecendo antes de fazer cálculos.",
                afirmacao: [
                    "Preferiu compreender os conceitos físicos antes de aplicar fórmulas matemáticas. ",
                    "Desenvolveu uma abordagem mais intuitiva para resolver problemas de física. "
                ]
            }
        ]
    },
    {
        enunciado: "Durante uma aula sobre eletricidade, surge um debate sobre energia renovável versus energia nuclear. Qual sua posição?",
        alternativas: [
            {
                texto: "Defendo que a energia nuclear é mais eficiente e confiável para suprir grandes demandas energéticas.",
                afirmacao: [
                    "Argumentou sobre a alta densidade energética e baixa emissão de carbono da energia nuclear. ",
                    "Reconheceu a importância de fontes energéticas estáveis para o desenvolvimento tecnológico. "
                ]
            },
            {
                texto: "Acredito que devemos investir mais em energias renováveis como solar e eólica, mesmo com suas limitações.",
                afirmacao: [
                    "Defendeu soluções sustentáveis pensando no impacto ambiental de longo prazo. ",
                    "Valorizou tecnologias que trabalham em harmonia com os ciclos naturais do planeta. "
                ]
            }
        ]
    },
    {
        enunciado: "Você precisa explicar o conceito de ondas sonoras para colegas que têm dificuldade com o assunto. Como procede?",
        alternativas: [
            {
                texto: "Uso analogias do cotidiano, como ondas na água ou o eco em montanhas.",
                afirmacao: [
                    "Desenvolveu a habilidade de conectar conceitos abstratos com experiências do dia a dia. ",
                    "Percebeu que a física está presente em todos os fenômenos que observamos. "
                ]
            },
            {
                texto: "Demonstro com experimentos práticos usando cordas, molas ou diapasões.",
                afirmacao: [
                    "Compreendeu que experimentos visuais facilitam o entendimento de conceitos complexos. ",
                    "Aprendeu que a física é uma ciência experimental que pode ser demonstrada na prática. "
                ]
            }
        ]
    },
    {
        enunciado: "Para um projeto final, você deve escolher entre estudar relatividade de Einstein ou mecânica quântica. Sua escolha é baseada em quê?",
        alternativas: [
            {
                texto: "Escolho relatividade porque me fascina como o tempo e espaço podem se distorcer.",
                afirmacao: [
                    "Ficou impressionado com como Einstein revolucionou nossa compreensão do universo. ",
                    "Desenvolveu interesse pela cosmologia e pelos mistérios do espaço-tempo. "
                ]
            },
            {
                texto: "Prefiro mecânica quântica porque quero entender o comportamento estranho das partículas subatômicas.",
                afirmacao: [
                    "Sentiu-se atraído pelos paradoxos e pela natureza probabilística da realidade quântica. ",
                    "Compreendeu que a física moderna desafia nossa intuição sobre como o mundo funciona. "
                ]
            }
        ]
    },
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

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    // Se afirmacao é um array, junta os elementos
    if (Array.isArray(afirmacoes)) {
        historiaFinal += afirmacoes.join("") + " ";
    } else {
        historiaFinal += afirmacoes + " ";
    }
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Seu perfil como estudante de física...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();