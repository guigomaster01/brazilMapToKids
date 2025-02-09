const estados = {
    "ac": { nome: "Acre", capital: "Rio Branco" },
    "al": { nome: "Alagoas", capital: "Maceió" },
    "ap": { nome: "Amapá", capital: "Macapá" },
    "am": { nome: "Amazonas", capital: "Manaus" },
    "ba": { nome: "Bahia", capital: "Salvador" },
    "ce": { nome: "Ceará", capital: "Fortaleza" },
    "df": { nome: "Distrito Federal", capital: "Brasília" },
    "es": { nome: "Espírito Santo", capital: "Vitória" },
    "go": { nome: "Goiás", capital: "Goiânia" },
    "ma": { nome: "Maranhão", capital: "São Luís" },
    "mt": { nome: "Mato Grosso", capital: "Cuiabá" },
    "ms": { nome: "Mato Grosso do Sul", capital: "Campo Grande" },
    "mg": { nome: "Minas Gerais", capital: "Belo Horizonte" },
    "pa": { nome: "Pará", capital: "Belém" },
    "pb": { nome: "Paraíba", capital: "João Pessoa" },
    "pr": { nome: "Paraná", capital: "Curitiba" },
    "pe": { nome: "Pernambuco", capital: "Recife" },
    "pi": { nome: "Piauí", capital: "Teresina" },
    "rj": { nome: "Rio de Janeiro", capital: "Rio de Janeiro" },
    "rn": { nome: "Rio Grande do Norte", capital: "Natal" },
    "rs": { nome: "Rio Grande do Sul", capital: "Porto Alegre" },
    "ro": { nome: "Rondônia", capital: "Porto Velho" },
    "rr": { nome: "Roraima", capital: "Boa Vista" },
    "sc": { nome: "Santa Catarina", capital: "Florianópolis" },
    "sp": { nome: "São Paulo", capital: "São Paulo" },
    "se": { nome: "Sergipe", capital: "Aracaju" },
    "to": { nome: "Tocantins", capital: "Palmas" }
};

const tooltip = document.getElementById("tooltip");

document.querySelectorAll("path").forEach(estado => {
    estado.addEventListener("mouseover", (event) => {
        // Remove o prefixo "BR-" do id
        const estadoId = event.target.id.replace("BR-", "").toLowerCase();
        const estadoInfo = estados[estadoId];
        if (estadoInfo) {
            tooltip.textContent = `${estadoInfo.nome} - Capital: ${estadoInfo.capital}`;
            tooltip.style.display = "block";

            // Posiciona o tooltip próximo ao cursor do mouse
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            tooltip.style.left = `${mouseX + 10}px`;
            tooltip.style.top = `${mouseY + 10}px`;
        }
    });

    estado.addEventListener("mousemove", (event) => {
        // Atualiza a posição do tooltip conforme o mouse se move
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        tooltip.style.left = `${mouseX + 10}px`;
        tooltip.style.top = `${mouseY + 10}px`;
    });

    estado.addEventListener("mouseout", () => {
        tooltip.style.display = "none";
    });
});