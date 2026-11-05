document.write("<h2>Tehtävä 4:</h2>");

const nimi = prompt("Syötä oppilaan nimi lajittelua varten:");

// Arpoo kokonaisluvu väliltä 1-4
const tupaNumero = Math.floor(Math.random() * 4) + 1;
let tupa = "";

// Määrittää oppilaan tupa arvotun numeron perusteella
if (tupaNumero === 1) {
    tupa = "Rohkelikko";
} else if (tupaNumero === 2) {
    tupa = "Luihuinen";
} else if (tupaNumero === 3) {
    tupa = "Puuskupuh";
} else {
    tupa = "Korpinkynsi";
}

// Sylkee tulokset HTML-sivulle
document.write("<p>" + nimi + ", sinä olet " + tupa + ".</p>");
document.write("<hr>");