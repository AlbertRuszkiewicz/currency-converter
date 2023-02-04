{
    const getExchange = (exchangeElement) => +exchangeElement.value.slice(4);

    const currencyAmountCalc = (plnAmountElement, exchangeElement) => (plnAmountElement.value / getExchange(exchangeElement)).toFixed(2);

    const plnAmountCalc = (currencyAmountElement, exchangeElement) => (currencyAmountElement.value * getExchange(exchangeElement)).toFixed(2);

    const exchangeNameChange = (exchangeElement) => {
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
    const exchangeModification = (currencyAmountElement, exchangeElement, plnAmountElement) => {
        exchangeElement.addEventListener("input", () => {
            exchangeNameChange(exchangeElement);
            currencyAmountElement.value = (plnAmountElement.value >= 0) ? currencyAmountCalc(plnAmountElement, exchangeElement) : "";
        });
    }

    const currencyAmountModification = (currencyAmountElement, exchangeElement, plnAmountElement) => {
        currencyAmountElement.addEventListener("input", () => {
            plnAmountElement.value = (plnAmountElement.value >= 0) ? plnAmountCalc(currencyAmountElement, exchangeElement) : "";
        });
    }

    const plnAmountModification = (currencyAmountElement, exchangeElement, plnAmountElement) => {
        plnAmountElement.addEventListener("input", () => {
            currencyAmountElement.value = (plnAmountElement.value >= 0) ? currencyAmountCalc(plnAmountElement, exchangeElement) : "";
        });
    }

    const init = () => {
        console.log("Hello Dev");

        let currencyAmountElement = document.querySelector(".js-currencyAmount");
        const exchangeElement = document.querySelector(".js-exchange");
        let plnAmountElement = document.querySelector(".js-plnAmount");

        exchangeModification(currencyAmountElement, exchangeElement, plnAmountElement);
        plnAmountModification(currencyAmountElement, exchangeElement, plnAmountElement);
        currencyAmountModification(currencyAmountElement, exchangeElement, plnAmountElement);
    };
    init();
}