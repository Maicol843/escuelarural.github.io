function ingresarDatos() {
    let alumno = document.getElementById("alumno").value;
    let año = document.getElementById("curso").value;
    let division = document.getElementById("division").value;
    let turno = document.getElementById("turno").value;
    let matricula = document.getElementById("matricula").value;
    let lo = document.getElementById("lo").value;
    let fo = document.getElementById("fo").value;

    document.getElementById("asistencia").innerHTML =
        `<div>
            <p class="text-center"><b>ALUMNO: </b>${alumno}</p>
            
                <div class="d-flex justify-content-center text-center">
                    <p class="pe-2"><b>AÑO: </b>${año}</p>
                    <p class="pe-2"><b>DIVISIÓN: </b> ${division}</p>
                    <p class="pe-2"><b>TURNO: </b> ${turno}</p>
                </div>
                <div class="d-flex justify-content-center text-center">
                    <p class="pe-2"><b>MATRICULA: </b> ${matricula}</p>
                    <p class="pe-2"><b>Lo: </b> ${lo}</p>
                    <p class="pe-2"><b>Fo: </b> ${fo}</p>
                </div>
        </div>`
}

const form = document.getElementById('datos');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let libroFormData = new FormData(form);
    insertar(libroFormData);

    form.reset();
})

function insertar(libroFormData) {
    let tableRef = document.getElementById("tablaCalificaciones");
    let newTransactionRow = tableRef.insertRow(-1);

    let newTransactionCell = newTransactionRow.insertCell(0);
    newTransactionCell.textContent = libroFormData.get("asignatura");

    newTransactionCell = newTransactionRow.insertCell(1);
    newTransactionCell.textContent = libroFormData.get("primero");

    newTransactionCell = newTransactionRow.insertCell(2);
    newTransactionCell.textContent = libroFormData.get("segundo");

    newTransactionCell = newTransactionRow.insertCell(3);
    newTransactionCell.textContent = libroFormData.get("tercero");

    newTransactionCell = newTransactionRow.insertCell(4);
    newTransactionCell.textContent = Anual();

    newTransactionCell = newTransactionRow.insertCell(5);
    newTransactionCell.textContent = libroFormData.get("diciembre");

    newTransactionCell = newTransactionRow.insertCell(6);
    newTransactionCell.textContent = libroFormData.get("marzo");

    newTransactionCell = newTransactionRow.insertCell(7);
    newTransactionCell.textContent = Definitiva();

    newTransactionCell = newTransactionRow.insertCell(8);
    newTransactionCell.textContent = libroFormData.get("observaciones");

    let newDeleteCell = newTransactionRow.insertCell(9);
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    newDeleteCell.appendChild(deleteButton);

    deleteButton.addEventListener("click", (event) => {
        event.target.parentNode.parentNode.remove();
    });
}

function Anual() {
    let primero = document.getElementById("primero").value;
    let segundo = document.getElementById("segundo").value;
    let tercero = document.getElementById("tercero").value;
    let promedioAnual = 0;

    promedioAnual = ((parseFloat(primero) + parseFloat(segundo) + parseFloat(tercero)) / 3).toFixed(2);

    return promedioAnual;
}

function Definitiva() {
    let primero = document.getElementById("primero").value;
    let segundo = document.getElementById("segundo").value;
    let tercero = document.getElementById("tercero").value;
    let diciembre = document.getElementById("diciembre").value;
    let marzo = document.getElementById("marzo").value;
    let promedioDefinitivo = 0;

    if ((diciembre == '' || diciembre == 0) && (marzo == '' || marzo == 0)) {
        promedioDefinitivo = Anual();
    } else if (diciembre == '' || diciembre == 0) {
        promedioDefinitivo = ((parseFloat(primero) + parseFloat(segundo) + parseFloat(tercero) + parseFloat(marzo)) / 4).toFixed(2);
    } else if (marzo == '' || marzo == 0) {
        promedioDefinitivo = ((parseFloat(primero) + parseFloat(segundo) + parseFloat(tercero) + parseFloat(diciembre)) / 4).toFixed(2);
    } else {
        promedioDefinitivo = ((parseFloat(primero) + parseFloat(segundo) + parseFloat(tercero) + parseFloat(diciembre) + parseFloat(marzo)) / 5).toFixed(2);
    }

    return promedioDefinitivo;
}

function ingresarDatos2() {
    let previas = document.getElementById('previas').value;
    let primerConcepto = document.getElementById('primero').value;
    let segundoConcepto = document.getElementById('segundo').value;

    document.getElementById('previa').innerHTML = `
        <ul class="list-group list-group-horizontal d-flex justify-content-center">
            <li class="list-group-item col-md-2">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item active bg-secondary rounded-1">
                        <h6>Previas</h6>
                    </li>
                    <li class="list-group-item">
                        <p>${previas}</p>
                    </li>
                </ul>
            </li>
            <li class="list-group-item col-md-2">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item active bg-secondary rounded-1">
                        <h6>1er. Concepto</h6>
                    </li>
                    <li class="list-group-item">
                        <p>${primerConcepto}</p>
                    </li>
                </ul>
            </li>
            <li class="list-group-item col-md-2">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item active bg-secondary rounded-1">
                        <h6>2do. Concepto</h6>
                    </li>
                    <li class="list-group-item">
                        <p>${segundoConcepto}</p>
                    </li>
                </ul>
            </li>
        </ul>
    `

    //BOTON DE DESCARGAR
    document.getElementById('boton-descargar').innerHTML = `
    <div class="d-flex justify-content-center">
        <button type="button" class="btn btn-success" onclick="descargar()">Descargar <i class="bi bi-table"></i></button>
    </div>
   `
}

//DESCARGAR
//Función para descargar la tabla en formato png
function descargar() {
    const tabla = document.getElementById("tablaCalificaciones-Alumnos");

    // Utilizar html2canvas para capturar la tabla como imagen
    html2canvas(tabla).then(function (canvas) {
        // Crear un enlace para descargar la imagen
        const enlace = document.createElement("a");
        enlace.href = canvas.toDataURL("image/png");
        enlace.download = "Tabla de Calificaciones de Alumnos.png";

        // Simular un clic en el enlace para iniciar la descarga
        enlace.click();
    });
}