document.write("<h2>Tehtävä 9: Alkuluku</h2>");

// Kysyy käyttäjältä kokonaisluvun alkulukutarkistusta varten
const lukuStr = prompt("Syötä kokonaisluku alkulukutarkistusta varten:");
const luku = parseInt(lukuStr);
let onAlkuluku = true;

// Varmistaa että luku on suurempi kuin 1, koska 0 ja 1 eivät ole alkulukuja
if (luku <= 1) {
    onAlkuluku = false;
} else {
    // Tarkistaa, onko luku jaollinen millään luvulla 2:sta neliöjuureen asti
    for (let i = 2; i <= Math.sqrt(luku); i++) {
        if (luku % i === 0) {
            onAlkuluku = false; // Jos tasan jako löytyy, se ei ole alkuluku
            break;
        }
    }
}

// Tulostaa tuloksen HTML-sivulle
if (onAlkuluku) {
    document.write("<p>Luku " + luku + " on alkuluku.</p>");
} else {
    document.write("<p>Luku " + luku + " ei ole alkuluku.</p>");
}
document.write("<hr>");