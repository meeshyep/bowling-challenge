describe ("Frame", function() {

  beforeEach function() {
    frame = new Frame();
  });

  describe('Adding scores', function() {
    it "Should accept the first Score", function() {
      frame.addScore(5);
      expect(frame.firstScore).toEqual(5);
    });

    it "Should accept the second Score", function() {
      frame.addScore(3);
      frame.addScore(4);
      expect(frame.secondScore).toEqual(7);
    });
  });

  describe('Frame Type', function() {
    it("Knows the result of the frame", function() {
      frame.addScore(5);
      frame.addScore(1);
      expect(frame.frameResult()).toEqual('frame');
    });

    it("Knows the result of the Frame is a Spare", function() {
      frame.addScore(5);
      frame.addScore(5);
      expect(frame.frameResult()).toEqual('spare');
    });

    it("Knows the result of the Frame is a Strike", function() {
      frame.addScore(10);
      expect(frame.frameResult()).toEqual('strike');
    });
  });

  describe('Calculating the Frame Score', function() {
    it "Should return 0 on a Gutter Frame", fucntion() {
      frame.addScore(0);
      frame.addScore(0);
      expect(frame.calculatedScore()).toEqual(0);
    });

    it("Should return the sum of Pins", function() {
      frame.addScore(1);
      frame.addScore(2);
      expect(frame.calculatedScore()).toEqual(3);
    })
  });

  describe('Defending Against Edge Cases', function() {
    it("Should not accept more than two Scores", function() {
      frame.addScore(5);
      frame.addScore(1);
      expect(function(){frame.addScore(5)}).toThrow(new Error("The Frame is already over"));
    });

    it("Should not accept two scores over 10", function() {
      frame.addScore(6);
      expect(function(){frame.addScore(7)}).toThrow(new Error("Maximum Frame Score Reached"));
    });
  });
