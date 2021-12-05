/* ---------------------------------------------------
    OFFCANVAS SIDEBAR SCRIPTS
----------------------------------------------------- */

function togglOffCanvas() {
    var offcanvas_el = document.querySelector("#offcanvasExample");
    var offcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvas_el);

    if (window.innerWidth < 992) {
        offcanvas.hide();
        offcanvas_el.style.display = "block";
    } else {
        offcanvas.show();
    }
}

window.onload = function() {
    togglOffCanvas();
}

window.onresize = function() {
    togglOffCanvas();
} 

/* ---------------------------------------------------
    COLLAPSE SETTINGS
----------------------------------------------------- */
var collapseApp = document.querySelector(".collapseAllSettings");
collapseApp.addEventListener("click", function(e) {
    e.preventDefault();
    var collapse_els = document.getElementsByClassName("collapse");
    Array.from(collapse_els).forEach((el) => {
        if (el.classList.contains("show")) {
            var collapseBox = bootstrap.Collapse.getOrCreateInstance(el);
            collapseBox.hide();
        }        
    });
});