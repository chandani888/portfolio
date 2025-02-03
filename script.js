let menuIcon = document.querySelector('#menu-icno')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')

}



let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
          navLinks.forEach(links => {
              links.classList.remove('active');
              document.querySelector('header nav a[href*=' + id +']').classList.add('active');
          });
      };
  });

  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);


  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};
document.getElementById("year").textContent = new Date().getFullYear();
  // Initialize EmailJS
emailjs.init('kXfo-hbH5QSLMZTY4');
      // Form submission logic
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Clear any previous messages
    document.getElementById('success-message').style.display = 'none';
    document.getElementById('error-message').style.display = 'none';
  
    // Get form data
    var formData = new FormData(this);
  
    // Send data to EmailJS
    emailjs.sendForm('service_waa0xcc', 'template_0h7iwc1', formData)
      .then(function(response) {
        console.log('SUCCESS!', response);
        // Show success message
        document.getElementById('success-message').style.display = 'block';
      }, function(error) {
        console.log('FAILED...', error);
        // Show error message
        document.getElementById('error-message').style.display = 'block';
      });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const circles = document.querySelectorAll(".skill-circle .outer");
    const percents = document.querySelectorAll(".percent");

    // Detect main color from portfolio text
    let mainColor = getComputedStyle(document.body).getPropertyValue('--main-color') || "#ff4b2b";

    percents.forEach((percent, index) => {
        let value = percent.getAttribute("data-percent");
        let start = 0;
        let interval = setInterval(() => {
            if (start <= value) {
                percent.innerText = start + "%";
                circles[index].style.background = `conic-gradient(${mainColor} ${start * 3.6}deg, #ddd ${start * 3.6}deg)`;
                start++;
            } else {
                clearInterval(interval);
            }
        }, 20);
    });
});

  
  