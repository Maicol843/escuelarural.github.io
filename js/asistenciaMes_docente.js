document.getElementById('attendanceForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const subject = document.getElementById('subject').value;
    const month = document.getElementById('month').value;
    const campus = document.getElementById('campus').value;

    document.getElementById('teacherInfo').innerHTML = `
      <strong>Nombre y Apellido:</strong> ${name}<br>
      <strong>Asignatura:</strong> ${subject}<br>
      <strong>Mes:</strong> ${month}<br>
      <strong>Sede:</strong> ${campus}
    `;

    const monthDays = document.getElementById('monthDays');
    monthDays.innerHTML = ''; // Limpiar la tabla antes de generar los días

    const daysInMonth = new Date(2024, new Date(month + ' 1, 2024').getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(month + ' 1, 2024').getDay();

    let dayCounter = 1;
    if (firstDayOfMonth === 0) { // Domingo
        firstDayOfMonth = 7; // Convertir domingo (0) a 7
    }

    const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    let absentDays = 0;

    for (let i = 0; i < 5; i++) { // Máximo 5 filas para los días del mes
        const row = document.createElement('tr');
        for (let j = 0; j < 7; j++) { // 7 columnas para los días de la semana
            if (i === 0 && j < firstDayOfMonth - 1) { // Rellenar celdas vacías en la primera fila
                row.innerHTML += '<td class="bg-secondary"></td>';
            } else if (dayCounter > daysInMonth) { // Terminar de generar la tabla si ya no hay más días en el mes
                if (i !== 0) { // Si no estamos en la primera fila
                    row.innerHTML += `<td class="second-month bg-secondary"></td>`;
                } else {
                    row.innerHTML += '<td></td>'; // Si estamos en la primera fila, agregar celda vacía
                }
            } else {
                if (dayCounter > 31) { // Si estamos en el segundo mes
                    row.innerHTML += `<td class="second-month bg-secondary"></td>`;
                } else {
                    if (j === 5 || j === 6) {
                        row.innerHTML += '<td class="bg-secondary"></td>'; // No agregar radio botón para sábado y domingo
                    } else {
                        row.innerHTML += `<td><label><input type="checkbox" name="daysWorked" value="${dayCounter}">${dayCounter}</label></td>`;
                    }
                }
                dayCounter++;
            }
        }
        monthDays.appendChild(row);
        if (dayCounter > daysInMonth) break; // Salir del ciclo si ya no hay más días en el mes
    }

    // Calcular días no trabajados
    const checkboxes = document.querySelectorAll('input[name="daysWorked"]');
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            const workedDays = document.querySelectorAll('input[name="daysWorked"]:checked').length;
            const totalDays = checkboxes.length;
            const absentDays = totalDays - workedDays;
            document.getElementById('attendanceSummary').innerHTML = `
          <p>Días trabajados: ${workedDays}</p>
          <p>Días no trabajados: ${absentDays}</p>
          <div class="form-group">
            <div class="d-flex align-items-center mb-3">
                <label for="unjustifiedDays" class="pe-2">Inasistencias justificadas:</label>
                <div class="col-md-2">
                    <input type="number" class="form-control" id="unjustifiedDays" min="0" value="${absentDays}">
                </div>
            </div>
          </div>
        `;
        });
    });
});

document.getElementById('submitAttendance').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const subject = document.getElementById('subject').value;
    const month = document.getElementById('month').value;
    const campus = document.getElementById('campus').value;

    const checkboxes = document.querySelectorAll('input[name="daysWorked"]');
    let workedDays = [];
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            workedDays.push(checkbox.value);
        }
    });

    console.log('Días trabajados:', workedDays);
    // Aquí puedes agregar la lógica para enviar los datos a donde corresponda

    // Calcula los totales y porcentajes
    const totalDays = checkboxes.length;
    const totalWorkedDays = workedDays.length;
    const totalAbsentDays = totalDays - totalWorkedDays;
    const totalJustifiedAbsences = parseInt(document.getElementById('unjustifiedDays').value);

    const workedPercentage = (totalWorkedDays / totalDays) * 100;
    const absentPercentage = (totalAbsentDays / totalDays) * 100;
    const justifiedAbsencesPercentage = (totalJustifiedAbsences / totalAbsentDays) * 100;

    // Muestra el resumen
    document.getElementById('informe').innerHTML = `
    <h2 class="text-center">Registro de asistencia por mes</h2>
    <div class="d-flex flex-column flex-md-row p-4 align-items-center justify-content-center">
        <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                <div class="d-flex gap-2 w-100">
                    <div>
                        <h4 class="text-start">Datos del Docente</h4>
                        <p class="pe-3"><strong>Docente:</strong> ${name}</p>
                        <p><strong>Asignatura:</strong> ${subject}</p>
                        <div class="d-flex justify-content-start">
                            <p class="pe-3"><strong>Sede:</strong> ${campus}</p>
                            <p><strong>Mes:</strong> ${month}</p>
                        </div>
                    </div>
                </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                <div class="d-flex gap-2 w-100 justify-content-between">
                    <div>
                        <h4 class="text-start">Totales</h4>
                        <p><strong>Total de días a trabajar:</strong> ${totalDays} días</p>
                        <p><strong>Total de días trabajados:</strong> ${totalWorkedDays} de ${totalDays} días</p>
                        <p><strong>Total de días no trabajados:</strong> ${totalAbsentDays} de ${totalDays} días</p>
                        <p><strong>Total de inasistencias justificadas:</strong> ${totalJustifiedAbsences} de ${totalAbsentDays} días</p>
                    </div>
                </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                <div class="d-flex gap-2 w-100 justify-content-between">
                    <div>
                        <h4 class="text-start">Porcentajes</h4>
                        <p><strong>Porcentaje de días trabajados:</strong> ${workedPercentage.toFixed(2)}%</p>
                        <p><strong>Porcentaje de días no trabajados:</strong> ${absentPercentage.toFixed(2)}%</p>
                        <p><strong>Porcentaje de total inasistencias justificadas:</strong> ${justifiedAbsencesPercentage.toFixed(2)}%</p>
                    </div>
                </div>
            </a>
        </div>
    </div>   
    `;

    // Carga la tabla con las letras P y A
    const table = document.getElementById('tabla');
    table.innerHTML = '<h2 class="text-center pb-4">Tabla de Asistencia</h2>' +
        '<table class="table table-bordered border-dark">' +
        '<thead>' +
        '<tr>' +
        '<th>Lunes</th>' +
        '<th>Martes</th>' +
        '<th>Miércoles</th>' +
        '<th>Jueves</th>' +
        '<th>Viernes</th>' +
        '<th>Sábado</th>' +
        '<th>Domingo</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>' +
        // Genera la tabla con las letras P y A según los días trabajados
        '</tbody>' +
        '</table>';

    const tbody = table.querySelector('tbody');
    const monthDays = document.getElementById('monthDays');
    monthDays.innerHTML = ''; // Limpiar la tabla antes de generar los días

    const daysInMonth = new Date(2024, new Date(month + ' 1, 2024').getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(month + ' 1, 2024').getDay();

    if (firstDayOfMonth === 0) { // Domingo
        firstDayOfMonth = 7; // Convertir domingo (0) a 7
    }

    let dayCounter = 1;
    for (let i = 0; i < 5; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDayOfMonth - 1) {
                row.innerHTML += '<td class="bg-secondary bg-opacity-75"></td>';
            } else if (dayCounter > daysInMonth) {
                if (i !== 0) {
                    row.innerHTML += `<td class="second-month bg-secondary bg-opacity-75"></td>`;
                } else {
                    row.innerHTML += '<td class="bg-secondary bg-opacity-75"></td>';
                }
            } else {
                if (dayCounter > 31) {
                    row.innerHTML += `<td class="second-month bg-secondary bg-opacity-75"></td>`;
                } else {
                    if (j === 5 || j === 6) {
                        row.innerHTML += '<td class="bg-secondary bg-opacity-75"></td>';
                    } else {
                        if (workedDays.includes(dayCounter.toString())) {
                            row.innerHTML += '<td>P</td>'; // Letra P para días trabajados
                        } else {
                            row.innerHTML += '<td class="text-danger">A</td>'; // Letra A para días no trabajados
                        }
                    }
                }
                dayCounter++;
            }
        }
        tbody.appendChild(row);
        if (dayCounter > daysInMonth) break;
    }

    // Genera los gráficos
    document.getElementById('titulo').innerHTML = `<h2 class="text-center mb-3">Gráficas</h2>`;
    document.getElementById('graficas').innerHTML = `
    <div id="graficas" class="container">
        <div class="row contenedor-graficas">
            <div class="tarjetas-graficas col-4">
                <div class='porcentajes1 p-4' style="--porcentaje: ${workedPercentage.toFixed(2)}; --color: blue">
                    <svg width="150" height="150">
                    <circle r="65" cx="50%" cy="50%" pathlength="100" />
                    <circle r="65" cx="50%" cy="50%" pathlength="100" />
                    </svg>
                </div>
                <div class="card-body">
                    <span class="text-center text-primary"><b>${workedPercentage.toFixed(2)}%</b> Días Trabajados</span>
                </div>
            </div>
            <div class="tarjetas-graficas col-4">
                <div class='porcentajes2 p-4' style="--porcentaje: ${absentPercentage.toFixed(2)}; --color: red">
                    <svg width="150" height="150">
                    <circle r="65" cx="50%" cy="50%" pathlength="100" />
                    <circle r="65" cx="50%" cy="50%" pathlength="100" />
                    </svg>
                </div>
                <div class="card-body">
                    <span class="text-center text-danger"><b>${absentPercentage.toFixed(2)}%</b> Dias No Trabajados</span>
                </div>
            </div>
            <div class="tarjetas-graficas col-4">
                <div class='porcentajes3 p-4' style="--porcentaje: ${justifiedAbsencesPercentage.toFixed(2)}; --color: green">
                    <svg width="150" height="150">
                    <circle r="65" cx="50%" cy="50%" pathlength="100" />
                    <circle r="65" cx="50%" cy="50%" pathlength="100" />
                    </svg>
                </div>
                <div class="card-body">
                    <span class="text-center text-success"><b>${justifiedAbsencesPercentage.toFixed(2)}%</b> Inasistencias Justificadas</span>
                </div>
            </div>
        </div>
    </div>`

    //BOTON DE DESCARGAR
    document.getElementById('boton-descargar').innerHTML = `
        <div class="d-flex justify-content-center">
            <button type="button" class="btn btn-success mt-3 mb-5" onclick="descargar()">Descargar <i class="bi bi-download"></i></button>
        </div>
    `
});

//DESCARGAR
//Función para descargar la tabla en formato png
function descargar() {
    const tabla = document.getElementById("informe-general");

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

