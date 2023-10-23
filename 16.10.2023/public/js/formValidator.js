const  form = document.getElementById("form")
form.addEventListener("submit", (ev)=> {
    alert('nie można wysłać formularza')
    ev.preventDefault();
})

