
// The cookies first:

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
// Cookies are linked with the switch mode function:
var css = 1;
function night_mode() {
    if (css == 0) {
        document.getElementById("day_mode").href = "style.css"
        setCookie("css", "jour", 5);
        css = 1
    }
    else {
        document.getElementById("day_mode").href = "style_nuit.css"
        setCookie("css", "nuit", 5);
        css = 0;
    }
    if (getCookie("css") == "nuit") {
        css = 1;
        night_mode();
    }
    else if (getCookie("css") == "jour") {
        css = 0;
        night_mode();
    }
}

night_mode();



// Now the AJAX part. This one is particularly important since the website is imagined around this technology:

function loadDoc(x, y) {
    var xhttp = new XMLHttpRequest();
    console.log(xhttp);
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(y).innerHTML =
                this.responseText;
        }
    };
    xhttp.open("GET", x, true);
    console.log(xhttp);
    xhttp.send();
}

// The function is ready. Now we have to call each different page onclick:
//TThe index
function index() {
    loadDoc("ajax/index.txt", "ajax_content");
    document.getElementsByTagName("title")[0].innerHTML = "Index";
}
//First menu
function histoire() {
    loadDoc("ajax/histoire.txt", "ajax_content");
    document.getElementsByTagName("title")[0].innerHTML = "L'histoire";
}
//Second menu
function link() {
    loadDoc("ajax/link.txt", "ajax_content");
    document.getElementsByTagName("title")[0].innerHTML = "Link";
}
function zelda() {
    loadDoc("ajax/zelda.txt", "ajax_content");
    document.getElementsByTagName("title")[0].innerHTML = "Zelda";
}
function prodige() {
    loadDoc("ajax/prodige.txt", "ajax_content");
    document.getElementsByTagName("title")[0].innerHTML = "Les prodiges";
}
function ganon() {
    loadDoc("ajax/ganon.txt", "ajax_content");
    document.getElementsByTagName("title")[0].innerHTML = "Ganon";
}
//Third menu
function hylien() {
    loadDoc("ajax/hylien.txt", "ajax_content");
    document.getElementsByTagName("title")[0].innerHTML = "Les Hyliens";
}
function sheikah() {
    loadDoc("ajax/sheikah.txt", "ajax_content");
    document.getElementsByTagName("title")[0].innerHTML = "Les Sheikahs";
}
function zora() {
    loadDoc("ajax/zora.txt", "ajax_content");
    document.getElementsByTagName("title")[0].innerHTML = "Les Zoras";
}
function goron() {
    loadDoc("ajax/goron.txt", "ajax_content");
    document.getElementsByTagName("title")[0].innerHTML = "Les Gorons";
}
function piaf() {
    loadDoc("ajax/piaf.txt", "ajax_content");
    document.getElementsByTagName("title")[0].innerHTML = "Les Piafs";
}
function gerudo() {
    loadDoc("ajax/gerudo.txt", "ajax_content");
    document.getElementsByTagName("title")[0].innerHTML = "Les Gerudos";
}
function korogu() {
    loadDoc("ajax/korogu.txt", "ajax_content");
    document.getElementsByTagName("title")[0].innerHTML = "Les Korogus";
}
//The last menu
function hyrule() {
    loadDoc("ajax/hyrule.txt", "ajax_content");
    document.getElementsByTagName("title")[0].innerHTML = "Hyrule";
}
//The about menu
function about() {
    loadDoc("ajax/about.txt", "ajax_content");
    document.getElementsByTagName("title")[0].innerHTML = "A propos";
}
