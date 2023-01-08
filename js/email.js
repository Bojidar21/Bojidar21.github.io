function sendEmail() {
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "art.consult@abv.bg",
    Password : "878AEE9E80BC45C97E1597C5E939EC50B074",
    To : 'b.dimitrov.2004@gmail.com',
    From : document.getElementById("email").value,
    Subject : "Запитване",
    Body : "Име: " + document.getElementById("name").value
    + "<br> Фамилия: " + document.getElementById("last_name").value
    + "<br> Имейл: " + document.getElementById("email").value
    + "<br> Телефон: " + document.getElementById("phone").value
    + "<br> Съобщение: " + document.getElementById("message").value

}).then(
  message => document.getElementById("alert").textContent = 'Съобщението е изпратено успешно!'
);
}
