// Otsikko
document.write("<h2>Tehtävä 6:</h2>");

// Näytetään vahvistusikkuna
const haluaaLaskea = confirm("Lasketaanko neliöjuuri?");

// Jos käyttäjä valitsee "OK", kysytään luku ja lasketaan neliöjuuri
if (haluaaLaskea) {
    const lukuStr = prompt("Syötä luku, jonka neliöjuuri lasketaan:");
    const luku = parseFloat(lukuStr); // Käytetään parseFloatia, jotta myös desimaaliluvut toimivat

    if (luku < 0) {
        document.write("<p>Negatiivisen luvun neliöjuurta ei ole määritelty.</p>");
    } else {
        const neliojuuri = Math.sqrt(luku);
        document.write("<p>Luvun " + luku + " neliöjuuri on " + neliojuuri + "</p>");
    }
// Jos käyttäjä valitsee "Peruuta", näytetään viesti, että neliöjuurta ei lasketa
} else {
    document.write("<p>Neliöjuurta ei lasketa.</p>");
}