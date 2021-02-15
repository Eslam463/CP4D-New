module.exports = app => {
    const customers = require("../controllers/customer.controller.js");
    const fetch = require('node-fetch');



    app.get("/", function (req, res) {
        res.render('index')
    });

    app.get('/login', function (req, res) {
        res.render('login')
    })

    app.get('/cat_account/:customerId', customers.findAccountsById);

    app.get('/account_details', function (req, res) {
        res.render('account_details')
    })


    // Retrieve a single Customer with customerId
    app.get("/customers/:customerId", customers.findOne);



    app.get("/more_details/:customerId", customers.findDetailsById);


    app.get('/show_analysis', function (req, res) {

        res.render('show_analysis')
    })


    app.get('/payCredit', function (req, res) {

        res.render('payCredit')
    })
    // let url = "https://api.exchangeratesapi.io/latest?base=EUR";
    // let settings = { method: "Get" };

    // fetch(url, settings)
    //     .then(res => res.json())
    //     .then((json) => {
    //         let gdp = json.rates.GBP
    //         let usd = json.rates.USD
    //         data = [{ "GDP": gdp , "USD" :usd}]
    //         //res.render('../views/sidebar',data)

    //         //console.log(gdp + "   z" + usd)


    //     });


};