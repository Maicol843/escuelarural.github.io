function generarDatos(){
    //Año, División y Turno
    let anyo = document.getElementById("curso").value;
    let division = document.getElementById("division").value;
    let turno = document.getElementById("turno").value;

    document.getElementById("contenedorDatos").innerHTML =
    `<div class="container">
        <div class="row text-center">
            <div class="d-flex justify-content-center align-items-center">
                <p class="pe-2"><b>AÑO: </b>${anyo}</p>
                <p class="pe-2"><b>DIVISIÓN: </b> ${division}</p>
                <p class="pe-2"><b>TURNO: </b> ${turno}</p>
            </div>
        </div>
    </div>`
}

//Formulario de Datos del Alumno
const form = document.getElementById('datos');

form.addEventListener("submit", function(event){
    event.preventDefault();
    let libroFormData = new FormData(form);
    insertar(libroFormData);
    
    form.reset(); //Resetea y vuelve al estado inicial del formulario
})

//Función de los datos del padre, tutor o encargado
function insertar(libroFormData){
    let tableRef2 = document.getElementById("tabla-datosTutor");
    let newTransactionRow2 = tableRef2.insertRow(-1);
    
    let newTransactionCell2 = newTransactionRow2.insertCell(0);
    newTransactionCell2.textContent = libroFormData.get("nroOrden-2");

    newTransactionCell2 = newTransactionRow2.insertCell(1);
    newTransactionCell2.textContent = libroFormData.get("NyA-2");

    newTransactionCell2 = newTransactionRow2.insertCell(2);
    newTransactionCell2.textContent = libroFormData.get("tutor");

    newTransactionCell2 = newTransactionRow2.insertCell(3);
    newTransactionCell2.textContent = libroFormData.get("dni-2");

    newTransactionCell2 = newTransactionRow2.insertCell(4);
    newTransactionCell2.textContent = libroFormData.get("nacionalidad-2");

    newTransactionCell2 = newTransactionRow2.insertCell(5);
    newTransactionCell2.textContent = libroFormData.get("domicilio2");

    newTransactionCell2 = newTransactionRow2.insertCell(6);
    newTransactionCell2.textContent = libroFormData.get("anotaciones");

     //BOTON DE DESCARGAR
     document.getElementById('boton-descargar').innerHTML = `
     <div class="d-flex justify-content-center">
         <button type="button" class="btn btn-success mt-3 mb-5" onclick="descargar()">Descargar <i class="bi bi-table"></i></button>
     </div>
    `
}

//DESCARGAR
//Función para descargar la tabla en formato png
function descargar() {
    const tabla = document.getElementById("datos-tutor");

    // Utilizar html2canvas para capturar la tabla como imagen
    html2canvas(tabla).then(function (canvas) {
        // Crear un enlace para descargar la imagen
        const enlace = document.createElement("a");
        enlace.href = canvas.toDataURL("image/png");
        enlace.download = "informe.png";

        // Simular un clic en el enlace para iniciar la descarga
        enlace.click();
    });
}