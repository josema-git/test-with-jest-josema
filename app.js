// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    // Convert the given valueInDollar to yen
    let valueInYen = valueInDollar * 156.5;
    // return the yen value
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    // Convert the given valueInYen to pound
    let valueInPound = valueInYen * 0.87;
    // return the pound value
    return valueInPound;
}
module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound};