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
const pageCarriege = document.getElementById("carriage");
const pageCpCode = document.getElementById("cp-code");
const card = document.getElementById("card");
let tariff;

//# Chiedo all'utente le informazioni con gli input nel DOM
const inputName = document.getElementById("user-name");
const inputAge = document.getElementById("user-age");
const inputKm = document.getElementById("user-km");
const generateBtn = document.getElementById("generate");
const cancelBtn = document.getElementById("cancel");

generateBtn.addEventListener("click", function () {
  //# Lettura delle variabili di input
  let userName = inputName.value;
  let userKm = parseInt(inputKm.value);

  //! VALIDAZIONE
  //* Validation var
  let valid = true;

  //* Error message
  let errorMessage;

  //* Controlli di validazione
  //*-----------------------------------------------
  if (!isNaN(userName)) {
    valid = false;
    errorMessage = "Campi inseriti non validi. Prova ad inserire dei numeri \n";
  }
  //*-----------------------------------------------

  //* Controlli di validazione
  //*-----------------------------------------------
  if (userKm < 0) {
    valid = false;
    errorMessage += 'I campi devono essere validi "Numeri positivi"';
  }
  //*-----------------------------------------------

  if (!valid) {
    alert(errorMessage);
  } else {
    //# Mostrare la card
    card.classList.add("show");

    //# Calcolo della tariffa base
    let basePriceKm = userKm * priceForKm;
    let finalPrice;

    //# Controllo l'età ed applico lo sconto
    const age = inputAge.value;
    if (age === "minorenne") {
      finalPrice = (basePriceKm * discountMinor).toFixed(2);
      tariff = "Tariffa ridotta";
    } else if (age === "over 65") {
      finalPrice = (basePriceKm * discountOver).toFixed(2);
      tariff = "Tariffa over";
    } else {
      tariff = "Tariffa standard";
    }

    //# Random
    //? Variabili random
    const random = Math.random();
    const minCode = 100000;
    const maxCode = 150000;
    const maxCarriage = 15;

    //? Formula Carrozza
    let resultCarriege = Math.floor(random * maxCarriage + 1);
    console.log(resultCarriege);

    //? Formula Cp codice
    let resultCpCode = Math.floor(random * (maxCode + 1 - minCode)) + minCode;
    console.log(resultCpCode);

    //# Arrotondo a due decimali massimi
    basePriceKm = basePriceKm.toFixed(2);

    //# Stampo in pagina
    pageName.innerText = userName;

    pageKm.innerText = userKm + "Km";

    pageAge.innerText = tariff;

    pageBasePrice.innerText = basePriceKm;
    if (!finalPrice) {
      pageFinalPrice.innerText = basePriceKm;
    } else {
      pageFinalPrice.innerText = finalPrice;
    }

    pageCarriege.innerText = resultCarriege;
    pageCpCode.innerText = resultCpCode;
  }
});

cancelBtn.addEventListener("click", function () {
  //# Svuotare gli input
  inputAge.value = "";
  inputKm.value = "";
  inputName.value = "";

  //#Cancellare il biglietto
  card.classList.remove("show");
});
