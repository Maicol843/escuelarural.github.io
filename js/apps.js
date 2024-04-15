//CALENDARIO
var currentDate = new Date();
var currentMonth = currentDate.getMonth();
var currentYear = currentDate.getFullYear();
var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

function generateCalendar(month, year) {
    // Obtener el primer día del mes
    var firstDayOfMonth = new Date(year, month, 1);
    var startingDay = firstDayOfMonth.getDay();

    // Obtener el número de días en el mes
    var daysInMonth = new Date(year, month + 1, 0).getDate();

    // Crear el encabezado del calendario
    var calendarHTML = '<thead><tr>';
    calendarHTML += '</tr><tr><th>Lun</th><th>Mar</th><th>Mie</th><th>Jue</th><th>Vie</th><th>Sab</th><th>Dom</th></tr></thead><tbody>';

    // Llenar los espacios vacíos en el calendario
    var day = 1;
    var previousMonthDays = new Date(year, month, 0).getDate();
    for (var i = 0; i < 6; i++) {
        calendarHTML += '<tr>';
        for (var j = 0; j < 7; j++) {
            if (i === 0 && j < startingDay) {
                calendarHTML += '<td class="text-danger">' + (previousMonthDays - startingDay + j + 1) + '</td>';
            } else if (day > daysInMonth) {
                calendarHTML += '<td class="next-month text-danger">' + (day - daysInMonth) + '</td>';
                day++;
            } else {
                var dateString = year + '-' + (month + 1) + '-' + day;
                if (dateString === currentDate.toISOString().slice(0, 10)) {
                    calendarHTML += '<td class="bg-primary text-light">' + day + '</td>';
                } else {
                    calendarHTML += '<td>' + day + '</td>';
                }
                day++;
            }
        }
        calendarHTML += '</tr>';
    }

    calendarHTML += '</tbody>';
    document.getElementById('calendar').innerHTML = calendarHTML;
}

function showPreviousMonth() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    generateCalendar(currentMonth, currentYear);
    document.getElementById('month').innerHTML = months[currentMonth] + ' ' + currentYear;
}

function showNextMonth() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    generateCalendar(currentMonth, currentYear);
    document.getElementById('month').innerHTML = months[currentMonth] + ' ' + currentYear;
}

// Mostrar el calendario actual
generateCalendar(currentMonth, currentYear);
document.getElementById('month').innerHTML = months[currentMonth] + ' ' + currentYear;

// Manejadores de eventos para las flechas de navegación
document.getElementById('prevMonth').addEventListener('click', showPreviousMonth);
document.getElementById('nextMonth').addEventListener('click', showNextMonth);


//SECCION DE NOTICIAS
// Cargar noticias desde un feed RSS de JUJUY AL MOMENTO
fetch('https://www.jujuyalmomento.com/rss/jujuy.xml')
.then(response => response.text())
.then(str => new window.DOMParser().parseFromString(str, 'text/xml'))
.then(data => {
  const items = data.querySelectorAll('item');
  const newsContainer = document.getElementById('news');
  let newsHTML = '';
  items.forEach(item => {
    const title = item.querySelector('title').textContent;
    const description = item.querySelector('description').textContent;
    newsHTML += `<div class="card mt-3">
                  <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${description}</p>
                  </div>
                </div>`;
  });
  newsContainer.innerHTML = newsHTML;
})
.catch(err => console.error('Error cargando noticias:', err));

//CLIMA
// Cargar el clima de San Salvador de Jujuy
fetch('https://api.openweathermap.org/data/2.5/weather?q=San+Salvador+de+Jujuy&appid=43d45d73f95e5b069776a09b6e483fe1&lang=es&units=metric')
.then(response => response.json())
.then(data => {
  const weatherContainer = document.getElementById('weather');
  const temperature = data.main.temp;
  const humidity = data.main.humidity;
  const description = data.weather[0].description;
  const iconCode = data.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
  weatherContainer.innerHTML = `<div class="d-flex justify-content-center align-items-center"><img width="70" src="${iconUrl}" alt="Icono del clima"></div><p>Temperatura: ${temperature}°C</p><p>Humedad: ${humidity}%</p><p>Descripción: ${description}</p>`;
})
.catch(err => console.error('Error cargando el clima:', err));