window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("nav").style.backgroundColor = "#fff"
        document.getElementById("logo-p").style.color="#194d82"
        document.getElementById("nav").style.borderBottom = "2px solid #194d82";
        document.getElementById("logo-img").src="Logo_color.png"
        var elms = document.querySelectorAll("[id='nav-btn']");

        for (var i = 0; i < elms.length; i++)
            elms[i].style.color = '#194d82';

    const element = document.querySelectorAll(".li-btn");
      for (var i = 0; i < element.length; i++)
            element[i].style.setProperty("--check-primary", "#194d82");


    } else {
        document.getElementById("nav").style.backgroundColor = "transparent"
        document.getElementById("logo-p").style.color="#fff"
        document.getElementById("logo-img").src="White Logo.png"
        document.getElementById("nav").style.borderBottom = "none";
        document.getElementById("nav-btn").style.color = "#fff"
        var elms = document.querySelectorAll("[id='nav-btn']");

        for (var i = 0; i < elms.length; i++)
            elms[i].style.color = '#fff';
                const element = document.querySelectorAll(".li-btn");
      for (var i = 0; i < element.length; i++)
            element[i].style.setProperty("--check-primary", "#fff");
    }
}