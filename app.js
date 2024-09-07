
function buscar() {
    // Seleciona a seção onde os resultados serão renderizados
    let section = document.getElementById
    ("resultados-pesquisa");

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    // Se campoPesquisa for uma string sem nada;
    if (!campoPesquisa) {
        section.innerHTML = "Nada foi encontrado"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    console.log(campoPesquisa);

    // Inicializa uma string vazia para armazenar o HTML dos cards
    let resultados = "";
    let titulo = "";
    let price = "";
    let tags = "";

    // Itera sobre cada dado (produto) no array de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        price = dado.price.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || price.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria um novo elemento
            resultados += `
            <div class="card">
                <img src="${dado.imagem}" alt="Bateria Moto Route Harley Davidson">
                <h3 id="titulo-card">${dado.titulo}</h3>
                <div class="rating">
                    </div>
                <p class="price">De   ${dado.price}</p>
                <p class="price-sale">${dado.priceSale}</p>
                <button class="btn">Adicionar ao Carrinho</button>
            </div>
        `;

        }
        console.log(dado.titulo.includes(campoPesquisa))
        // Cria o HTML de um card, inserindo os dados do produto
        
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado. Você buscou algum termo que não representa nosso produtos.</p>"

    }

    // Atualiza o conteúdo da seção com o HTML gerado
    section.innerHTML = resultados;
}










