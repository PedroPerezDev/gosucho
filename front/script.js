var btnSwith = document.getElementById("switch");

btnSwith.addEventListener('click', ()=>{
    document.body.classList.toggle("light");
    btnSwith.classList.toggle("active");
})