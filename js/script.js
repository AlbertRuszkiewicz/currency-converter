{
    const currencyAmountCalc = (plnAmountElement, exchangeElement) => {
        const exchange = +exchangeElement.value.slice(4);
        return (plnAmountElement.value / exchange).toFixed(2);
    };
    const plnAmountCalc = (currencyAmountElement, exchangeElement) => {
        const exchange = +exchangeElement.value.slice(4);
        return (currencyAmountElement.value * exchange).toFixed(2);
    };
    const exchangeModification = (exchangeElement) => {
        let currencyFullNameElement = document.querySelector(".js-currencyFullName");
        let currencyShortNameElement = document.querySelector(".js-currencyShortName");
        const currencyName = exchangeElement.value.slice(0, 3);
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
        };
    };
    const init = () => {
        console.log("Hello Dev");

        let currencyAmountElement = document.querySelector(".js-currencyAmount");
        const exchangeElement = document.querySelector(".js-exchange");
        let plnAmountElement = document.querySelector(".js-plnAmount");

        exchangeElement.addEventListener("input", () => { exchangeModification(exchangeElement); currencyAmountElement.value = currencyAmountCalc(plnAmountElement, exchangeElement); });
        plnAmountElement.addEventListener("input", () => { currencyAmountElement.value = currencyAmountCalc(plnAmountElement, exchangeElement) });
        currencyAmountElement.addEventListener("input", () => { plnAmountElement.value = plnAmountCalc(currencyAmountElement, exchangeElement) });
    };
    init();
}