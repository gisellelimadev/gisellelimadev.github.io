//document.write("<h1>Olá mundo</h1>")
//document. write ("<p>nosso paragrafo</p>")
//document. write ('<button class="btn btn-primary">Meu botão</button>')

//alert("Oi sumida")
// 
let conversas = document.querySelector(".conversas")
let botao = document.querySelector(".btn")
let resposta = document.querySelector("#respostas")

conversas.innerHTML = "<div>Olá seja bem vindo, em que posso te ajudar?</div>"

setTimeout (() => {
conversas.innerHTML += "<div>1. Financeiro<br>2. Acadêmico<br>3. Comercial</div>";
}, 2000);

botao.addEventListener("click", () => {
switch(resposta.value){
    case "1":
        conversas.innerHTML += "<div> Entendi, vc escolheu Financeiro</div>" 
        break;

        case"2":
        conversas.innerHTML += "<div> Entendi, vc escolheu Acadêmico</div>"
        break;

        case"3":
        conversas.innerHTML += "<div> Entendi, vc escolheu Comercial</div>"
        break;
}
})

