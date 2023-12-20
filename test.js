const { fromEuroToDollar } = require('./app.js');
const { fromDollarToYen } = require('./app.js');
const { fromYenToPound } = require('./app.js');
test("One euro should be 1.07 dollars", function() {

    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;

    expect(dollars).toBe(expected);
})
test("One Dollar shoud be 146.26 yenes", function() {

    const yenes = fromDollarToYen(3.5);
    const expected = (156.5 * 3.5) / 1.07;

    expect(yenes).toBe(expected);
})
test("One yen should be 0.02 dollars", function() {

    const pounds = fromYenToPound(3.5);
    const expected = (3.5*0.87) / 156.5;

    expect(pounds).toBe(expected);
})
