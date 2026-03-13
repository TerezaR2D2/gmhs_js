let age = 30;
let isTuesday = false;
let hasLoyaltyCard = true;

let price;

// 1) Základní cena
if (age < 3) {
    price = 0;
} else if (isTuesday) {
    price = 5;
} else if (age <= 12) {
    price = 7;
} else if(age <=64) {
    price = 10;
} else {
    price = 6;
}

// 2) Sleva věrnostní kartou (neplatí v úterý ani pro zdarma)
if (price > 0 && !isTueasday && hasLoyaltyCard) {
    price -= 2;
}

// 3) Cena nesmí být záporná
if (price <0) {
    price = 0;
}
console.log("Cena lístků je $" + price);