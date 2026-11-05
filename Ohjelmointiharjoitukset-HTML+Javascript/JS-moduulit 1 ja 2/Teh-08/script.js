document.write("<h2>Tehtävä 8:</h2>");

// Kysytään käyttäjältä alku- ja loppuvuosi
const alkuvuosiStr = prompt("Syötä alkuvuosi:");
const loppuvuosiStr = prompt("Syötä loppuvuosi:");

// Muutetaan syötetyt arvot kokonaisluvuiksi
const alkuvuosi = parseInt(alkuvuosiStr);
const loppuvuosi = parseInt(loppuvuosiStr);

// Aloitetaan järjestämätön lista (ul)
document.write("<ul>");

// Käydään läpi kaikki vuodet annetulta väliltä (alkuvuosi ja loppuvuosi ovat mukana)
for (let vuosi = alkuvuosi; vuosi <= loppuvuosi; vuosi++) {
    
    // Tarkistetaan, onko kyseessä karkausvuosi
    if ((vuosi % 4 === 0 && vuosi % 100 !== 0) || (vuosi % 400 === 0)) {
        // Jos on, tulostetaan se listan alkiona (li)
        document.write("<li>" + vuosi + "</li>");
    }
}

// Suljetaan järjestämätön lista
document.write("</ul>");