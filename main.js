// file where will be the Javascript stuff 
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

// In the Contact form, this script is to send Contact Enquiry directly to my Gmail Account. 
document.getElementByClassName("cta-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const contactForm = document.getElementById("form");
  const name = document.getElementById("name");
  const myEmail = document.getElementById("email");
  const myMessage = document.getElementById("message-form");
  // validation before sending the data
  if (
    name.value.length === 0 ||
    name.value.length === 0 ||
    name.value.length === 0
  ) {
    alert("please fill the inputs");
  } else {
    let data = new FormData(contactForm);
    fetch("https://formsubmit.co/jeansinisterra@gmail.com", {
      method: "POST",
      body: data,
    });
    alert("Thank you. your form was submited");
    contactForm.reset();
  }
});
