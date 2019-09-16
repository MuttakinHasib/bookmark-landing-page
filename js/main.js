const tab = document.querySelectorAll(".feature-control ul li");
const singleItem = document.querySelectorAll(".single-item");

tab.forEach(item => {
    item.addEventListener("click", function (e) {
        e.preventDefault();
        changeBorder(this);
    });
});

function changeBorder(border) {
    tab.forEach(item => {
        item.classList.remove("feature-active");
    });
    border.classList.add("feature-active");
}

function setupTabs() {
    document.querySelectorAll(".tabs-control").forEach(button => {
        button.addEventListener("click", () => {
            const tabs = button.parentElement;
            const tabsContainer = document.querySelector(".feature-items");
            const tabsNumber = button.dataset.forTab;
            const tabToActive = tabsContainer.querySelector(
                `.tabs-content[data-tab = '${tabsNumber}']`
            );
            tabsContainer.querySelectorAll(".tabs-content").forEach(tab => {
                tab.classList.remove("tabs-content-active");
            });
            tabToActive.classList.add("tabs-content-active");
        });
    });
}
document.addEventListener("DOMContentLoaded", () => {
    setupTabs();
});

$(document).ready(function () {
    var answer = $(".answer").hide();
    $(".q-link").click(function (e) {
        e.preventDefault();
        answer.slideUp();
        var $this = $(this);
        $this.next().slideDown();
        return false;
    });

    // Scroll

    var scrollLink = $(".scroll");

    scrollLink.click(function (e) {
        e.preventDefault();

        $("body,html").animate({
                scrollTop: $(this.hash).offset().top
            },
            1000
        );
    });
});

/* mobile nav */

const navOpen = document.querySelector(".nav-open");
const navClose = document.querySelector(".nav-close");
navOpen.addEventListener("click", e => {
    e.preventDefault;
    displayNav();
});
navClose.addEventListener("click", e => {
    e.preventDefault();
    hideNav();
});

function displayNav() {
    document.querySelector(".logo").style.width = "150px";
    document.querySelector(".logo").innerHTML =
        '<img src="img/white-logo.svg" alt="BookMark Logo" />';
    document.querySelector(".linksButton").style.marginBottom = "2rem";
    navOpen.style.display = "none";
    navClose.style.display = "block";
    const header = document.querySelector("header");
    header.classList.add("mobile-active");
    document.querySelector("header nav").style.flexDirection = "column";
    document.querySelector("header nav ul").style.display = "block";
    document.querySelector("header nav ul").style.flexDirection = "column";
    const li = document.querySelectorAll("header nav ul li");
    const navLink = document.querySelectorAll("header nav ul li a");
    li.forEach(item => {
        item.style.borderTop = "1px solid rgba(255,255,255,.3)";
    });
    navLink.forEach(item => {
        item.setAttribute(
            "style",
            "font-size:20px;color:#fff !important;font-weight:400;"
        );
    });
    document.querySelector('header nav ul li .btn-custom').classList.remove('btn-login');
    document.querySelector('header nav ul li .btn-custom').setAttribute("style", "display:block;color:#fff;border:2px solid #fff;margin-top:1rem;");
}

function hideNav() {
    document.querySelector(".logo").style.width = "150px";
    document.querySelector(".logo").innerHTML =
        '<img src="img/logo-bookmark.svg" alt="BookMark Logo" />';
    document.querySelector(".linksButton").style.marginBottom = "0";
    navOpen.style.display = "block";
    navClose.style.display = "none";
    const header = document.querySelector("header");
    header.classList.remove("mobile-active");
    document.querySelector("nav").style.flexDirection = "column";
    document.querySelector("nav ul").style.display = "none";
}