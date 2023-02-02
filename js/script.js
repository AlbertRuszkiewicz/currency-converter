{
    const getExchange = (exchangeElement) => {
        return +exchangeElement.value.slice(4);
    }
    const currencyAmountCalc = (plnAmountElement, exchangeElement) => {
        return (plnAmountElement.value / getExchange(exchangeElement)).toFixed(2);
    };
    const plnAmountCalc = (currencyAmountElement, exchangeElement) => {
        return (currencyAmountElement.value * getExchange(exchangeElement)).toFixed(2);
    };
    const exchangeModification = (exchangeElement) => {
        let currencyFullNameElement = document.querySelector(".js-currencyFullName");
        let currencyShortNameElement = document.querySelector(".js-currencyShortName");
        const currencyName = exchangeElement.value.slice(0, 3);
        switch (currencyName) {
            case "USD":
                currencyFullNameElement.innerText = "Dolara amerykańskiego";
                break;
            case "UAH":
                currencyFullNameElement.innerText = "Hrywny";
                break;
            case "GBP":
                currencyFullNameElement.innerText = "Funta brytyjskiego";
                break;
            case "CHF":
                currencyFullNameElement.innerText = "Franka Szwajcarskiego";
                break;
            default:
                currencyFullNameElement.innerText = "Euro";
                break;
        };
        currencyShortNameElement.innerText = currencyName;
    };
    const init = () => {
        console.log("Hello Dev");

        let currencyAmountElement = document.querySelector(".js-currencyAmount");
        const exchangeElement = document.querySelector(".js-exchange");
        let plnAmountElement = document.querySelector(".js-plnAmount");

        exchangeElement.addEventListener("input", () => {
            exchangeModification(exchangeElement);
            currencyAmountElement.value = currencyAmountCalc(plnAmountElement, exchangeElement);
        });

        plnAmountElement.addEventListener("input", () => {
            currencyAmountElement.value = currencyAmountCalc(plnAmountElement, exchangeElement)
        });

        currencyAmountElement.addEventListener("input", () => {
            plnAmountElement.value = plnAmountCalc(currencyAmountElement, exchangeElement)
        });
    };
    init();
}