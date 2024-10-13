let totalGeral;
limpar();

function adicionar() {
  // Recuperar valores nome do produto, quantidade e valor
  let produto = document.getElementById("produto").value;
  let quantidade = document.getElementById("quantidade").value;

  // Verificar se o produto selecionado é valido
  if (!produto || produto.trim() === "") {
    alert("Selecione um produto");
    return;
  }

  // Verificar se a quantidade informada é valida
  if (isNaN(quantidade) || quantidade <= 0) {
    alert("Insira uma quantidade válida");
    return;
  }

  let nomeProduto = produto.split("-")[0];
  let valorUnitario = produto.split("R$")[1];

  // Calcular o preco, o nosso subtotal
  let preco = quantidade * valorUnitario;
  let carrinho = document.getElementById("lista-produtos");

  // Adicionar no carrinho
  carrinho.innerHTML =
    carrinho.innerHTML +
    `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`;

  // Atualizar o valor total
  totalGeral += preco;
  let campoTotal = document.getElementById("valor-total");
  campoTotal.textContent = `R$ ${totalGeral}`;
  document.getElementById("quantidade").value = "";
}

function limpar() {
  totalGeral = 0;
  document.getElementById("lista-produtos").innerHTML = "";
  document.getElementById("valor-total").textContent = "R$ 0";
}
