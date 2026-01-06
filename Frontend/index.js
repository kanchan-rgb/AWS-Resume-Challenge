$(document).ready(function (e) {
    $win = $(window);
    $navbar = $('#header');
    $toggle = $('.toggle-button');
    var width = $navbar.width();
    toggle_onclick($win, $navbar, width);

    // resize event
    $win.resize(function () {
        toggle_onclick($win, $navbar, width);
    });

    $toggle.click(function (e) {
        $navbar.toggleClass("toggle-left");
    });
});

function toggle_onclick($win, $navbar, width) {
    if ($win.width() <= 768) {
        $navbar.css({ left: `-${width}px` });
    } else {
        $navbar.css({ left: '0px' });
    }
}

// Typed.js animations
var typed = new Typed('#typed', {
    strings: [
        'BCA Student',
        'Hard Working Person',
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

var typed_2 = new Typed('#typed_2', {
    strings: [
        'BCA Student',
        'Hard Working Person',
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// View counter function
const counter = document.querySelector(".counter-number");

async function updateCounter() {
  try {
    const counter = document.querySelector("footer .counter-number"); // only find inside footer
    const response = await fetch("https://86tbl0aab0.execute-api.us-east-1.amazonaws.com/prod/viewcount");
    const data = await response.json();
    counter.textContent = ` Views: ${data.views}`;
  } catch (error) {
    console.error("Error fetching view count:", error);
    const counter = document.querySelector("footer .counter-number");
    counter.textContent = "Views: N/A";
  }
}

// Call the function once page is loaded
updateCounter();
