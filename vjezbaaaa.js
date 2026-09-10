//zad1
console.log("hello world");
//zad2
let broj1 = 7;
let broj2 = 5;
let zbroj = broj1 + broj2;
console.log("Zbroj je: " + zbroj);
//zad3
function kvadrat(broj) {
    return broj * broj;
}
console.log(kvadrat(6));
//zad4
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
//zad5
let uneseniBroj = prompt("Unesite broj:");
uneseniBroj = Number(uneseniBroj);

if (uneseniBroj % 2 === 0) {
    console.log("Broj je paran.");
} else {
    console.log("Broj je neparan.");
}
//zad6
let nizBrojeva =1;
let ukupniZbroj = nizBrojeva[0] + nizBrojeva[1] + nizBrojeva[2];
console.log("Zbroj niza je: " + ukupniZbroj);
//zad7
let a = 15;
let b = 42;
let c = 23;

let najveci = Math.max(a, b, c);
console.log("Najveći broj je: " + najveci);
//zad8
function prebrojiSamoglasnike(tekst) {
    let brojac = 0;
    let samoglasnici = "aeiouAEIOU";
    
    for (let i = 0; i < tekst.length; i++) {
        if (samoglasnici.includes(tekst[i])) {
            brojac++;
        }
    }
    return brojac;
}
console.log(prebrojiSamoglasnike("Programiranje"));
//zad9