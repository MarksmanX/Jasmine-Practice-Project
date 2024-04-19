
describe("setupInitialValues", function() {
  // Mock DOM elements
  beforeEach(function() {
    document.body.innerHTML = `
      <input type="text" id="loan-amount">
      <input type="text" id="loan-years">
      <input type="text" id="loan-rate">
    `;
  });

  it("should set default values in input fields", function() {
    // Call the function to set initial values
    setupInitialValues();

    // Check if the values are set correctly
    expect(document.getElementById("loan-amount").value).toEqual("10000");
    expect(document.getElementById("loan-years").value).toEqual("5");
    expect(document.getElementById("loan-rate").value).toEqual("0.15");
  });
});

it('should calculate the monthly rate correctly', function () {
  // Check that it works with the default case.
  expect(calculateMonthlyPayment({amount: 10000,years: 5,rate: 0.15})).toEqual("2983.16")
  // Check that it works with another case.
  expect(calculateMonthlyPayment({amount: 15000,years: 20,rate: 0.10})).toEqual("1761.89")
});


it("should return a result with 2 decimal places", function() {
   const result = calculateMonthlyPayment({ amount: 15000, years: 20, rate: 0.70 });

   // Define a regular expression to match a number with exactly 2 decimal places
   const regex = /^\d+\.\d{2}$/;
 
   // Expect the result to match the regular expression
   expect(result).toMatch(regex);
});

