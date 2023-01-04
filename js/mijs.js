const $fecha = document.querySelector('.info');

function FechaActual(){
    let f = new Date(),
    dia = f.getDate(),
    mes = f.getMonth(),
    anio = f.getFullYear(),
    diaSemana = f.getDay();

    dia= (0+dia).slice(-2);
    mes= (0+mes).slice(-2);

    let Semana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
    let showSemana = (semana[diaSemana])
    $fecha.innerHTML = '${showSemana} ${dia}-${mes}-${anio}'
}