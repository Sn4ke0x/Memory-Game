const input = document.querySelector(".login-input");
const button = document.querySelector(".login-button");
const form = document.querySelector(".login-form");

//  habilitando botao com min de caracteres
const validateInput = ({ target }) => {
  if (target.value.length > 2) {
    button.removeAttribute("disabled");
    return;
  }

  button.setAttribute("disabled", "");
};

// salvando nome de usuario e direcionando para pagina do game
const handleSubmit = (event) => {
  event.preventDefault(); //bloqueou o evento padrao do form

  localStorage.setItem("player", input.value);
  window.location = "pages/game.html";
};

input.addEventListener("input", validateInput);
form.addEventListener("submit", handleSubmit);
