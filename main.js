var btnComum = document.querySelector('#calcComum');
var btnEstudante = document.querySelector('#calcEstudante');
var inputComum = document.querySelector('#inputComum');
var inputEstudante = document.querySelector('#inputEstudante');
var comumText = document.querySelector('#show-comum');
var estudanteText = document.querySelector('#show-estudante');


btnComum.addEventListener('click', calcularComum);
btnEstudante.addEventListener('click', calcularEstudante);

function limparCampo(input){
    input.value = '';
}

function calcularComum() {
    let valor = inputComum.value;
    let dias = valor / 8.60;
    let diasRedondos = Math.trunc(dias);


    // se os dias tiverem número decimal após a vírgula
    if (dias % 1 != 0) {
        let posVirgula = dias - diasRedondos;

        // saber se tem pelo menos uma ida
        if (posVirgula >= 0.5) {

            // concordância nominal, plural pra plural singular pra singular
            diasRedondos == 1 ?
                comumText.textContent = "Tem " + diasRedondos + " dia completo e uma ida" :
                comumText.textContent = "Têm " + diasRedondos + " dias completos e uma ida";
            comumText.setAttribute("class", "my-3");
        }
        else {
            // concordância nominal, plural pra plural singular pra singular
            diasRedondos == 1 ?
                comumText.textContent = "Tem " + diasRedondos + " dia completo" :
                comumText.textContent = "Têm " + diasRedondos + " dias completos";

            comumText.setAttribute("class", "my-3");
        }
    }
    else {
        dias == 1 ?
            comumText.textContent = "Tem " + diasRedondos + " dia completo" :
            comumText.textContent = "Têm " + diasRedondos + " dias completos";
        comumText.setAttribute("class", "my-3");
    }

}

function calcularEstudante() {
    let valor = inputEstudante.value;
    let dias = valor / 4.30;
    let diasRedondos = Math.trunc(dias);

     // se os dias tiverem número decimal após a vírgula
     if (dias % 1 != 0) {
        let posVirgula = dias - diasRedondos;

        // saber se tem pelo menos uma ida
        if (posVirgula >= 0.5) {

            // concordância nominal, plural pra plural singular pra singular
            diasRedondos == 1 ?
                estudanteText.textContent = "Tem " + diasRedondos + " dia completo e uma ida" :
                estudanteText.textContent = "Têm " + diasRedondos + " dias completos e uma ida";
            estudanteText.setAttribute("class", "my-3");
        }
        else {
            // concordância nominal, plural pra plural singular pra singular
            diasRedondos == 1 ?
                estudanteText.textContent = "Tem " + diasRedondos + " dia completo" :
                estudanteText.textContent = "Têm " + diasRedondos + " dias completos";

            estudanteText.setAttribute("class", "my-3");
        }
    }
    else {
        dias == 1 ?
            estudanteText.textContent = "Tem " + diasRedondos + " dia completo" :
            estudanteText.textContent = "Têm " + diasRedondos + " dias completos";
        estudanteText.setAttribute("class", "my-3");
    }
}

// os campos estão preenchidos? se sim, chama a função de limpar
if (inputComum.value != ''){
    inputComum.addEventListener('click', function(){
        limparCampo(inputComum);
    });
}
if (inputEstudante.value != ''){
    inputEstudante.addEventListener('click',function(){
        limparCampo(inputEstudante);
    });
}