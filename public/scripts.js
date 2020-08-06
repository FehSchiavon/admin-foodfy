//=== ABRIR E FECHAR BLOCK DE CONTEUDO ===//

document.addEventListener('click', toggleDocs, true)

function toggleDocs (event) {
    if (event.target && event.target.className == 'stuff-button') {

        let next = event.target.nextElementSibling

        if (next.style.display == 'block') {
            next.style.display = 'none'
        } else {
            next.style.display = 'block'
        }
    }
}

//===MUDAR DE NOME (MOSTRAR/ESCONDER)===//

function ingridient() {
    let ingridient = document.querySelector('#ingridient-position')
    if (ingridient.innerHTML === "ESCONDER") {
        ingridient.innerHTML = "MOSTRAR";
    } else {
        ingridient.innerHTML = "ESCONDER";
    }
}

function preparation() {
    let preparation = document.querySelector('#preparation-position')
    if (preparation.innerHTML === "ESCONDER") {
        preparation.innerHTML = "MOSTRAR";
    } else {
        preparation.innerHTML = "ESCONDER";
    }
}

function extra() {
    let extra = document.querySelector('#extra-position')
    if (extra.innerHTML === "ESCONDER") {
        extra.innerHTML = "MOSTRAR";
    } else {
        extra.innerHTML = "ESCONDER";
    }
}

//===ROTAS===//

const recipes = document.querySelectorAll(".type-recipes")

for (let i = 0; i < recipes.length; i++) {
    recipes[i].addEventListener("click", function() {
        window.location.href = `/recipes/${i}`
    })
}


