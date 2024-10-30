const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", ()=> {
hamburger.classList.remove("active");
navMenu.classList.remove("active");
}))

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const uzenet = document.getElementById("message");

function sendEmail() {

    const bodyMessage = `Teljes név: ${fullName.value}<br> E-mail: ${email.value} <br> Telefonszám: ${phone.value} <br> Levél tartalma: ${uzenet.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "artitude.orders@gmail.com",
        Password : "C7D79CD4A7507E22220870AAFD698F4664B7",
        To : 'artitude.orders@gmail.com',
        From : "artitude.orders@gmail.com",
        Subject : "Új ajánlatkérés érkezett!",
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK") {
            Swal.fire({
                title: "Üzenet elküldve!",
                text: "Az Artitude Paperdesign hamarosan felveszi Önnel a kapcsolatot!",
                icon: "success"
              });
        }
      }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail()
})