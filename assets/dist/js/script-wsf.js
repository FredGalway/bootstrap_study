// MENU Topple Icons : burger / close

function toggle() {
    // 1130px est le passage à la largeur de version mobile
    if ($(window).width() <= 1130) {

        if (document.title == "WSF") {
            document.getElementById("navbar-bt-menu").style.backgroundImage = "url('assets/dist/css/img/nav-bt-close.svg')";
            document.title = "WSF.";

        } else if (document.title == "WSF.") {
            document.getElementById("navbar-bt-menu").style.backgroundImage = "url('assets/dist/css/img/nav-bt-open.svg')";
            document.title = "WSF";
        }
    }
}


// Pour les interfaces mobiles, lancement des fonctions ci-dessous.
// Fermeture automatique du menu bootstrap depuis fonction Jquery 
// Appel à ma fonction toggle() pour basculement automatique d'icône

function collapseMenu() {

    $(function() {

        var navMain = $("#navbarCollapse");
        navMain.on("click", "a", null, function() {
            navMain.collapse('hide');
            toggle();
            document.getElementById("navbar-bt-menu").style.backgroundImage = "url('assets/dist/css/img/nav-bt-open.svg')";
            document.title == "WSF";
        });
    });
}

collapseMenu();

$([document, window]).on('ready resize', function(e) {
    console.log($(window).width());

    if ($(window).width() <= 1130) {
        console.log("Mobile screen");
        collapseMenu();

    }
});