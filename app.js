var produtos = [];

var button_submit = document.querySelector('input[type=submit]');

button_submit.addEventListener('click', () => {
    let nomeProduto = document.querySelector('input[name=nome_produto]');
    let valorProduto = document.querySelector('input[name=valor_produto]');

    produtos.push({
        nome: nomeProduto.value,
        preco: parseFloat(valorProduto.value),
    })


    let listaProdutos = document.querySelector('.lista-produtos');

    listaProdutos.innerHTML = "";
    let soma = 0;

    

    produtos.map((produto)=> {
        listaProdutos.innerHTML+= `
        
        <div class="lista-produtos-single">
            <h3>`+produto.nome+`</h3>
            <h3 class="price-produto"><span>R$ `+produto.preco.toFixed(2)+`</span></h3>
        </div>
        
        `;

        let elementoTotal = document.querySelector('.total h1');

        soma += produto.preco;

        elementoTotal.innerHTML = 'Total: R$'+soma.toFixed(2);

    });

    nomeProduto.value = "";
    valorProduto.value = "";


});

