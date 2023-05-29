console.log("JS OK");

//# PRELIMINARI
const priceForKm = 0.21;
const discountMinor = 0.8;
const discountOver = 0.6;
console.log(priceForKm, discountMinor, discountOver);

//# Variabili del prezzo
const pageBasePrice = document.getElementById("base-price");
const pageFinalPrice = document.getElementById("final-price");

//# Variabili per inserire il testo nel DOM
const pageKm = document.getElementById("page-km");
const pageName = document.getElementById("page-username");
const pageAge = document.getElementById("page-age");

//# Chiedo all'utente le informazioni con gli input nel DOM
const inputName = document.getElementById("user-name");
const inputAge = document.getElementById("user-age");
const inputKm = document.getElementById("user-km");
const generateBtn = document.getElementById("generate");
const cancelBtn = document.getElementById("cancel");

console.log(inputKm.value);

generateBtn.addEventListener("click", function () {
  //# Lettura delle variabili di input
  let userName = inputName.value;
  let userKm = parseInt(inputKm.value);

  //# Calcolo della tariffa base
  let basePriceKm = userKm * priceForKm;
  let finalPrice;

  //# Controllo l'età ed applico lo sconto
  if (inputAge.value === "minorenne") {
    finalPrice = (basePriceKm * discountMinor).toFixed(2);
  } else if (inputAge.value === "over 65") {
    finalPrice = (basePriceKm * discountOver).toFixed(2);
  }

  //# Arrotondo a due decimali massimi
  basePriceKm = basePriceKm.toFixed(2);

  //# Stampo in pagina
  pageName.innerText = userName;
  pageKm.innerText = userKm + "Km";
  pageAge.innerText = inputAge.value;
  pageBasePrice.innerText = basePriceKm;
  if (!finalPrice) {
    pageFinalPrice.innerText = basePriceKm;
  } else {
    pageFinalPrice.innerText = finalPrice;
  }
});
