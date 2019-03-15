describe("A suite with some shared setup", function() {
  var foo = 0;

  // the beforeEach function is called once before each spec in the describe in which it is called

  beforeEach(function() {
    foo += 1;
  });

  //the afterEach function is called once after each spec.

  afterEach(function() {
    foo = 0;
  });

  describe("A suite with some shared setup", function() {
    // called only once before all the specs in describe are run
    let bar = 0;
    beforeAll(function() {
      bar = 1;
    });

    // the afterAll function is called after all specs finish

    afterAll(function() {
      bar = 0;
    });
  });
});
