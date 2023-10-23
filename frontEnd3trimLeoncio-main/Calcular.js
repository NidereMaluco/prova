function Calcular() {

    let idadeCanina = prompt("Qual a idade do cachorrinho?") ;
    document.querySelector(".mostraResultado");
   
    
if (idadeCanina <= 11) {
        alert ("Criança");
    }   else {
        alert ("De maior")
    };
   
    mostraResultado.textContent = "Resultado: a idade humana do cachorrinho é " + idadeCanina;
     


}
