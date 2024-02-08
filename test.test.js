const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    const euros = 3.5;
    const expected = 3.5 * 1.07; 
    
    const result = fromEuroToDollar(euros);
    
    expect(result).toBe(expected);
});

test("One dollar should be 156.5 yen", function() {
    const dollars = 3.5;
    const expected = 3.5 * 156.5; 
    
    const result = fromDollarToYen(dollars);
    
    expect(result).toBe(expected);
});

test("One yen should be 0.87 pound", function() {
    const yen = 3.5;
    const expected = 3.5 * 0.87; 
    
    const result = fromYenToPound(yen);
    
    expect(result).toBe(expected);
});