// Criando variável para armazenar o valor total do carrinho
let total;

//Chamando a função limpar para inicializar o carrinho
limpar();

//Criar função para adicionar produtos ao carrinho
function adicionar() {
    // Recuperar valores nome do produto, quantidade e valor do produto
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split(' - ')[0];
    let valorUnitario = Number(produto.split(' R$')[1]);
    let quantidade = Number(document.getElementById("quantidade").value);

    // Calcular o preço, o nosso subtotal
    let valorTotal = quantidade * valorUnitario;
    
    // Adicionar o subtotal ao total
    total = total + valorTotal;

    // Recuperar a lista de produtos do carrinho
    let listaProdutos = document.getElementById("lista-produtos");

    // Adicionar o produto ao carrinho
   listaProdutos.innerHTML += `
        <section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}x</span>
            ${nomeProduto}
            <span class="texto-azul">R$${valorTotal}</span>
        </section>
    `;
    quantidade = Number(document.getElementById("quantidade").value = 0);

   // Atualizar o total na tela
   document.getElementById("valor-total").textContent = `R$${total.toFixed(2)}`;
}
//Criando função para limpar o carrinho
function limpar() {
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").textContent = "R$0,00";
    total = 0;
}