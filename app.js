let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

let fromEuroToDollar = (euros) => {
    return euros*oneEuroIs["USD"];
};
let fromDollarToYen = (dollar) => {
    return dollar * oneEuroIs["JPY"] / oneEuroIs["USD"];
};
let fromYenToPound = (yenes) => {
    return yenes * oneEuroIs["GBP"] / oneEuroIs["JPY"];
};

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound};


console.log(fromYenToPound(3))