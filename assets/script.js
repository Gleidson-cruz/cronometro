const minutos = document.getElementById("minute");
const segundos = document.getElementById("seconds");
const mlSegundos = document.getElementById("milliseconds");
const inicarBtn = document.getElementById("iniciarBtn");
const pausarBtn = document.getElementById("pausarBtn");
const continuarBtn = document.getElementById("continuarBtn");
const resetarBtn = document.getElementById("resetarBtn");

let interval;
let valMinutos = 0;
let valSegundos = 0;
let valMlSegundos = 0;
let isPaused = false;


inicarBtn.addEventListener("click", function(){
    interval = setInterval(() => {

        function formatTime(time){
            return time < 10 ? `0${time}` : time;
        }

        function formatMlSeconds(time){
            return time < 100 ? `${time}`.padStart(3,"0") : time;
        }


        if(!isPaused) {
            valMlSegundos += 10;

            if(valMlSegundos === 1000) {
                valSegundos++;
                valMlSegundos = 0;
            }

            if(valSegundos === 60) {
                valMinutos++;
                valSegundos = 0;
            }

            minutos.textContent = formatTime(valMinutos);
            segundos.textContent = formatTime(valSegundos);
            mlSegundos.textContent = formatMlSeconds(valMlSegundos);
        }
    }, 10)

    inicarBtn.style.display = "none";
    pausarBtn.style.display = "block";
})

pausarBtn.addEventListener("click", function(){
    isPaused = true;
    pausarBtn.style.display = "none";
    continuarBtn.style.display = "Block";
})

continuarBtn.addEventListener("click", function(){
    isPaused = false;
    continuarBtn.style.display = "none";
    pausarBtn.style.display = "block";
});

resetarBtn.addEventListener("click", function(){
    clearInterval(interval);
    let valMinutos = 0;
    let valSegundos = 0;
    let valMlSegundos = 0;

    minutos.textContent = "00";
    segundos.textContent = "00";
    mlSegundos.textContent = "000";

    pausarBtn.style.display = "none";
    continuarBtn.style.display = "none";
    inicarBtn.style.display = "block";
})