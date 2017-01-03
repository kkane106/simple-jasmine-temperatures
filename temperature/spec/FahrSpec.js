describe("Fahrenheit Converter Tests", function() {
  it("Should have a function to convert Fahrenheit named 'fahrToCels':",function(){
    expect(fahrToCels).toBeDefined();
  });

  it("When provided a number as an input, 'fahrToCels' should return a number':", function() {
    expect(fahrToCels(100)).toEqual(jasmine.any(Number));
  });

  it("Should return the correct conversion from Fahrenheit to Celsius:", function() {
    expect(fahrToCels(212)).toEqual(100);
    expect(fahrToCels(32)).toEqual(0);
  });

  describe("Error handle and protect against JS automatic type conversion", function(){
    it("Should return a String if a non numeric input is provided:", function() {
    expect(fahrToCels("Banana")).toEqual(jasmine.any(String));
    });

    it("If the input is not a number, the returned value should be a String telling the user 'the input was invalid':", function(){
      expect(fahrToCels("bananan")).toEqual('the input was invalid');
      expect(fahrToCels(true)).toEqual('the input was invalid');
      expect(fahrToCels({})).toEqual('the input was invalid');
      expect(fahrToCels([])).toEqual('the input was invalid');
      expect(fahrToCels(function(){})).toEqual('the input was invalid');
    });
  });
});