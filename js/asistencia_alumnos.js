function asistencia() {
    //Año, División y Turno
    let anyo = document.getElementById("curso").value;
    let division = document.getElementById("division").value;
    let turno = document.getElementById("turno").value;

    document.getElementById("asistencia").innerHTML =
        `<div class="container">
            <div class="d-flex justify-content-center">
                <p class="p-1"><b>AÑO: </b>${anyo}</p>
                <p class="p-1"><b>DIVISIÓN: </b> ${division}</p>
                <p class="p-1"><b>TURNO: </b> ${turno}</p>
            </div>
            <div class="text-center mb-5"><p>Corresponde al mes de ${mes.value} de 2023</p></div>
     
    </div>`
}

//Formulario de Datos del Alumno
const form3 = document.getElementById('datos');

form3.addEventListener("submit", function (event) {
    event.preventDefault();
    let libroFormData = new FormData(form3);
    insertar1(libroFormData);
    insertar2(libroFormData);
    insertar3(libroFormData);

    form3.reset(); //Resetea y vuelve al estado inicial del formulario
})

//Función de los datos de asistencias diaria del alumno
function insertar1(libroFormData) {
    let tableRef3 = document.getElementById("tablaAsistencia-1");
    let newTransactionRow3 = tableRef3.insertRow(-1);

    let newTransactionCell3 = newTransactionRow3.insertCell(0);
    newTransactionCell3.textContent = libroFormData.get("nroOrden-3");

    newTransactionCell3 = newTransactionRow3.insertCell(1);
    newTransactionCell3.textContent = libroFormData.get("NyA-3");

    newTransactionCell3 = newTransactionRow3.insertCell(2);
    newTransactionCell3.textContent = libroFormData.get("asistencia1"); //1

    newTransactionCell3 = newTransactionRow3.insertCell(3);
    newTransactionCell3.textContent = libroFormData.get("asistencia2"); //2 

    newTransactionCell3 = newTransactionRow3.insertCell(4);
    newTransactionCell3.textContent = libroFormData.get("asistencia3"); //3

    newTransactionCell3 = newTransactionRow3.insertCell(5);
    newTransactionCell3.textContent = libroFormData.get("asistencia4"); //4

    newTransactionCell3 = newTransactionRow3.insertCell(6);
    newTransactionCell3.textContent = libroFormData.get("asistencia5"); //5

    newTransactionCell3 = newTransactionRow3.insertCell(7);
    newTransactionCell3.textContent = libroFormData.get("asistencia6"); //6

    newTransactionCell3 = newTransactionRow3.insertCell(8);
    newTransactionCell3.textContent = libroFormData.get("asistencia7"); //7

    newTransactionCell3 = newTransactionRow3.insertCell(9);
    newTransactionCell3.textContent = libroFormData.get("asistencia8"); //8

    newTransactionCell3 = newTransactionRow3.insertCell(10);
    newTransactionCell3.textContent = libroFormData.get("asistencia9"); //9

    newTransactionCell3 = newTransactionRow3.insertCell(11);
    newTransactionCell3.textContent = libroFormData.get("asistencia10"); //10
}

function insertar2(libroFormData) {
    let tableRef3 = document.getElementById("tablaAsistencia-2");
    let newTransactionRow3 = tableRef3.insertRow(-1);

    newTransactionCell3 = newTransactionRow3.insertCell(0);
    newTransactionCell3.textContent = libroFormData.get("asistencia11"); //11

    newTransactionCell3 = newTransactionRow3.insertCell(1);
    newTransactionCell3.textContent = libroFormData.get("asistencia12"); //12

    newTransactionCell3 = newTransactionRow3.insertCell(2);
    newTransactionCell3.textContent = libroFormData.get("asistencia13"); //13

    newTransactionCell3 = newTransactionRow3.insertCell(3);
    newTransactionCell3.textContent = libroFormData.get("asistencia14"); //14

    newTransactionCell3 = newTransactionRow3.insertCell(4);
    newTransactionCell3.textContent = libroFormData.get("asistencia15"); //15

    newTransactionCell3 = newTransactionRow3.insertCell(5);
    newTransactionCell3.textContent = libroFormData.get("asistencia16"); //16

    newTransactionCell3 = newTransactionRow3.insertCell(6);
    newTransactionCell3.textContent = libroFormData.get("asistencia17"); //17

    newTransactionCell3 = newTransactionRow3.insertCell(7);
    newTransactionCell3.textContent = libroFormData.get("asistencia18"); //18

    newTransactionCell3 = newTransactionRow3.insertCell(8);
    newTransactionCell3.textContent = libroFormData.get("asistencia19"); //19

    newTransactionCell3 = newTransactionRow3.insertCell(9);
    newTransactionCell3.textContent = libroFormData.get("asistencia20"); //20

    newTransactionCell3 = newTransactionRow3.insertCell(10);
    newTransactionCell3.textContent = libroFormData.get("asistencia21"); //21

    newTransactionCell3 = newTransactionRow3.insertCell(11);
    newTransactionCell3.textContent = libroFormData.get("asistencia22"); //22

    newTransactionCell3 = newTransactionRow3.insertCell(12);
    newTransactionCell3.textContent = libroFormData.get("asistencia23"); //23

    newTransactionCell3 = newTransactionRow3.insertCell(13);
    newTransactionCell3.textContent = libroFormData.get("asistencia24"); //24

    newTransactionCell3 = newTransactionRow3.insertCell(14);
    newTransactionCell3.textContent = libroFormData.get("asistencia25"); //25

    newTransactionCell3 = newTransactionRow3.insertCell(15);
    newTransactionCell3.textContent = libroFormData.get("asistencia26"); //26

    newTransactionCell3 = newTransactionRow3.insertCell(16);
    newTransactionCell3.textContent = libroFormData.get("asistencia27"); //27

    newTransactionCell3 = newTransactionRow3.insertCell(17);
    newTransactionCell3.textContent = libroFormData.get("asistencia28"); //28

    newTransactionCell3 = newTransactionRow3.insertCell(18);
    newTransactionCell3.textContent = libroFormData.get("asistencia29"); //29

    newTransactionCell3 = newTransactionRow3.insertCell(19);
    newTransactionCell3.textContent = libroFormData.get("asistencia30"); //30

    newTransactionCell3 = newTransactionRow3.insertCell(20);
    newTransactionCell3.textContent = libroFormData.get("asistencia31"); //31 

}

function insertar3(libroFormData) {
    let tableRef4 = document.getElementById("tablaAsistencia-3");
    let newTransactionRow4 = tableRef4.insertRow(-1);

    let newTransactionCell4 = newTransactionRow4.insertCell(0);
    newTransactionCell4.textContent = totalAsistencia();

    newTransactionCell4 = newTransactionRow4.insertCell(1);
    newTransactionCell4.textContent = libroFormData.get("justificadas");

    newTransactionCell4 = newTransactionRow4.insertCell(2);
    newTransactionCell4.textContent = totalInjustificadas();

    newTransactionCell4 = newTransactionRow4.insertCell(3);
    newTransactionCell4.textContent = libroFormData.get("anterior");

    newTransactionCell4 = newTransactionRow4.insertCell(4);
    newTransactionCell4.textContent = total();

    newTransactionCell4 = newTransactionRow4.insertCell(5);
    newTransactionCell4.textContent = libroFormData.get("amonestaciones");

    newTransactionCell4 = newTransactionRow4.insertCell(6);
    newTransactionCell4.textContent = libroFormData.get("observaciones");

    //BOTON DE DESCARGAR
    document.getElementById('boton-descargar').innerHTML = `
    <div class="d-flex justify-content-center">
        <button type="button" class="btn btn-success" onclick="descargar()">Descargar <i class="bi bi-table"></i></button>
    </div>
   `
}

function totalAsistencia() {
    let suma = 0;

    let asistencia1 = document.getElementById('asistencia1').value;
    if ((asistencia1 === 'P') && (asistencia1 !== 'A')) {
        suma = suma + 1;
    }

    let asistencia2 = document.getElementById('asistencia2').value;
    if ((asistencia2 === 'P') && (asistencia2 !== 'A')) {
        suma = suma + 1;
    }

    let asistencia3 = document.getElementById('asistencia3').value;
    if ((asistencia3 === 'P') && (asistencia3 !== 'A')) {
        suma = suma + 1;
    }

    let asistencia4 = document.getElementById('asistencia4').value;
    if ((asistencia4 === 'P') && (asistencia4 !== 'A')) {
        suma = suma + 1;
    }

    let asistencia5 = document.getElementById('asistencia5').value;
    if ((asistencia5 === 'P') && (asistencia5 !== 'A')) {
        suma = suma + 1;
    }

    let asistencia6 = document.getElementById('asistencia6').value;
    if ((asistencia6 === 'P') && (asistencia6 !== 'A')) {
        suma = suma + 1;
    }

    let asistencia7 = document.getElementById('asistencia7').value;
    if ((asistencia7 === 'P') && (asistencia7 !== 'A')) {
        suma = suma + 1;
    }

    let asistencia8 = document.getElementById('asistencia8').value;
    if ((asistencia8 === 'P') && (asistencia8 !== 'A')) {
        suma = suma + 1;
    }

    let asistencia9 = document.getElementById('asistencia9').value;
    if ((asistencia9 === 'P') && (asistencia9 !== 'A')) {
        suma = suma + 1;
    }

    let asistencia10 = document.getElementById('asistencia10').value;
    if ((asistencia10 === 'P') && (asistencia10 !== 'A')) {
        suma = suma + 1;
    }

    let asistencia11 = document.getElementById('asistencia11').value;
    if ((asistencia11 === 'P') && (asistencia11 !== 'A')) {
        suma = suma + 1;
    }

    let asistencia12 = document.getElementById('asistencia12').value;
    if ((asistencia12 === 'P') && (asistencia12 !== 'A')) {
        suma = suma + 1;
    }

    let asistencia13 = document.getElementById('asistencia13').value;
    if ((asistencia13 === 'P') && (asistencia13 !== 'A')) {
        suma = suma + 1;
    }

    let asistencia14 = document.getElementById('asistencia14').value;
    if ((asistencia14 === 'P') && (asistencia14 !== 'A')) {
        suma = suma + 1;
    }

    let asistencia15 = document.getElementById('asistencia15').value;
    if ((asistencia15 === 'P') && (asistencia15 !== 'A')) {
        suma = suma + 1;
    }

    let asistencia16 = document.getElementById('asistencia16').value;
    if ((asistencia16 === 'P') && (asistencia16 !== 'A')) {
        suma = suma + 1;
    }

    let asistencia17 = document.getElementById('asistencia17').value;
    if ((asistencia17 === 'P') && (asistencia17 !== 'A')) {
        suma = suma + 1;
    }

    let asistencia18 = document.getElementById('asistencia18').value;
    if ((asistencia18 === 'P') && (asistencia18 !== 'A')) {
        suma = suma + 1;
    }

    let asistencia19 = document.getElementById('asistencia19').value;
    if ((asistencia19 === 'P') && (asistencia19 !== 'A')) {
        suma = suma + 1;
    }

    let asistencia20 = document.getElementById('asistencia20').value;
    if ((asistencia20 === 'P') && (asistencia20 !== 'A')) {
        suma = suma + 1;
    }

    let asistencia21 = document.getElementById('asistencia21').value;
    if ((asistencia21 === 'P') && (asistencia21 !== 'A')) {
        suma = suma + 1;
    }

    let asistencia22 = document.getElementById('asistencia22').value;
    if ((asistencia22 === 'P') && (asistencia22 !== 'A')) {
        suma = suma + 1;
    }

    let asistencia23 = document.getElementById('asistencia23').value;
    if ((asistencia23 === 'P') && (asistencia23 !== 'A')) {
        suma = suma + 1;
    }

    let asistencia24 = document.getElementById('asistencia24').value;
    if ((asistencia24 === 'P') && (asistencia24 !== 'A')) {
        suma = suma + 1;
    }

    let asistencia25 = document.getElementById('asistencia25').value;
    if ((asistencia25 === 'P') && (asistencia25 !== 'A')) {
        suma = suma + 1;
    }

    let asistencia26 = document.getElementById('asistencia26').value;
    if ((asistencia26 === 'P') && (asistencia26 !== 'A')) {
        suma = suma + 1;
    }

    let asistencia27 = document.getElementById('asistencia27').value;
    if ((asistencia27 === 'P') && (asistencia27 !== 'A')) {
        suma = suma + 1;
    }

    let asistencia28 = document.getElementById('asistencia28').value;
    if ((asistencia28 === 'P') && (asistencia28 !== 'A')) {
        suma = suma + 1;
    }

    let asistencia29 = document.getElementById('asistencia29').value;
    if ((asistencia29 === 'P') && (asistencia29 !== 'A')) {
        suma = suma + 1;
    }

    let asistencia30 = document.getElementById('asistencia30').value;
    if ((asistencia30 === 'P') && (asistencia30 !== 'A')) {
        suma = suma + 1;
    }

    let asistencia31 = document.getElementById('asistencia31').value;
    if ((asistencia31 === 'P') && (asistencia31 !== 'A')) {
        suma = suma + 1;
    }
    return suma;
}

function totalInasistencia() {
    let ausente = 0;

    let asistencia1 = document.getElementById('asistencia1').value;
    if (asistencia1 === 'A') {
        ausente = ausente + 1;
    }

    let asistencia2 = document.getElementById('asistencia2').value;
    if (asistencia2 === 'A') {
        ausente = ausente + 1;
    }

    let asistencia3 = document.getElementById('asistencia3').value;
    if (asistencia3 === 'A') {
        ausente = ausente + 1;
    }

    let asistencia4 = document.getElementById('asistencia4').value;
    if (asistencia4 === 'A') {
        ausente = ausente + 1;
    }

    let asistencia5 = document.getElementById('asistencia5').value;
    if (asistencia5 === 'A') {
        ausente = ausente + 1;
    }

    let asistencia6 = document.getElementById('asistencia6').value;
    if (asistencia6 === 'A') {
        ausente = ausente + 1;
    }

    let asistencia7 = document.getElementById('asistencia7').value;
    if (asistencia7 === 'A') {
        ausente = ausente + 1;
    }

    let asistencia8 = document.getElementById('asistencia8').value;
    if (asistencia8 === 'A') {
        ausente = ausente + 1;
    }

    let asistencia9 = document.getElementById('asistencia9').value;
    if (asistencia9 === 'A') {
        ausente = ausente + 1;
    }

    let asistencia10 = document.getElementById('asistencia10').value;
    if (asistencia10 === 'A') {
        ausente = ausente + 1;
    }

    let asistencia11 = document.getElementById('asistencia11').value;
    if (asistencia11 === 'A') {
        ausente = ausente + 1;
    }

    let asistencia12 = document.getElementById('asistencia12').value;
    if (asistencia12 === 'A') {
        ausente = ausente + 1;
    }

    let asistencia13 = document.getElementById('asistencia13').value;
    if (asistencia13 === 'A') {
        ausente = ausente + 1;
    }

    let asistencia14 = document.getElementById('asistencia14').value;
    if (asistencia14 === 'A') {
        ausente = ausente + 1;
    }

    let asistencia15 = document.getElementById('asistencia15').value;
    if (asistencia15 === 'A') {
        ausente = ausente + 1;
    }

    let asistencia16 = document.getElementById('asistencia16').value;
    if (asistencia16 === 'A') {
        ausente = ausente + 1;
    }

    let asistencia17 = document.getElementById('asistencia17').value;
    if (asistencia17 === 'A') {
        ausente = ausente + 1;
    }

    let asistencia18 = document.getElementById('asistencia18').value;
    if (asistencia18 === 'A') {
        ausente = ausente + 1;
    }

    let asistencia19 = document.getElementById('asistencia19').value;
    if (asistencia19 === 'A') {
        ausente = ausente + 1;
    }

    let asistencia20 = document.getElementById('asistencia20').value;
    if (asistencia20 === 'A') {
        ausente = ausente + 1;
    }

    let asistencia21 = document.getElementById('asistencia21').value;
    if (asistencia21 === 'A') {
        ausente = ausente + 1;
    }

    let asistencia22 = document.getElementById('asistencia22').value;
    if (asistencia22 === 'A') {
        ausente = ausente + 1;
    }

    let asistencia23 = document.getElementById('asistencia23').value;
    if (asistencia23 === 'A') {
        ausente = ausente + 1;
    }

    let asistencia24 = document.getElementById('asistencia24').value;
    if (asistencia24 === 'A') {
        ausente = ausente + 1;
    }

    let asistencia25 = document.getElementById('asistencia25').value;
    if (asistencia25 === 'A') {
        ausente = ausente + 1;
    }

    let asistencia26 = document.getElementById('asistencia26').value;
    if (asistencia26 === 'A') {
        ausente = ausente + 1;
    }

    let asistencia27 = document.getElementById('asistencia27').value;
    if (asistencia27 === 'A') {
        ausente = ausente + 1;
    }

    let asistencia28 = document.getElementById('asistencia28').value;
    if (asistencia28 === 'A') {
        ausente = ausente + 1;
    }

    let asistencia29 = document.getElementById('asistencia29').value;
    if (asistencia29 === 'A') {
        ausente = ausente + 1;
    }

    let asistencia30 = document.getElementById('asistencia30').value;
    if (asistencia30 === 'A') {
        ausente = ausente + 1;
    }

    let asistencia31 = document.getElementById('asistencia31').value;
    if (asistencia31 === 'A') {
        ausente = ausente + 1;
    }

    return ausente;
}

function totalInjustificadas() {
    let ausente = totalInasistencia();
    let justificado = document.getElementById('justificadas').value;
    let injustificadas = 0;

    if ((ausente > justificado) && (ausente !== 0)) {
        injustificadas = injustificadas + (parseInt(ausente) - parseInt(justificado));
    }
    return (injustificadas);
}

function total() {
    let anterior = document.getElementById('anterior').value;
    let totalAusente = totalInasistencia();
    let total = 0;

    total = total + parseInt(totalAusente) + parseInt(anterior);

    return total;
}

//DESCARGAR
//Función para descargar la tabla en formato png
function descargar() {
    const tabla = document.getElementById("tablaAsistencia-Alumnos");

    // Utilizar html2canvas para capturar la tabla como imagen
    html2canvas(tabla).then(function (canvas) {
        // Crear un enlace para descargar la imagen
        const enlace = document.createElement("a");
        enlace.href = canvas.toDataURL("image/png");
        enlace.download = "Tabla de Asistencia de Alumnos.png";

        // Simular un clic en el enlace para iniciar la descarga
        enlace.click();
    });
}