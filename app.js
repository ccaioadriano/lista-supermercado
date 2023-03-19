var produtos = [];

var button_submit = document.querySelector('input[type=submit]');

var button_clear = document.querySelector('button[name=limpar]');





button_submit.addEventListener('click', () => {
    let nomeProduto = document.querySelector('input[name=nome_produto]');
    let valorProduto = document.querySelector('input[name=valor_produto]');

    while (isNaN(valorProduto.value)) {
        alert('O valor precisa ser numérico');
        nomeProduto.value = "";
        valorProduto.value = "";
        return
    }

    if ((nomeProduto.value && valorProduto.value)) {
        produtos.push({
            nome: nomeProduto.value,
            preco: parseFloat(valorProduto.value),
        })
    } else {
        alert('Favor inserir dados para cadastrar um produto');
    }


    let listaProdutos = document.querySelector('.lista-produtos');

    listaProdutos.innerHTML = "";
    let soma = 0;



    produtos.map((produto) => {

        listaProdutos.innerHTML += `
        
        <div class="lista-produtos-single">
            <h3>`+ produto.nome + `</h3>
            <h3 class="price-produto"><span>R$ `+ produto.preco.toFixed(2) + `</span></h3>
        </div>
        
        `;

        let elementoTotal = document.querySelector('.total h1');

        soma += produto.preco;

        elementoTotal.innerHTML = 'Total: R$' + soma.toFixed(2);

    });

    nomeProduto.value = "";
    valorProduto.value = "";

});

button_clear.addEventListener('click', ()=>{

    produtos = [];

    let listaProdutos = document.querySelector('.lista-produtos');
    listaProdutos.innerHTML = "";

    let elementoTotal = document.querySelector('.total h1');
    elementoTotal.innerHTML = "";
})

