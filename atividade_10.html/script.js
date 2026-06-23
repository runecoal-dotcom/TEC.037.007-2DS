let produtos = [];

const formulario = document.getElementById("formProduto");
formulario.addEventListener("submit", cadastrarProduto);
function cadastrarProduto(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let categoria = document.getElementById("categoria").value;
    let quantidade = document.getElementById("quantidade").value;
    let preco = document.getElementById("preco").value;

    let produto = {
        nome: nome,
        categoria: categoria,
        quantidade: quantidade,
        preco: preco
    }

    produtos.push(produto);

    const tabela = 
        document.getElementById("tabelaProdutos");
    produtos.forEach(
        function(produto, indice) {
            tabela.innerHTML += `
            <tr>
                <td>${produto.nome}</td>
                <td>${produto.categoria}</td>
                <td>${produto.quantidade}</td>
                <td>${produto.preco}</td>
                <td><a href="#">excluir</a></td>
            </tr>
        `
        }
    )
}