(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

$(document).ready(function() {
    $('#contact-form').submit(function(event) {
      event.preventDefault();
      var name = $('#name').val();
      var email = $('#email').val();
      var message = $('#message').val();
      $.ajax({
        type: 'POST',
        url: 'https://api.mailgun.net/v3/sandboxdb227e2c5c634783ad37592f95706eb1.mailgun.org/messages',
        headers: {
          'Authorization': 'Basic ' + btoa('api:key-3e89447bb457f88de123ec4435aa6583')
        },
        data: {
          'from': email,
          'to': 'k.raza1932000@gmail.com',
          'subject': 'New message from ' + name,
          'text': message
        },
        success: function(response) {
          alert('Message sent successfully!');
        },
        error: function(response) {
          alert('Error sending message.');
        }
      });
    });
  });