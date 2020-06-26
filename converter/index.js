const inputAmount = document.getElementById("amount");
const convertFromCurrency = document.getElementById("convertFrom");
const convertToCurrency = document.getElementById("convertTo");
const convertCurrencyButton = document.getElementById("convert-button");
const result = document.getElementById("result");
convertCurrencyButton.addEventListener("click", calculate);
convertFromCurrency.addEventListener("change", calculate);
convertToCurrency.addEventListener("change", calculate);
inputAmount.addEventListener("input", calculate);
console.log(convertFromCurrency[1].value);

function calculate() {

    const apiUrl = "http://apilayer.net/api/live?access_key=7dec7d90e81209854675ca2e03839940&currencies=EUR,CHF,CAD,PLN&source=USD&format=1";
    console.log(apiUrl);
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            let exchangeRateInEuro = data.quotes.USDEUR;
            let exchangeRateInFranc = data.quotes.USDCHF;
            let exchangeRateInDollar = data.quotes.USDUSD;
            /* let l = parseFloat(inputAmount.value * exchangeRateInEuro);
            console.log(l); */
            if (convertFromCurrency[2].value === "Usd" && convertToCurrency.value[1] === "Euro") {
                let amountInEuro = parseFloat(inputAmount.value * exchangeRateInEuro);
                console.log(amountInEuro);
                result.append(amountInEuro);
            }

        })
};

calculate();