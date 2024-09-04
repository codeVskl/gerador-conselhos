const botaoGerarAdevice = document.querySelector(".gerar-advice");
const adviceNumero = document.querySelector(".advice-id");
const adviceDescricao = document.querySelector(".advice-text");

async function gerarAdvice() {
    try {
        const response = await fetch("https://api.adviceslip.com/advice");

        if (!response.ok) {
            throw new Error("Ocorreu um erro ao tentar buscar as informações da API");
        }

        const adviceInformacoes = await response.json();
        const adviceId = `Advice #${adviceInformacoes.slip.id}`;
        const adviceText = `"${adviceInformacoes.slip.advice}"`;

        adviceNumero.innerText = adviceId;
        adviceDescricao.innerText = adviceText;

    } catch (error) {
        console.error("Erro ao tentar buscar as informações da API", error);
    }

}

botaoGerarAdevice.addEventListener("click", gerarAdvice);

gerarAdvice();