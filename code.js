let boton = document.getElementById("btn_calcular");
boton.addEventListener("click", pcalcular);

/* nombre_planeta;*/
let g_tierra = 9.8;

function pcalcular() {
  var peso = document.getElementById("txt_peso").value;
  var select = document.getElementById("planetas").value;
  peso_final = peso * select / g_tierra;
  document.getElementById("resultado").innerHTML = "Pesarias aqui " + parseInt(peso_final) + " kilos";
}
