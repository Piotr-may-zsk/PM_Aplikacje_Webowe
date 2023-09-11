function f1(a, b) {
    let p = document.createElement('p');
    p.innerText = "Ulubioną liczbą osoby urodzonej w "+a+" roku jest " + b;
    document.body.appendChild(p);
}

function f2() {
    let data = prompt("Padaj data urodzenia (dd-mm-yyyy)");
    let liczba = Number(prompt("Padaj ulubioną liczbe"));
    let pattern = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
    
    if (data.match(pattern)){
        let rok = data.slice(-4);
        let day = data.slice(0,2);
        let month = data.slice(3,5);
        console.log(rok);
        if (rok > 1920 && day < 32 && day > 0 && month < 13 && month > 0 && rok < 2023 ){
            if (liczba != 69 && liczba != 2137 && liczba != 420){
                f1(data, liczba);
            }
        }
    } else {
        alert("Nieprawidłowe dane");
    }
}
// f2();
setTimeout(f2, 60000);