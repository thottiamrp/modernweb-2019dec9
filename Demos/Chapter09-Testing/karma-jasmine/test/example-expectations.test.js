
describe('example-expectations', () => {
    // See https://jasmine.github.io/api/edge/matchers.html 
    // for more matchers

    it('is true', () => {
      let someBoolean = true;
      expect(someBoolean).toBeTruthy();
    });

    it('is 42', () => {
      const value = 42;
      expect(value).toEqual(42);
    });

    it('is not 42', () => {
      const value = 42;
      expect(value).not.toEqual(0);
    });

    it('is false', () => {
      let someBoolean = false;
      expect(false).toBeFalsy();
    });

    it('is not null', () => {
      const iAmNotNull = 'foo'; 
      expect(iAmNotNull).not.toBeNull();
    });

    it('is null', () => {
      const iAmNull = null; 
      expect(iAmNull).toBeNull();
    });
});
