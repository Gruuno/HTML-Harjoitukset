// Otsikko
document.write("<h2>Tehtävä 7:</h2>");

// Kysyy käyttäjältä, kuinka monta kertaa noppaa heitetään
const heitotStr = prompt("Montako kertaa noppaa heitetään?");
const heitotMaara = parseInt(heitotStr);
let silmalukujenSumma = 0;

// Heitetään noppaa annetun määrän verran ja lasketaan silmälukujen summa
for (let i = 0; i < heitotMaara; i++) {
    // Arvotaan silmäluku väliltä 1-6
    const silmaluku = Math.floor(Math.random() * 6) + 1;
    silmalukujenSumma += silmaluku;
}

// Heittää summan HTML sivulle
document.write("<p>Heitit noppaa " + heitotMaara + " kertaa.</p>");
document.write("<p>Silmälukujen yhteissumma on: <strong>" + silmalukujenSumma + "</strong></p>");
document.write("<hr>");