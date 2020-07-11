document.addEventListener('DOMContentLoaded',()=>{
    'use strict'

    function mostrarMenu(){
        document.querySelector('.nav-menu').classList.toggle('js-show')
    }
    document.getElementById('btn-menu').addEventListener('click',mostrarMenu)
    document.getElementById('btn-invisible').addEventListener('click',mostrarMenu)
})