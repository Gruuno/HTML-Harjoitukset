// Otsikko
document.write("<h2>Tehtävä 10:</h2>");

// Kysytään käyttäjältä noppien lukumäärä ja silmälukujen summa
const noppienMaara = parseInt(prompt("Syötä noppien lukumäärä:"));
const tavoiteSumma = parseInt(prompt("Syötä silmälukujen summa, josta olet kiinnostunut:"));

// Kuinka monta kertaa simulaatiota suoritetaan
const simulaatiot = 100000; 
let osumat = 0;

// Suorittaa simulaatio määritellyn määrän kertoja
for (let i = 0; i < simulaatiot; i++) {
    let tuskertaSumma = 0;
    
    // Heittää noppaa 'noppienMaara' kertaa ja lasketaan silmälukujen summa
    for (let j = 0; j < noppienMaara; j++) {
        const silmaluku = Math.floor(Math.random() * 6) + 1;
        tuskertaSumma += silmaluku;
    }
    
    // Jos silmälukujen summa on yhtä suuri kuin tavoiteSumma, kasvatetaan osumien määrää
    if (tuskertaSumma === tavoiteSumma) {
        osumat++;
    }
}

// Laskee todennäköisyyden prosentteina
const todennakoisyys = (osumat / simulaatiot) * 100;

// Tulostetaan tulos käyttäen toFixed(2) -metodia kahden desimaalin tarkkuudelle
document.write("<p>Todennäköisyys saada summa " + tavoiteSumma + ", " + noppienMaara + " nopalla on " + todennakoisyys.toFixed(2) + "%</p>");
