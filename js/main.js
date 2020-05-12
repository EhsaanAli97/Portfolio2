// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Set initial state of menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show");
        menuBranding.classList.add("show");

        navItems.forEach(item => item.classList.add("show"));

        // Set menu state
        showMenu = true;
    } else {
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        menuBranding.classList.remove("show");

        navItems.forEach(item => item.classList.remove("show"));

        // Set menu state
        showMenu = false;
    }
}

function validation() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var errorMessage = document.getElementById('errorMessage');
    var text;

    errorMessage.style.padding = '1.2rem';
    errorMessage.style.marginTop = '2rem';
    errorMessage.style.fontWeight = 'bold';
    errorMessage.style.background = '#e20f0f';
    errorMessage.style.textAlign = 'center';

    if (name.length < 2) {
        text = 'Please Enter a Valid Name';
        errorMessage.innerHTML = text;
        return false;
    } else if (email.length < 5 && !email.includes('@') && !email.includes('.')) {
        text = 'Please Enter a Valid Email Address';
        errorMessage.innerHTML = text;
        return false;
    } else if (message.length < 2) {
        text = 'Please Enter More Than 2 Characters';
        errorMessage.innerHTML = text;
        return false;
    } else {
        errorMessage.hidden = true;
        return true;
    }
}

// Get the button that opens the modal
var btn = document.querySelectorAll('button.modal-button');

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName('close');

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
    btn[i].onclick = function (e) {
        e.preventDefault();
        modal = document.querySelector(e.target.getAttribute('href'));
        modal.style.display = 'block';
    };
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
    spans[i].onclick = function () {
        for (var index in modals) {
            if (typeof modals[index].style !== 'undefined')
                modals[index].style.display = 'none';
        }
    };
}