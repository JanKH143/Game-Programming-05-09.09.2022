//   <div id="herz"></div>

var aktuelleHerzen;
var counter;

function herzenErstllen(anzahlHerzen){
    anzahl = anzahlHerzen;
    for (counter = 0; counter < anzahl; counter++) {
        displayHerz(true);
    }
    aktuelleHerzen = anzahlHerzen;
    return aktuelleHerzen;
}

function herzEntfernen(anzahl){ // Es können nicht mehrere Herzen zeitgleich abgezogen werden (for Schleife fehlt)
    console.log("Zuvor - " + aktuelleHerzen +" "+ anzahl)
    aktuelleHerzen = aktuelleHerzen - anzahl;
    displayHerz(false);
}

function displayHerz(hinzu){
    if(hinzu == true){
        $('#herz').append('<div class="herz" id="herz' + counter + '"></div>');
    }else if (hinzu == false){
        $(('#herz' + aktuelleHerzen)).remove();
    }else {
        console.log("Irgendwas ist schiefgelaufen (True-> hinzufügen, false-> entfernen)");
    }
}
