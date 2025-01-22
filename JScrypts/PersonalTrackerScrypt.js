const ScoreFinal = document.querySelector(".score1");
const AguaFinal = document.querySelector(".score2");
const botonNew = document.querySelector(".setNewBalance");

const setBalance = function (monto) {
  localStorage.setItem("balance", monto);
};

const setAgua = function (water_number) {
  localStorage.setItem("aguas", water_number);
};

AguaFinal.textContent = localStorage.getItem("aguas");
ScoreFinal.textContent = localStorage.getItem("balance");

function BalanceResults(form) {
  var inputValue = form.inputbox.value;
  localStorage.setItem("balance", inputValue);
  ScoreFinal.textContent = localStorage.getItem("balance");
}

function AguaResults(form) {
  var inputValue = form.inputbox.value;
  localStorage.setItem("aguas", inputValue);
  AguaFinal.textContent = localStorage.getItem("aguas");
}
