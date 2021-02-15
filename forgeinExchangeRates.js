const fetch = require('node-fetch');

let url = "https://api.exchangeratesapi.io/latest?base=EUR";

let settings = { method: "Get" };



fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
        let gdp = json.rates.GBP
        let usd = json.rates.USD

        


        console.log("GDP = " + gdp);
    }


    );