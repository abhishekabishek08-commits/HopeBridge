// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close mobile menu after clicking a link

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// ===============================
// CONTACT FORM
// ===============================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thank you, " + name +
        "! Your message has been received. We will contact you soon."
    );

    contactForm.reset();

});


// ===============================
// BUTTON MESSAGE
// ===============================

function showMessage(message) {

    alert(message);

}


// ===============================
// SHARE WEBSITE
// ===============================

function shareWebsite() {

    if (navigator.share) {

        navigator.share({

            title: "HopeBridge",
            text: "Check out HopeBridge - Building Hope and Creating Change!",
            url: window.location.href

        });

    } else {

        alert(
            "Share this website with your friends and help spread awareness!"
        );

    }

}


// ===============================
// IMPACT NUMBER ANIMATION
// ===============================

const impactNumbers =
    document.querySelectorAll(".impact-number");


let impactStarted = false;


function animateNumbers() {

    if (impactStarted) {
        return;
    }

    impactStarted = true;

    impactNumbers.forEach(function (number) {

        const target =
            parseInt(number.getAttribute("data-target"));

        let current = 0;

        const increment =
            Math.ceil(target / 80);

        const timer = setInterval(function () {

            current += increment;

            if (current >= target) {

                current = target;

                clearInterval(timer);

            }

            number.textContent =
                current.toLocaleString() + "+";

        }, 25);

    });

}


// Start animation when Impact section is visible

window.addEventListener("scroll", function () {

    const impactSection =
        document.getElementById("impact");

    const position =
        impactSection.getBoundingClientRect().top;

    const screenHeight =
        window.innerHeight;

    if (position < screenHeight - 100) {

        animateNumbers();

    }

});


// ===============================
// WELCOME MESSAGE
// ===============================

console.log(
    "Welcome to HopeBridge - Building Hope. Creating Change."
);