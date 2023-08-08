let Formulario = document.querySelector("#Formulario");

Formulario.addEventListener("submit", evento => {
  evento.preventDefault();

  let InputCardn = document.querySelector("#InputCardn");
  let InputCardCvc = document.querySelector("#InputCardCvc");
  let inputAmount = document.querySelector("#inputAmount");
  let inputFirstName = document.querySelector("#inputFirstName");
  let inputLastName = document.querySelector("#inputLastName");
  let inputCity = document.querySelector("#inputCity");
  let inputState = document.querySelector("#inputState");
  let inputPostalCode = document.querySelector("#inputPostalCode");
  let divalert = document.querySelector(".alert");

  let Error1 = "";
  let Error2 = "";
  let Error3 = "";
  let Error4 = "";
  let Error5 = "";
  let Error6 = "";
  let Error7 = "";
  let Error8 = "";

  if (InputCardn.value !== "" && !isNaN(InputCardn.value)) {
    ("");
  } else {
    Error1 = "Card Number";
    InputCardn.style.backgroundColor = "#f1aeb5";
  }
  if (InputCardCvc.value !== "" && !isNaN(InputCardCvc.value)) {
    ("");
  } else {
    Error2 = "Card CVC";
    InputCardCvc.style.backgroundColor = "#f1aeb5";
  }
  if (inputAmount.value !== "" && !isNaN(inputAmount.value)) {
    ("");
  } else {
    Error3 = "Amount";
    inputAmount.style.backgroundColor = "#f1aeb5";
  }
  if (inputFirstName.value !== "" && typeof inputFirstName.value === "string") {
    ("");
  } else {
    Error4 = "First Name";
    inputFirstName.style.backgroundColor = "#f1aeb5";
    ("");
  }
  if (inputLastName.value !== "" && typeof inputLastName.value === "string") {
    ("");
  } else {
    Error5 = "Last Name";
    inputLastName.style.backgroundColor = "#f1aeb5";
  }
  if (inputCity.value !== "" && typeof inputCity.value === "string") {
    ("");
  } else {
    Error6 = "City";
    inputCity.style.backgroundColor = "#f1aeb5";
  }
  if (inputState.value !== "" && typeof inputState.value === "string") {
    ("");
  } else {
    Error7 = "State";
    inputState.style.backgroundColor = "#f1aeb5";
  }
  if (inputPostalCode.value !== "" && !isNaN(inputPostalCode.value)) {
    ("");
  } else {
    Error8 = "Postal Code";
    inputPostalCode.style.backgroundColor = "#f1aeb5";
  }

  if (
    Error1 == "" &&
    Error2 == "" &&
    Error3 == "" &&
    Error4 == "" &&
    Error5 == "" &&
    Error6 == "" &&
    Error7 == "" &&
    Error8 == ""
  ) {
    evento.target.submit();
  } else {
    divalert.classList.remove("d-none");
    divalert.classList.add("d-block");
    divalert.innerHTML =
      "Please review the following: " +
      Error1 +
      " " +
      Error2 +
      " " +
      Error3 +
      " " +
      Error4 +
      " " +
      Error5 +
      " " +
      Error6 +
      " " +
      Error7 +
      " " +
      Error8;
  }
});
