document.write("<h2>Tehtävä 5:</h2>");

const vuosiStr = prompt("Syötä vuosiluku:");
const vuosi = parseInt(vuosiStr);
let onKarkausvuosi = false;

// Karkausvuoden tarkistus. Simppelisti, jos vuosi on jaollinen 4:llä, mutta ei 100:lla, tai jos se on jaollinen 400:lla, niin se on karkausvuosi.
if ((vuosi % 4 === 0 && vuosi % 100 !== 0) || (vuosi % 400 === 0)) {
    onKarkausvuosi = true;
}

// Tulostaa tulokset HTML-sivulle
if (onKarkausvuosi) {
    document.write("<p>Vuosi " + vuosi + " on karkausvuosi.</p>");
} else {
    document.write("<p>Vuosi " + vuosi + " ei ole karkausvuosi.</p>");
}
document.write("<hr>");