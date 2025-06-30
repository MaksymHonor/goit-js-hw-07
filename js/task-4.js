const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  // 1. Зупиняємо перезавантаження
  event.preventDefault();

  // 2. Доступ до елементів форми
  const { email, password } = form.elements;

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // 3. Перевірка на заповнення
  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  // 4. Вивід об'єкта в консоль
  console.log(formData);

  // 5. Очищення форми
  form.reset();
});

// Оформлення placeholder при фокусі на input
const inputs = document.querySelectorAll(".myInput");

inputs.forEach((input) => {
  input.addEventListener("focus", () => {
    input.placeholder = "Type area";
  });

  input.addEventListener("blur", () => {
    input.placeholder = "";
  });
});
