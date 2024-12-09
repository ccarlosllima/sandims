
//==================================================================================
// FORMULARIO DINAMICO
//==================================================================================

// Pegando os elementos necessários
var modal = document.getElementById("myModal");
// var openModalBtn = document.getElementById("openModalBtn");
var closeModal = document.getElementsByClassName("close")[0];

function openModal() {
    modal.style.display = "block";
}
// Quando o usuário clica no botão de fechar (x), o modal é escondido
closeModal.onclick = function () {
    modal.style.display = "none";
}

// Quando o usuário clica fora do modal, ele também fecha
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//==================================================================================
// FIM DO FORMULÁRIO
//==================================================================================


//==================================================================================
// SLIDER DE CURSO
//==================================================================================
