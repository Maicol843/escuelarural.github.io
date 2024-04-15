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
    insertar1(libroFormData);
    
    form.reset(); //Resetea y vuelve al estado inicial del formulario
})

//Función de la tabla de los datos personales del alumno
function insertar1(libroFormData){
    let tableRef = document.getElementById("tableDatosPersonales");
    let newTransactionRow = tableRef.insertRow(-1);

    let newTransactionCell = newTransactionRow.insertCell(0);
    newTransactionCell.textContent = libroFormData.get("nroOrden");

    newTransactionCell = newTransactionRow.insertCell(1);
    newTransactionCell.textContent = libroFormData.get("NyA");

    newTransactionCell = newTransactionRow.insertCell(2);
    newTransactionCell.textContent = libroFormData.get("edad");

    newTransactionCell = newTransactionRow.insertCell(3);
    newTransactionCell.textContent = libroFormData.get("nacimiento");

    newTransactionCell = newTransactionRow.insertCell(4);
    newTransactionCell.textContent = libroFormData.get("nacionalidad");

    newTransactionCell = newTransactionRow.insertCell(5);
    newTransactionCell.textContent = libroFormData.get("legajo");

    newTransactionCell = newTransactionRow.insertCell(6);
    newTransactionCell.textContent = libroFormData.get("dni");

    newTransactionCell = newTransactionRow.insertCell(7);
    newTransactionCell.textContent = libroFormData.get("domicilio");

    newTransactionCell = newTransactionRow.insertCell(8);
    newTransactionCell.textContent = libroFormData.get("phone");

    newTransactionCell = newTransactionRow.insertCell(9);
    newTransactionCell.textContent = libroFormData.get("phoneAlt");

    newTransactionCell = newTransactionRow.insertCell(10);
    newTransactionCell.textContent = libroFormData.get("forma");

    newTransactionCell = newTransactionRow.insertCell(11);
    newTransactionCell.textContent = libroFormData.get("condicion");

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
    const tabla = document.getElementById("datos-personales");

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

