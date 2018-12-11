let counter = 0;
let count = 0;
let name = "";
let baseStringQ = "<div class='d-flex justify-content-start mb-4'>" +
    "<div class='img_cont_msg' style='width: auto; float: right; text-align: right; margin-left: 25px'>" +
    "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQibRvBvJJRzCLKB7fflnW7W_J99BuUMMd_tj5mAO5_LIyBmnt9' class='rounded-circle user_img_msg'>" +
    "</div><div class='msg_cotainer'>";
let baseStringA = "<div class='d-flex justify-content-start mb-4'>" +
    "<div class='img_cont_msg'>" +
    "<img src='https://www.agencyportalservices.com/wp-content/uploads/sites/15/2016/03/avatar_helpdesk.png' class='rounded-circle user_img_msg'></div>" +
    "<div class='msg_cotainer'>";

function start(event) {
    if (event.keyCode === 13 || event.which === 13) {
        first();
        counter++;
    }
}

function first() {
    let q = document.getElementById("text").value;
    document.getElementById("text").value = null;
    if (counter === 0) {
        name = q;
        document.getElementById("container").innerHTML += " <link rel='stylesheet' href='../css/index.css'>" + baseStringQ + q + "</div>" +
            "</div>" + baseStringA +
            "Dag " + q + "<br>Met wat kan ik je vandaag van dienst zijn?</div></div>";
        counter++;
    } else {
        document.getElementById("container").innerHTML += baseStringQ + q + "</div></div>";
        questions(q);
    }
    gotoBottom();
}

function gotoBottom() {
    let element = document.getElementById("container");
    element.scrollTop = element.scrollHeight - element.clientHeight;
}

function questions(q) {
    switch (true) {
        case q.includes("Loon"):
        case q.includes("loon"):
        case q.includes("Geld"):
        case q.includes("geld"):
        case q.includes("betaling"):
        case q.includes("Betaling"):
            if(q.includes("Vakantiegeld") || q.includes("vakantiegeld")){
                vakantiegeld(q);
            }else {
                loon(q);
            }
            break;
        case q.includes("Hoe laat"):
        case q.includes("hoe laat"):
            beginnen(q);
            break;
        default:
            defaultMessage();
            break;
    }
}

function loon(q) {
    switch (true) {
        case q.includes("Rekening"):
        case q.includes("rekening"):
        case q.includes("Wanneer"):
        case q.includes("wanneer"):
            document.getElementById("container").innerHTML += baseStringA +
                "Jouw loon staat normaal gesproken ten laatste de 27ste van de maand op jouw rekening.</div></div>";
            break;
        case q.includes("Hoeveel"):
        case q.includes("hoeveel"):
            document.getElementById("container").innerHTML += baseStringA + "Op hoeveel je loon bedraagt kan ik jammer genoeg niet antwoorden, " +
                name + ".<br>De info is echter te lezen op uw loonfiche of in uw contract.<br>" +
                "Mocht je toch nog vragen hebben, aarzel dan niet om <a href='mailto:info@egovselect.be'>contact met ons</a> op te nemen.</div></div>";
            break;
        default:
            defaultMessage("loon");
            break;
    }
}

function defaultMessage(onderwerp) {
    if (count === 0) {
        document.getElementById("container").innerHTML += baseStringA +
            "Sorry " + name + ", Ik heb je vraag niet verstaan.<br>Je wou iets vragen over je " + onderwerp + "?</div></div>";
        count++;
    } else {
        document.getElementById("container").innerHTML += baseStringA +
            "Sorry " + name + ", Ik kan het antwoord op je vraag niet vinden.<br>" +
            "Neem <a href='mailto:info@egovselect.be'>contact met ons</a> op om alsnog een antwoord te krijgen op uw vraag.</div></div>";
        count = 0;
    }
}

function vakantiegeld(q) {
    switch (true) {
        case q.includes("Wanneer"):
        case q.includes("wanneer"):
            document.getElementById("container").innerHTML += baseStringA +
                "Het vakantiegeld wordt betaald tussen 2 mei en 30 juni van het vakantiejaar." +
                "Om de uitbetalingsperiode van uw vakantiegeld te kennen, kun je gebruik de toepassing <br><a href='https://www.rjv.fgov.be/nl/mijn-vakantierekening'>Mijn vakantierekening</a></div></div>";
            break;
        case q.includes("Hoeveel"):
        case q.includes("hoeveel"):
            document.getElementById("container").innerHTML += baseStringA +
                "Het vakantiegeld wordt berekend op basis van al uw prestaties en lonen van het jaar dat voorafgaat aan het vakantiejaar.<br>" +
                "Daarbij wordt rekening gehouden met alle werkgevers waar u als arbeider gewerkt heeft." +
                "Om het correcte bedrag te berekening kun je gebruik maken van <a href='https://www.rjv.fgov.be/nl/berekening-vakantiegeld'>deze tool</a> </div></div>";
            break;
        case q.includes("Hoe"):
        case q.includes("hoe"):
            document.getElementById("container").innerHTML += baseStringA +
                "Het vakantiegeld wordt uitbetaald door middel van:<br><ul><li>Overschrijving op een Belgisch rekeningnummer<br><a href='https://www.rjv.fgov.be/nl/mijn-rekeningnummer-meedelen#e287f7f0-0a0a-46e6-841e-753d28e50bd6'>" +
                "Deel hier uw rekeningnummer mee.</a></li><li>Overschrijving op een Buitenlands rekeningnummer<br><a href='https://www.rjv.fgov.be/nl/mijn-rekeningnummer-meedelen#089f0875-0757-4fe4-9496-b78f14e99a5d'>" +
                "Deel hier uw rekeningnummer mee.</a></li>" +
                "<li>Circulaire cheque (enkel in Belgi&#235;)<br><a href='https://www.rjv.fgov.be/nl/mijn-rekeningnummer-meedelen#f5bc3720-6224-4c29-a105-72a2f9180e84'>" +
                "Bekijk hier de details.</a></li></div></div>";
            break;
        default:
            defaultMessage("vakantiegeld");
            break;
    }
}

function beginnen(q){
    switch (true) {
        case q.includes("Beginnen"):
        case q.includes("beginnen"):
            document.getElementById("container").innerHTML += baseStringA + "Hoe laat je moet beginnen hangt af van de dienst waar je te werk gesteld bent.<br>" +
                "Over het algemeen is dat rond 9u.</div><div>";
            break;
        case q.includes("Gedaan"):
        case q.includes("gedaan"):
            document.getElementById("container").innerHTML += baseStringA + "Hoe laat je gedaan hebt hangt af van de dienst waar je te werk gesteld bent en van hoe laat je gestart bent.<br>" +
                "Meeste werknemers stoppen tussen 16 en 17u.</div><div>";
        default:
            defaultMessage("werktijden");
    }
}