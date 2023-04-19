// function selecionar (input) {
//     quantidade.innerHTML = "1";
//     if (input.checked) {
//         quantidade.innerHTML = "1";
//     } else {
//         quantidade.innerHTML = "0";
//     }
// }
document.querySelectorAll('[onclick= "selecionar(this)"]').forEach ((botao) => {
    botao.addEventListener ('change', () => {
        if (botao.checked === true)
            quantidade.innerHTML++;
        else if (botao.checked === false) 
        quantidade.innerHTML = quantidade.innerHTML - 1 ;
    }
    )
})

