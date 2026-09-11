// Criando variável para armazenar o valor total do carrinho
let total = 0;

// Limpando o produto e valor que já veio fixado no HTML
document.getElementById("lista-produtos").innerHTML = "";
document.getElementById("valor-total").textContent = "R$0,00";

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
    // Recuperar a lista de produtos do carrinho
    let listaProdutos = document.getElementById("lista-produtos");
    // Limpar a lista de produtos
    listaProdutos.innerHTML = "";
    // Recuperar o elemento que mostra o valor total
    let valorTotalCarrinho = document.getElementById("valor-total");
    // Atualizar o valor total
    valorTotalCarrinho.textContent = "R$0,00";
    // Resetar o total
    total = 0;
}