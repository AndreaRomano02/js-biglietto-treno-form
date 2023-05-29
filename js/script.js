console.log('JS OK');

//# PRELIMINARI
const priceForKm = 0.21;
const discountMinor = 0.8;
const discountOver = 0.6;
console.log(priceForKm, discountMinor, discountOver);

//* Discount price
let priceKmDiscounted;

//* Validation var
let valid = true;

//* Error message
let errorMessage;

//* Prendo gli elemnti HTML
const pageKm = document.getElementById('user-km');
const pageAge = document.getElementById('user-age');
const pageBasePrice = document.getElementById('base-price');
const pageFinalPrice = document.getElementById('final-price');
console.log(pageKm, pageAge, pageBasePrice ,pageFinalPrice);

//# Chiedo all'utente le informazioni
const userKm = parseInt(prompt('Quanti Km vuoi percorrere?', 10));
const userAge = parseInt(prompt('Quanti anni hai?', 20));
console.log(userKm, userAge);

//! VALIDAZIONE
if(isNaN(userAge) || isNaN(userKm)){
  valid = false;
  errorMessage = 'Campi inseriti non validi. Prova ad inserire dei numeri \n';
}

if(userKm < 0 || userAge <= 1){
  valid = false;
  errorMessage += 'I campi devono essere validi "Numeri positivi"';
}

if(!valid){
  alert(errorMessage);
}
else{
  
  //# Calcolo della tariffa base
  let basePriceKm = userKm * priceForKm;
  let finalPrice;
  //# Controllo l'età ed applico lo sconto
  if(userAge < 18){
  finalPrice = (basePriceKm * discountMinor).toFixed(2);
  } else if(userAge >= 65){
    finalPrice = (basePriceKm * discountOver).toFixed(2);
  }
  
  //# Arrotondo a due decimali massimi
  basePriceKm = basePriceKm.toFixed(2);
  
  //# Stampo il prezzo finale 
  console.log(basePriceKm);
  console.log(finalPrice);
  
  //# Stampo in pagina
  pageKm.innerText = userKm + 'Km';
  pageAge.innerText = `${userAge} Anni`;
  pageBasePrice.innerText = basePriceKm;
  if(finalPrice == undefined){
    pageFinalPrice.innerText = basePriceKm;
  } else{
    pageFinalPrice.innerText = finalPrice;
  }

}