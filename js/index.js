const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let home = document.createElement("a");
let extras = document.createElement("a");
let navBar = document.querySelectorAll("nav");

let nav = document.querySelectorAll("nav a");
nav.forEach((item, value) => item.innerHTML = siteContent.nav[`nav-item-${value + 1}`])

navBar[0].appendChild(extras);
navBar[0].prepend(home);
home.innerHTML = "Home";
extras.innerHTML = "Extras"

let updatedNav = document.querySelectorAll("nav a");
updatedNav.forEach((item, value) => item.style.color = "green")

// nav[0].innerHTML = siteContent.nav["nav-item-1"];
// nav[1].innerHTML = siteContent.nav["nav-item-2"];
// nav[2].innerHTML = siteContent.nav["nav-item-3"];
// nav[3].innerHTML = siteContent.nav["nav-item-4"];
// nav[4].innerHTML = siteContent.nav["nav-item-5"];
// nav[5].innerHTML = siteContent.nav["nav-item-6"];
// try to iterate for nav with string interpolation...? 
// ZOMG IT WORKED !! lol

let ctaimg = document.querySelector("#cta-img");
ctaimg.setAttribute('src', siteContent["cta"]["img-src"]);

let ctatext = document.querySelector(".cta-text h1")
ctatext.innerHTML = siteContent["cta"]["h1"];

let button = document.querySelector("button");
button.innerHTML = siteContent["cta"]["button"];

let mainContentH4 = document.querySelectorAll(".main-content h4");
mainContentH4[0].innerHTML = siteContent["main-content"]["features-h4"];
mainContentH4[1].innerHTML = siteContent["main-content"]["about-h4"]
mainContentH4[2].innerHTML = siteContent["main-content"]["services-h4"];
mainContentH4[3].innerHTML = siteContent["main-content"]["product-h4"];
mainContentH4[4].innerHTML = siteContent["main-content"]["vision-h4"];

let mainContentP = document.querySelectorAll(".main-content p");
mainContentP[0].innerHTML = siteContent["main-content"]["features-content"];
mainContentP[1].innerHTML = siteContent["main-content"]["about-content"];
mainContentP[2].innerHTML = siteContent["main-content"]["services-content"];
mainContentP[3].innerHTML = siteContent["main-content"]["product-content"];
mainContentP[4].innerHTML = siteContent["main-content"]["vision-content"];

let middleimg = document.querySelector("#middle-img");
middleimg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let contactH4 = document.querySelectorAll(".contact h4");
contactH4[0].innerHTML = siteContent["contact"]["contact-h4"];

let contactP = document.querySelectorAll(".contact p");
contactP[0].innerHTML = siteContent["contact"]["address"];
contactP[1].innerHTML = siteContent["contact"]["phone"];
contactP[2].innerHTML = siteContent["contact"]["email"];

let footer = document.querySelectorAll("footer");
footer[0].innerHTML = siteContent["footer"]["copyright"];