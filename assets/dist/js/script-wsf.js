// MENU Topple Icons : burger / close

function toggle() {

    if (document.title == "WSF") {
        document.getElementById("navbar-bt-menu").style.backgroundImage = "url('assets/dist/css/img/nav-bt-close.svg')";
        document.title = "WSF.";

    } else if (document.title == "WSF.") {
        document.getElementById("navbar-bt-menu").style.backgroundImage = "url('assets/dist/css/img/nav-bt-open.svg')";
        document.title = "WSF";
    }
}