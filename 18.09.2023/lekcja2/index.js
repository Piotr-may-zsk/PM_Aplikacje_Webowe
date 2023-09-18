const readline = require('readline')
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let liczba1;
let liczba2;

console.log("Program wyswietlajacy wyniki dzielenia poteg liczb")

read.question(`Podaj liczbe 1: `, x => {
    read.question(`Podaj liczbe 2: `, y => {
        read.question(`Podaj liczbe poteg: `, z => {
            liczba1 = parseInt(x);
            console.log(`Liczba 1 to  ${liczba1}!`);
            liczba2 = parseInt(y);
            z = parseInt(z);
            console.log(`Liczba 2 to ${liczba2}!`);
            for (let i = 1; i <= z; i++) {
                const wynik = liczba1 / liczba2;
                console.log(`Potega ${i}, liczba 1: ${liczba1}, liczba 2: ${liczba2} wynik: ${wynik}`);
                liczba1 *= liczba1;
                liczba2 *= liczba2;
            }
            read.close();
        });
    });
});

read.on("close", function () {
    console.log("\nDo widzenia !!!");
    process.exit(0);
});

