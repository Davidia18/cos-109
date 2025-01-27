// simple form submission message
document.getElementById("contact form").addEventListener("submit",function(event) {
    event.preventDefault();
    alert("Thank you for your message!Eniola will get back to you soon.");
    document.getElementById("contactForm").reset();
});
