let BTN = document.querySelector(".Hello");

window.onscroll = function ()
{
    if (window.scrollY >= 600)
    {
        BTN.style.display = "block";
    }
    else
    {
        BTN.style.display = "none";
    }
    };
    BTN.onclick = function ()
    {
    window.scrollTo
    ({
        left: 0,
        top: 0,
        behavior: "smooth",
    });
};

ScrollReveal
({
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.navbar, .H1, .H2', {origin: 'top'});
ScrollReveal().reveal('.H3', {origin: 'bottom'});
const typed = new Typed('.H1', {
    strings: ['أول أكاديمية في الوطن العربي لتعليم القرآن الكريم <br> واللغة العربية أون لاين'],
    typeSpeed: 100,
    backSpeed: 30,
    backDelay: 1000,
    loop: true
});