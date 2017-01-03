describe("Celsius Converter Tests", function() {
  it("Should have a function to convert Celsius named 'celsToFahr':",function(){
    expect(celsToFahr).toBeDefined();
  });

  it("When provided a number as an input, 'celsToFahr' should return a number':", function() {
    expect(celsToFahr(100)).toEqual(jasmine.any(Number));
  });

  it("Should return the correct conversion from Celsius to Fahrenheit:", function() {
    expect(celsToFahr(100)).toEqual(212);
    expect(celsToFahr(0)).toEqual(32);
  });

  describe("Error handle and protect against JS automatic type conversion", function(){
    it("Should return a String if a non numeric input is provided:", function() {
    expect(celsToFahr("Banana")).toEqual(jasmine.any(String));
    });

    it("If the input is not a number, the returned value should be a String telling the user 'the input was invalid':", function(){
      expect(celsToFahr("bananan")).toEqual('the input was invalid');
      expect(celsToFahr(true)).toEqual('the input was invalid');
      expect(celsToFahr({})).toEqual('the input was invalid');
      expect(celsToFahr([])).toEqual('the input was invalid');
      expect(celsToFahr(function(){})).toEqual('the input was invalid');
    });
  });
});