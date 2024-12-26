// Обработка формы обратной связи
const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Отмена стандартной отправки формы

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const messageContent = document.getElementById("message").value;

    // Простая проверка
    if (name && email && messageContent) {
        message.textContent = "Спасибо за ваше сообщение, " + name + ". Мы свяжемся с вами в ближайшее время!";
        message.style.color = "green";
    } else {
        message.textContent = "Пожалуйста, заполните все поля!";
        message.style.color = "red";
    }
});
