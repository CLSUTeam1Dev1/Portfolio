$(document).ready(function () {

    $("#homeBtn").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("html").offset().top
        }, 350);
    });

    $("#projectsBtn").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#projects").offset().top
        }, 350);
    });
    $("#skillsBtn").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#skills").offset().top
        }, 350);
    });
    $("#aboutMeBtn").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#aboutMe").offset().top
        }, 350);
    });
    $("#contactBtn").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 350);
    });

});