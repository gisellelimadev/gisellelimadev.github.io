function buscarCep () {
    fetch (`https://viacep.com.br/ws/${cep.value}/json`)
    .then (function (resposta) {return resposta.json();
    })
    .then(function (conteudo) {
        // document.getElementById('logradouro').value = "Av Santos Dummon";
        logradouro.value = conteudo.logradouro;
        bairro.value = conteudo.bairro;
        cidade.value = conteudo.localidade;
        estado.value = conteudo.uf;
    });

    
}