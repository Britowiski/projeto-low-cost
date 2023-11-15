
const btn = document.getElementById("btnTop");

btn.addEventListener("click", function(){
window.scrollTo(0,0)
})

document.addEventListener('scroll', ocultar)

function ocultar(){
    if(window.scrollY > 10){
        btn.style.display = "flex";
        } else {
            btn.style.display = "none";
        }
}

ocultar()

const botoes = document.getElementsByClassName("custom-button");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("click", function(){
        alert('Estamos sem estoque com esse produto, mas vamos te redirecionar para um de nossos outros produtos, aproveite!');
    });
}
