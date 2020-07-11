document.addEventListener('DOMContentLoaded',()=>{
    'use strict'

// SHOW MENU

    function showMenu(event){
        event.preventDefault()
        document.querySelector('.nav-menu').classList.toggle('js-show')
        let botonMenu = document.querySelector('#btn-menu')
        if(botonMenu.innerHTML==='<i class="far fa-circle"></i>'){
            botonMenu.innerHTML = '<i class="fas fa-circle"></i>'
        }else{
            botonMenu.innerHTML = '<i class="far fa-circle"></i>'
        }
    }
    document.getElementById('btn-menu').addEventListener('click',showMenu)
    document.getElementById('btn-invisible').addEventListener('click',showMenu)

// CUENTA REGRESIVAS

    function cuentaRegresiva(){
        let end = new Date('07/13/2020 0:00 AM');
        let _second = 1000;
        let _minute = _second * 60;
        let _hour = _minute * 60;
        let _day = _hour * 24;
        let timer;
        let fechaDias = document.getElementById('cuentaDias');
        let fechaHoras = document.getElementById('cuentaHoras');
        function showRemaining() {
            let now = new Date();
            let distance = end - now;
            if (distance < 0) {
                clearInterval(timer);
                fechaDias.innerHTML = 'EXPIRED!';
                return;
            }
            let days = Math.floor(distance / _day);
            let hours = Math.floor((distance % _day) / _hour);
            let minutes = Math.floor((distance % _hour) / _minute);
            let seconds = Math.floor((distance % _minute) / _second);
            if(days===1){
                fechaDias.innerHTML = days + ' DÍA';
            }else if(days===0){
                fechaDias.innerHTML = '';
            }else if(days>1){
                fechaDias.innerHTML = days + ' DÍAS';
            }
            fechaHoras.innerHTML = hours + ' hr ';
            fechaHoras.innerHTML += minutes + `' `;
            fechaHoras.innerHTML += seconds + `''`;
        }
        timer = setInterval(showRemaining, 1000);
    }
    cuentaRegresiva()

})