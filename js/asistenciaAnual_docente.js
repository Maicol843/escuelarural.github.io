//Registro anual de asistencias
const form = document.getElementById('form');

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let libroFormData = new FormData(form);
    insertar(libroFormData);

    form.reset(); //Vuelve al inicio reseteando y vuelve al estado inicial del formulario
})

//Función que inserta fila en la tabla 
function insertar(libroFormData) {
    let tableRef = document.getElementById('tablaAsistenciaAnual');
    let newTransactionRow = tableRef.insertRow(-1);

    let newTransactionCell = newTransactionRow.insertCell(0);
    newTransactionCell.textContent = libroFormData.get("docente");

    newTransactionCell = newTransactionRow.insertCell(1);
    newTransactionCell.textContent = libroFormData.get("materia");

    newTransactionCell = newTransactionRow.insertCell(2);
    newTransactionCell.textContent = libroFormData.get("marzo");

    newTransactionCell = newTransactionRow.insertCell(3);
    newTransactionCell.textContent = libroFormData.get("abril");

    newTransactionCell = newTransactionRow.insertCell(4);
    newTransactionCell.textContent = libroFormData.get("mayo");

    newTransactionCell = newTransactionRow.insertCell(5);
    newTransactionCell.textContent = libroFormData.get("junio");

    newTransactionCell = newTransactionRow.insertCell(6);
    newTransactionCell.textContent = libroFormData.get("julio");

    newTransactionCell = newTransactionRow.insertCell(7);
    newTransactionCell.textContent = libroFormData.get("agosto");

    newTransactionCell = newTransactionRow.insertCell(8);
    newTransactionCell.textContent = libroFormData.get("septiembre");

    newTransactionCell = newTransactionRow.insertCell(9);
    newTransactionCell.textContent = libroFormData.get("octubre");

    newTransactionCell = newTransactionRow.insertCell(10);
    newTransactionCell.textContent = libroFormData.get("noviembre");

    newTransactionCell = newTransactionRow.insertCell(11);
    newTransactionCell.textContent = libroFormData.get("diciembre");

    newTransactionCell = newTransactionRow.insertCell(12);
    newTransactionCell.textContent = calcularEficiencia();

    let newDeleteCell = newTransactionRow.insertCell(13);
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    newDeleteCell.appendChild(deleteButton);

    deleteButton.addEventListener("click", (event)  => {
        event.target.parentNode.parentNode.remove();
    });

    //BOTON DE DESCARGAR
    document.getElementById('boton-descargarTabla').innerHTML = `
        <div class="d-flex justify-content-center">
            <button type="button" class="btn btn-success mt-3 mb-5" onclick="descargar()">Descargar <i class="bi bi-table"></i></button>
        </div>
    `
}

//DESCARGAR
//Función para descargar la tabla en formato png
function descargar() {
    const tabla = document.getElementById("tablaAsistenciaAnual");

    // Utilizar html2canvas para capturar la tabla como imagen
    html2canvas(tabla).then(function (canvas) {
        // Crear un enlace para descargar la imagen
        const enlace = document.createElement("a");
        enlace.href = canvas.toDataURL("image/png");
        enlace.download = "TablaDeAsistenciaAnualDocente.png";

        // Simular un clic en el enlace para iniciar la descarga
        enlace.click();
    });
}

function calcularEficiencia() {
    let eficienciaMarzo = document.getElementById('marzo').value;
    let eficienciaAbril = document.getElementById('abril').value;
    let eficienciaMayo = document.getElementById('mayo').value;
    let eficienciaJunio = document.getElementById('junio').value;
    let eficienciaJulio = document.getElementById('julio').value;
    let eficienciaAgosto = document.getElementById('agosto').value;
    let eficienciaSeptiembre = document.getElementById('septiembre').value;
    let eficienciaOctubre = document.getElementById('octubre').value;
    let eficienciaNoviembre = document.getElementById('noviembre').value;
    let eficienciaDiciembre = document.getElementById('diciembre').value;
    let suma = 0;
    let eficiencia = 0;

    suma = (parseFloat(eficienciaMarzo) + parseFloat(eficienciaAbril) +
        parseFloat(eficienciaMayo) + parseFloat(eficienciaJunio) +
        parseFloat(eficienciaJulio) + parseFloat(eficienciaAgosto) +
        parseFloat(eficienciaSeptiembre) + parseFloat(eficienciaOctubre) +
        parseFloat(eficienciaNoviembre) + parseFloat(eficienciaDiciembre));

    eficiencia = (suma / 10).toFixed(2);

    return eficiencia;
}

function informeGrafica() {
    let docente = document.getElementById('docente').value;
    let materia = document.getElementById('materia').value;

    document.getElementById('informe-grafica').innerHTML =
        `<div class="informe container">
        <h2 class="text-center mb-3">Grafica de Eficiencia Anual Docente</h2>
        <p class="text-center">Docente: <b>${docente}</b></p>
        <p class="text-center">Materia: <b>${materia}</b></p>
        <p class="text-center">Eficiencia Anual: <b>${calcularEficiencia()}%</b></p>
    </div>`
}

function grafica() {
    /*globals Chart:false*/
    //Porcentajes de eficiencia por mes del primer docente
    let num1 = document.getElementById('marzo').value;
    let num2 = document.getElementById('abril').value;
    let num3 = document.getElementById('mayo').value;
    let num4 = document.getElementById('junio').value;
    let num5 = document.getElementById('julio').value;
    let num6 = document.getElementById('agosto').value;
    let num7 = document.getElementById('septiembre').value;
    let num8 = document.getElementById('octubre').value;
    let num9 = document.getElementById('noviembre').value;
    let num10 = document.getElementById('diciembre').value;

    (() => {
        'use strict'

        // Gráfica
        const ctx = document.getElementById('myChart');
        //Variables
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [
                    'Marzo',
                    'Abril',
                    'Mayo',
                    'Junio',
                    'Julio',
                    'Agosto',
                    'Septiembre',
                    'Octubre',
                    'Noviembre',
                    'Diciembre'
                ],
                datasets: [{
                    label: 'Porcentaje de eficiencia',
                    data: [num1, num2, num3, num4, num5, num6, num7, num8, num9, num10],
                    lineTension: 1,
                    backgroundColor: '#007bff',
                    borderColor: '#007bff',
                }]
            }
        })
    })()
    //BOTON DE DESCARGAR
    document.getElementById('boton-descargarGrafica').innerHTML = `
        <div class="d-flex justify-content-center">
            <button type="button" class="btn btn-success mt-3 mb-5" onclick="descargar_2()">Descargar <i class="bi bi-bar-chart-fill"></i></button>
        </div>
    `
}

//DESCARGAR
//Función para descargar la grafica en formato png
function descargar_2() {
    const grafica = document.getElementById("grafica");

    // Utilizar html2canvas para capturar la tabla como imagen
    html2canvas(grafica).then(function (canvas) {
        // Crear un enlace para descargar la imagen
        const enlace = document.createElement("a");
        enlace.href = canvas.toDataURL("image/png");
        enlace.download = "GraficaDeEficienciaAnualDocente.png";

        // Simular un clic en el enlace para iniciar la descarga
        enlace.click();
    });
}