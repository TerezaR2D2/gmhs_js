let isLoggednIn = true;
let isAdmin = true;

if (isLoggednIn) {
    console.log("vítej na stránce");
    if (isAdmin){
        console.log("Přístup do adminu povolen.")
    }else {
        console.log("jsi přihlášen jako uživatel!")
    }
} else {
    console.log("Nejsi přihlášený")
}

let age = 31;
let hasDriverLicence = true;

if (age >= 18 && hasDriverLicence) {
    console.log("Můžeš Řídit!")
} else {
    console.log("Nemůžeš řídit!")
}

let isHoliday = false;
let isWeekend = true;

if (isHoliday || isWeekend) {
    console.log("Je čas relaxovat!");
} else {
    console.log("Musíme pracovat!")
}