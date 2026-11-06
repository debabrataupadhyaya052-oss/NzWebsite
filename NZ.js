//Navigation Bar//
// Select all navbar links
const navLinks = document.querySelectorAll(
    '.navbar-nav .nav-link:not(.dropdown-toggle)'
);

// Add click event
navLinks.forEach(function (link) {

    link.addEventListener('click', function () {

        // Remove active class from all links
        navLinks.forEach(function (item) {
            item.classList.remove('active');
        });

        // Add active class to clicked link
        this.classList.add('active');

    });

});

//Home Seaction//

// Navbar scroll effect

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// Video fallback

const heroVideo = document.querySelector(".hero-section video");

heroVideo.addEventListener("error", function () {
    console.log("Video could not load. Showing poster image.");
});

// EXPLORE NOW BUTTON//
const exploreButton = document.querySelector(".explore-btn");

exploreButton.addEventListener("click", function (event) {

    event.preventDefault();

    const exploreSection = document.querySelector("#explore");

    exploreSection.scrollIntoView({
        behavior: "smooth"
    });

});

// VIEW GALLERY BUTTON

const galleryButton = document.querySelector(".gallery-btn");

galleryButton.addEventListener("click", function (event) {

    event.preventDefault();

    const gallerySection = document.querySelector("#gallery");

    gallerySection.scrollIntoView({
        behavior: "smooth"
    });

});

// SCROLL DOWN BUTTON
const scrollDown = document.querySelector(".scroll-down");

scrollDown.addEventListener("click", function (event) {

    event.preventDefault();

    document.querySelector("#explore").scrollIntoView({
        behavior: "smooth"
    });

});

// HERO PARALLAX EFFECT

window.addEventListener("scroll", function () {

    const hero = document.querySelector(".nz-hero");

    let scrollPosition = window.scrollY;

    if (scrollPosition < window.innerHeight) {

        hero.style.backgroundPosition =
            `center ${scrollPosition * 0.35}px`;

    }

});

// Navbar active link


// Navbar active link

const links = document.querySelectorAll(".navbar-nav .nav-link");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        links.forEach(function (item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});

// Open Gallery 
const openGallery = document.getElementById("openGallery");

openGallery.addEventListener("click", function () {

    document.getElementById("gallery").scrollIntoView({
        behavior: "smooth"
    });

});

// GALLERY FILTER

const filterButtons =
    document.querySelectorAll(".filter-btn");

const galleryItems =
    document.querySelectorAll(".gallery-item");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Remove active class
        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        // Add active class
        this.classList.add("active");

        const filter = this.getAttribute("data-filter");

        galleryItems.forEach(function (item) {

            const category =
                item.getAttribute("data-category");

            if (filter === "all" || category === filter) {

                item.style.display = "block";

                setTimeout(function () {
                    item.style.opacity = "1";
                    item.style.transform = "scale(1)";
                }, 50);

            } else {

                item.style.opacity = "0";
                item.style.transform = "scale(0.8)";

                setTimeout(function () {
                    item.style.display = "none";
                }, 250);

            }

        });

    });

});

// IMAGE MODAL

const imageButtons =
    document.querySelectorAll(".image-view-btn");

const modalImage =
    document.getElementById("modalImage");

const modalTitle =
    document.getElementById("modalTitle");


imageButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const image =
            this.getAttribute("data-image");

        const title =
            this.getAttribute("data-title");

        modalImage.src = image;

        modalImage.alt = title;

        modalTitle.textContent = title;

    });

});

//About Seaction//
// =============== COUNTER ANIMATION ===============

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = Number(counter.dataset.target);

            let current = 0;

            const increment = Math.max(1, Math.ceil(target / 50));

            const updateCounter = function () {

                current += increment;

                if (current < target) {
                    counter.innerText = current;
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target;
                }

            };

            updateCounter();

            observer.unobserve(counter);

        }

    });

}, {
    threshold: 0.5
});

counters.forEach(function (counter) {
    observer.observe(counter);
});


// =============== NAVBAR MOBILE CLOSE ===============

const navLinks = document.querySelectorAll(
    ".navbar-nav .nav-link"
);

const navbarMenu = document.querySelector("#navbarMenu");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (window.innerWidth < 992) {

            const menu = bootstrap.Collapse.getInstance(navbarMenu);

            if (menu) {
                menu.hide();
            }

        }

    });

});

//Service Seaction//
const dropdownItems = document.querySelectorAll(
    ".dropdown-menu .dropdown-item"
);

dropdownItems.forEach(function (item) {

    item.addEventListener("click", function () {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


/* =============== MOBILE NAVBAR CLOSE =============== */

const navLinks = document.querySelectorAll(
    ".navbar-nav .nav-link"
);

const navbarMenu = document.querySelector("#navbarMenu");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (window.innerWidth < 992) {

            const menu = bootstrap.Collapse.getInstance(navbarMenu);

            if (menu) {
                menu.hide();
            }

        }

    });

});

//Gallery Seaction Bar//
const filterButtons = document.querySelectorAll(".filter-btn");

const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Remove active class
        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        // Add active class
        this.classList.add("active");

        const filterValue = this.dataset.filter;

        galleryItems.forEach(function (item) {

            const categories = item.dataset.category.split(" ");

            if (
                filterValue === "all" ||
                categories.includes(filterValue)
            ) {

                item.classList.remove("hide");
                item.classList.add("show");

            } else {

                item.classList.remove("show");
                item.classList.add("hide");

            }

        });

    });

});


/* =============== IMAGE POPUP =============== */

const viewButtons = document.querySelectorAll(".view-btn");

const modalImage = document.getElementById("modalImage");

const imageModalElement = document.getElementById("imageModal");

const imageModal = new bootstrap.Modal(imageModalElement);

viewButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const image = this.closest(".gallery-card").querySelector("img");

        modalImage.src = image.src;
        modalImage.alt = image.alt;

        imageModal.show();

    });

});


/* =============== MOBILE NAVBAR =============== */

const navLinks = document.querySelectorAll(
    ".navbar-nav .nav-link"
);

const navbarMenu = document.querySelector("#navbarMenu");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (window.innerWidth < 992) {

            const menu = bootstrap.Collapse.getInstance(navbarMenu);

            if (menu) {
                menu.hide();
            }

        }

    });

});

//Food Video Seaction//
// =============== VIDEO FILTER ===============

const filterButtons = document.querySelectorAll(".filter-btn");

const videoItems = document.querySelectorAll(".video-item");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Remove previous active button
        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        // Add active class
        this.classList.add("active");

        const filterValue = this.dataset.filter;

        videoItems.forEach(function (item) {

            const category = item.dataset.category;

            if (
                filterValue === "all" ||
                category === filterValue
            ) {

                item.classList.remove("hide");
                item.classList.add("show");

            } else {

                item.classList.remove("show");
                item.classList.add("hide");

            }

        });

    });

});


// =============== PLAY ONE VIDEO AT A TIME ===============

const allVideos = document.querySelectorAll(".video-card video");

allVideos.forEach(function (video) {

    video.addEventListener("play", function () {

        allVideos.forEach(function (otherVideo) {

            if (otherVideo !== video) {
                otherVideo.pause();
            }

        });

    });

});


// =============== NAVBAR MOBILE CLOSE ===============

const navLinks = document.querySelectorAll(
    ".navbar-nav .nav-link"
);

const navbarMenu = document.querySelector("#navbarMenu");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (window.innerWidth < 992) {

            const menu = bootstrap.Collapse.getInstance(navbarMenu);

            if (menu) {
                menu.hide();
            }

        }

    });

});


// =============== HERO VIDEO FALLBACK ===============

const heroVideo = document.querySelector(".hero-video");

heroVideo.addEventListener("error", function () {
    console.log("Please add food-banner.mp4 in the videos folder.");
});


//Blogs Section//
const filterButtons = document.querySelectorAll(".filter-btn");

const blogItems = document.querySelectorAll(".blog-item");

const searchInput = document.getElementById("blogSearch");

const searchButton = document.getElementById("searchButton");

const noResults = document.getElementById("noResults");

let selectedCategory = "all";


// Display matching blogs

function filterBlogs() {

    const searchValue = searchInput.value.toLowerCase().trim();

    let visibleCount = 0;

    blogItems.forEach(function (item) {

        const category = item.dataset.category;

        const text = item.textContent.toLowerCase();

        const categoryMatch =
            selectedCategory === "all" ||
            category === selectedCategory;

        const searchMatch = text.includes(searchValue);

        if (categoryMatch && searchMatch) {

            item.classList.remove("hide");
            item.classList.add("show");

            visibleCount++;

        } else {

            item.classList.remove("show");
            item.classList.add("hide");

        }

    });

    noResults.hidden = visibleCount !== 0;

}


// =============== CATEGORY BUTTONS ===============

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        selectedCategory = this.dataset.filter;

        filterBlogs();

    });

});


// =============== SEARCH FUNCTION ===============

searchInput.addEventListener("input", filterBlogs);

searchButton.addEventListener("click", filterBlogs);


// =============== READ MORE MODAL ===============

const readButtons = document.querySelectorAll(".read-more");

const blogModalElement = document.getElementById("blogModal");

const blogModal = new bootstrap.Modal(blogModalElement);

const modalTitle = document.getElementById("modalTitle");

const modalImage = document.getElementById("modalImage");

const modalDescription = document.getElementById("modalDescription");


readButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        modalTitle.textContent = this.dataset.title;

        modalImage.src = this.dataset.image;

        modalImage.alt = this.dataset.title;

        modalDescription.textContent =
            this.dataset.description;

        blogModal.show();

    });

});


// =============== NEWSLETTER ===============

const newsletterForm =
    document.getElementById("newsletterForm");

const emailInput =
    document.getElementById("emailInput");

const newsletterMessage =
    document.getElementById("newsletterMessage");


newsletterForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = emailInput.value.trim();

    if (email === "") {

        newsletterMessage.textContent =
            "Please enter your email address.";

        return;

    }

    newsletterMessage.textContent =
        "Thank you! Your demo subscription was received.";

    newsletterForm.reset();

});


// =============== NAVBAR MOBILE CLOSE ===============

const navLinks = document.querySelectorAll(
    ".navbar-nav .nav-link"
);

const navbarMenu = document.querySelector("#navbarMenu");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (window.innerWidth < 992) {

            const menu =
                bootstrap.Collapse.getInstance(navbarMenu);

            if (menu) {
                menu.hide();
            }

        }

    });

});


// =============== NAVBAR SCROLL EFFECT ===============

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.style.padding = "12px 0";
        navbar.style.background = "#102b35";

    } else {

        navbar.style.padding = "18px 0";
        navbar.style.background = "rgba(16, 43, 53, 0.96)";

    }

});

// Contact Section //
const contactForm = document.getElementById("contactForm");

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const subjectError = document.getElementById("subjectError");
const messageError = document.getElementById("messageError");

const formMessage = document.getElementById("formMessage");


// =============== FORM SUBMIT ===============

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    // Clear previous errors

    nameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";
    formMessage.textContent = "";

    let isValid = true;


    // NAME VALIDATION

    if (fullName.value.trim().length < 2) {

        nameError.textContent =
            "Please enter your full name.";

        isValid = false;

    }


    // EMAIL VALIDATION

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.value.trim())) {

        emailError.textContent =
            "Please enter a valid email address.";

        isValid = false;

    }


    // SUBJECT VALIDATION

    if (subject.value === "") {

        subjectError.textContent =
            "Please select a subject.";

        isValid = false;

    }


    // MESSAGE VALIDATION

    if (message.value.trim().length < 10) {

        messageError.textContent =
            "Message must contain at least 10 characters.";

        isValid = false;

    }


    // IF FORM IS INVALID

    if (!isValid) {

        formMessage.textContent =
            "Please correct the errors above.";

        formMessage.style.color = "#dc3545";

        return;

    }


    // SUCCESS MESSAGE (FRONT-END DEMO)

    formMessage.textContent =
        "Thank you! Your message has been validated successfully. Connect a backend to send it.";

    formMessage.style.color = "#159b76";

    contactForm.reset();

});


// =============== CLEAR ERRORS WHILE TYPING ===============

fullName.addEventListener("input", function () {
    nameError.textContent = "";
});

email.addEventListener("input", function () {
    emailError.textContent = "";
});

subject.addEventListener("change", function () {
    subjectError.textContent = "";
});

message.addEventListener("input", function () {
    messageError.textContent = "";
});


// =============== MOBILE NAVBAR ===============

const navLinks = document.querySelectorAll(
    ".navbar-nav .nav-link"
);

const navbarMenu = document.querySelector("#navbarMenu");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (window.innerWidth < 992) {

            const menu =
                bootstrap.Collapse.getInstance(navbarMenu);

            if (menu) {
                menu.hide();
            }

        }

    });

});


// =============== NAVBAR SCROLL EFFECT ===============

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.style.padding = "12px 0";
        navbar.style.background = "#102b35";

    } else {

        navbar.style.padding = "18px 0";
        navbar.style.background = "rgba(16, 43, 53, 0.96)";

    }

});


//Registration Section//
// =============== GET HTML ELEMENTS ===============

const registrationForm =
    document.getElementById("registrationForm");

const packageSelect =
    document.getElementById("package");

const visitorsInput =
    document.getElementById("visitors");

const totalPrice =
    document.getElementById("totalPrice");

const resultSection =
    document.getElementById("resultSection");

const formMessage =
    document.getElementById("formMessage");


// =============== PACKAGE PRICE CALCULATION ===============

function calculatePrice() {

    const selectedOption =
        packageSelect.options[packageSelect.selectedIndex];

    const price =
        Number(selectedOption.dataset.price || 0);

    const visitors =
        Number(visitorsInput.value) || 0;

    const total = price * visitors;

    totalPrice.value = "NZD " + total.toLocaleString("en-NZ");

    return total;

}

packageSelect.addEventListener("change", calculatePrice);

visitorsInput.addEventListener("input", calculatePrice);


// =============== SET MINIMUM TRAVEL DATE ===============

const travelDateInput =
    document.getElementById("travelDate");

const today = new Date();

const localToday = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0")
].join("-");

travelDateInput.min = localToday;


// =============== FORM SUBMISSION ===============

registrationForm.addEventListener("submit", function (event) {

    event.preventDefault();

    // GET VALUES

    const name =
        document.getElementById("fullName").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const location =
        document.getElementById("location").value.trim();

    const dob =
        document.getElementById("dob").value;

    const gender =
        document.getElementById("gender").value;

    const destination =
        document.getElementById("destination").value;

    const packageName =
        packageSelect.value;

    const travelDate =
        travelDateInput.value;

    const visitors =
        Number(visitorsInput.value);

    const payment =
        document.getElementById("paymentMethod").value;

    const terms =
        document.getElementById("terms").checked;
});
// CLEAR OLD ERRORS

document.querySelectorAll(".error-message").forEach(function (error) {
    error.textContent = "";
});

formMessage.textContent = "";


let isValid = true;


// NAME VALIDATION

if (name.length < 2) {

    document.getElementById("nameError").textContent =
        "Please enter your full name.";

    isValid = false;

}


// EMAIL VALIDATION

const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailPattern.test(email)) {

    document.getElementById("emailError").textContent =
        "Please enter a valid email address.";

    isValid = false;

}


// PHONE VALIDATION

const phoneDigits = phone.replace(/\D/g, "");

if (phoneDigits.length < 7 || phoneDigits.length > 15) {

    document.getElementById("phoneError").textContent =
        "Enter a valid contact number (7–15 digits).";

    isValid = false;

}


// LOCATION VALIDATION

if (location.length < 2) {

    document.getElementById("locationError").textContent =
        "Please enter your location.";

    isValid = false;

}


// DESTINATION VALIDATION

if (destination === "") {

    document.getElementById("destinationError").textContent =
        "Please select a destination.";

    isValid = false;

}


// PACKAGE VALIDATION

if (packageName === "") {

    document.getElementById("packageError").textContent =
        "Please select a travel package.";

    isValid = false;

}


// TRAVEL DATE VALIDATION

if (travelDate === "" || travelDate < localToday) {

    document.getElementById("dateError").textContent =
        "Please select today or a future travel date.";

    isValid = false;

}


// VISITORS VALIDATION

if (!Number.isInteger(visitors) ||
    visitors < 1 ||
    visitors > 20) {

    document.getElementById("visitorsError").textContent =
        "Enter between 1 and 20 visitors.";

    isValid = false;

}


// PAYMENT VALIDATION

if (payment === "") {

    document.getElementById("paymentError").textContent =
        "Please select a payment method.";

    isValid = false;

}


// TERMS VALIDATION

if (!terms) {

    document.getElementById("termsError").textContent =
        "Please confirm your information.";

    isValid = false;

}


// STOP IF FORM IS INVALID

if (!isValid) {

    formMessage.textContent =
        "Please correct the errors in the form.";

    formMessage.style.color = "#dc3545";

    return;

}
// CLEAR OLD ERRORS

document.querySelectorAll(".error-message").forEach(function (error) {
    error.textContent = "";
});

formMessage.textContent = "";


let isValid = true;


// NAME VALIDATION

if (name.length < 2) {

    document.getElementById("nameError").textContent =
        "Please enter your full name.";

    isValid = false;

}


// EMAIL VALIDATION

const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailPattern.test(email)) {

    document.getElementById("emailError").textContent =
        "Please enter a valid email address.";

    isValid = false;

}


// PHONE VALIDATION

const phoneDigits = phone.replace(/\D/g, "");

if (phoneDigits.length < 7 || phoneDigits.length > 15) {

    document.getElementById("phoneError").textContent =
        "Enter a valid contact number (7–15 digits).";

    isValid = false;

}


// LOCATION VALIDATION

if (location.length < 2) {

    document.getElementById("locationError").textContent =
        "Please enter your location.";

    isValid = false;

}


// DESTINATION VALIDATION

if (destination === "") {

    document.getElementById("destinationError").textContent =
        "Please select a destination.";

    isValid = false;

}


// PACKAGE VALIDATION

if (packageName === "") {

    document.getElementById("packageError").textContent =
        "Please select a travel package.";

    isValid = false;

}


// TRAVEL DATE VALIDATION

if (travelDate === "" || travelDate < localToday) {

    document.getElementById("dateError").textContent =
        "Please select today or a future travel date.";

    isValid = false;

}


// VISITORS VALIDATION

if (!Number.isInteger(visitors) ||
    visitors < 1 ||
    visitors > 20) {

    document.getElementById("visitorsError").textContent =
        "Enter between 1 and 20 visitors.";

    isValid = false;

}


// PAYMENT VALIDATION

if (payment === "") {

    document.getElementById("paymentError").textContent =
        "Please select a payment method.";

    isValid = false;

}


// TERMS VALIDATION

if (!terms) {

    document.getElementById("termsError").textContent =
        "Please confirm your information.";

    isValid = false;

}


// STOP IF FORM IS INVALID

if (!isValid) {

    formMessage.textContent =
        "Please correct the errors in the form.";

    formMessage.style.color = "#dc3545";

    return;

}


//Footer Tag Section//
// Display current year
document.getElementById("currentYear").textContent =
    new Date().getFullYear();


// Newsletter form
const newsletterForm = document.getElementById("newsletterForm");
const newsletterEmail = document.getElementById("newsletterEmail");
const newsletterMessage = document.getElementById("newsletterMessage");

newsletterForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = newsletterEmail.value.trim();

    if (email === "") {
        newsletterMessage.textContent = "Please enter your email address.";
        return;
    }

    newsletterMessage.textContent =
        "Thank you! Your email has been entered in this demo.";

    newsletterForm.reset();
});


// Back to top button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 250) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});