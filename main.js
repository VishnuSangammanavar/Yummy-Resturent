// Tabs

var tablinks = document.getElementsByClassName("tab-link");
var tabcontents = document.getElementsByClassName("tab-content");

function tabopen(tabname) {
    for(tablink of tablinks){
        tablink.classList.remove("active")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("active-tab")
}

// nav-bar

var navitems = document.getElementsByClassName("nav-item");

function myfunc() {
    for(navitem of navitems){
        navitem.classList.remove("active")
    }

    event.currentTarget.classList.add("active");
}

// mobile nav
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-900px";
}