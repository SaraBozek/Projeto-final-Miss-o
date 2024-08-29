const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Em um determinado dia na escola, a diretora propõe uma palestra onde um escritor irá a escola e falrá sobre a importância da leitura no desenvolvimento dos estudantes e mostrará diferentes gêneros e escritores importantes na literatura. Ao ouvir essa proposta, o que você acharia dessa palestra?",
        alternativas: [
            {
                texto: "È uma ótima ideia, pois amo ler",
                afirmacao: "Já se identifica com o meio da literatura"
            },
            {
                texto: "Não acho interessante, preferia uma palestra sobre tecnologias",
                afirmacao: "Nunca pesquisou ou se aprofundou na leitura"
            }
        ]
    },
    {
        enunciado: "Qual dessas atividades você acha que ajudaria mais no desenvolvimento das habilidades de leitura e compreensão?",
        alternativas: [
            {
                texto: "Participar de um clube de leitura. ",
                afirmacao: "Envolvimento ativo com a literatura pode enriquecer a compreensão."
            },
            {
                texto: "Assistir a resenhas de livros na internet.",
                afirmacao: "É uma forma de receber informações sobre livros, mas não substitui a leitura direta."
            }
        ]
    },
    {
        enunciado: "Se um escritor famoso fosse convidado para dar uma palestra sobre como escrever um romance, qual seria sua reação?",
        alternativas: [
            {
                texto: "Seria muito empolgante, pois tenho interesse em escrever.",
                afirmacao: "Tem um interesse ativo em escrever e na criação literária."
            },
            {
                texto: "Não seria tão relevante para mim, pois não tenho interesse em escrever.",
                afirmacao: "Prefere não se envolver com a escrita e criação literária."
            }
        ]
    },
    {
        enunciado: "Qual é a importância dos 'melhores livros' na educação literária?",
        alternativas: [
            {
                texto: "Eles fornecem uma base sólida de literatura clássica e conhecimento cultural.",
                afirmacao: "Os clássicos são frequentemente estudados para entender a evolução da literatura e dos valores culturais."
            },
            {
                texto: "Eles ajudam a desenvolver habilidades de leitura crítica e interpretação.",
                afirmacao: "Ler e analisar obras clássicas pode melhorar a compreensão e a análise crítica"
            }
        ]
    },
    {
        enunciado: "Por fim, sua professora te pergunta sobre qual o estilo de livro que você prefere. Qual seria sua resposta?",
        alternativas: [
            {
                texto: "Gosto de livros que exploram questões tecnológicas e futuristas, pois me interessam os avanços e suas implicações para a sociedade.",
                afirmacao: "Você se interessa por ficção científica e especulativa, que abordam temas relacionados ao futuro e à tecnologia."
            },
            {
                texto: "Prefiro obras que abordam aspectos humanos e sociais, com uma narrativa profunda sobre as experiências e emoções dos personagens.",
                afirmacao: "Você valoriza a literatura que explora a psicologia dos personagens e questões sociais, refletindo uma apreciação por romances realistas e psicológicos."
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
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Por fim...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
