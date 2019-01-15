
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
var css = 0;
function night_mode() {
    if (css == 0) {
        document.getElementById("day_mode").href = "style_nuit.css"
        setCookie("css", "nuit", 2000);
        css = 1
    }
    else {
        document.getElementById("day_mode").href = "style.css"
        setCookie("css", "jour", 2000);
        css = 0;
    }

    if (getCookie("css") == "nuit") {
        css = 0;
        night_mode();
    }
    else if (getCookie("css") == "jour") {
        css = 1;
        night_mode();
    }
}

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
}
//First menu
function histoire() {
    loadDoc("ajax/histoire.txt", "ajax_content");
}
//Second menu
function link() {
    loadDoc("ajax/link.txt", "ajax_content");
}
function zelda() {
    loadDoc("ajax/zelda.txt", "ajax_content");
}
function prodige() {
    loadDoc("ajax/prodige.txt", "ajax_content");
}
function ganon() {
    loadDoc("ajax/ganon.txt", "ajax_content");
}
//Third menu
function hylien(){
    loadDoc("ajax/hylien.txt","ajax_content");
}
function sheikah(){
    loadDoc("ajax/sheikah.txt","ajax_content");
}
function zora(){
    loadDoc("ajax/zora.txt","ajax_content");
}
function goron(){
    loadDoc("ajax/goron.txt","ajax_content");
}
function piaf(){
    loadDoc("ajax/piaf.txt","ajax_content");
}
function gerudo(){
    loadDoc("ajax/gerudo.txt","ajax_content");
}
function korogu(){
    loadDoc("ajax/korogu.txt","ajax_content");
}
//The last menu
function hyrule(){
    loadDoc("ajax/hyrule.txt","ajax_content");
}
//The about menu

