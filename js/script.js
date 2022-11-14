console.log("Hello Dev");

let currencyAmountElement = document.querySelector(".js-currencyAmount");
let exchangeElement = document.querySelector(".js-exchange");
let plnAmountElement = document.querySelector(".js-plnAmount");
let currencyFullNameElement = document.querySelector(".js-currencyFullName");
let currencyShortNameElement = document.querySelector(".js-currencyShortName");



exchangeElement.addEventListener("input", () => {
    let plnAmount = plnAmountElement.value;
    let exchange = +exchangeElement.value.slice(4);
    currencyAmountElement.value = (plnAmount / exchange).toFixed(2);

    let currencyName = exchangeElement.value.slice(0, 3);
    switch (currencyName) {
        case "USD":
            currencyShortNameElement.innerText = currencyName;
            currencyFullNameElement.innerText = "Dolara amerykańskiego";
            break;
        case "UAH":
            currencyShortNameElement.innerText = currencyName;
            currencyFullNameElement.innerText = "Hrywny";
            break;
        case "GBP":
            currencyShortNameElement.innerText = currencyName;
            currencyFullNameElement.innerText = "Funta brytyjskiego";
            break;
        case "CHF":
            currencyShortNameElement.innerText = currencyName;
            currencyFullNameElement.innerText = "Franka Szwajcarskiego";
            break;
        default:
            currencyShortNameElement.innerText = currencyName;
            currencyFullNameElement.innerText = "Euro";
            break;
    }
});

currencyAmountElement.addEventListener("input", () => {
    let currencyAmount = currencyAmountElement.value;
    let exchange = +exchangeElement.value.slice(4);
    plnAmountElement.value = (currencyAmount * exchange).toFixed(2);
});

plnAmountElement.addEventListener("input", () => {
    let plnAmount = plnAmountElement.value;
    let exchange = +exchangeElement.value.slice(4);
    currencyAmountElement.value = (plnAmount / exchange).toFixed(2);
});