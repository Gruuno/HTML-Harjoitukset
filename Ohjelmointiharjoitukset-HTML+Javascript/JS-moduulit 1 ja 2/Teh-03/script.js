document.write("<h2>Tehtävä 3:</h2>");

// Kysyy kolme lukua
const luku1Str = prompt("Syötä ensimmäinen kokonaisluku:");
const luku2Str = prompt("Syötä toinen kokonaisluku:");
const luku3Str = prompt("Syötä kolmas kokonaisluku:");

// Muuntaa merkkijonot kokonaisluvuiksi ennen laskemista
const luku1 = parseInt(luku1Str);
const luku2 = parseInt(luku2Str);
const luku3 = parseInt(luku3Str);

// Laskee lukujen summan, tulon ja keskiarvon
const summa = luku1 + luku2 + luku3;
const tulo = luku1 * luku2 * luku3;
const keskiarvo = summa / 3;

// Tulostaa tulokset HTML-sivulle
document.write("<p>Lukujen summa: " + summa + "</p>");
document.write("<p>Lukujen tulo: " + tulo + "</p>");
document.write("<p>Lukujen keskiarvo: " + keskiarvo + "</p>");