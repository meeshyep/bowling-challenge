describe("StrikeFrame", function() {

  beforeEach(function() {
    strikeFrame = new StrikeFrame();
  });

  describe("Strike Bonus Game", function(){
    it('Should add bonus of both scores', function(){
      strikeFrame.addScore(2);
      strikeFrame.addScore(3);
      expect(strikeFrame.calculateScore()).toEqual(10);
    });

    it('Should finish on first roll strike', function(){
      strikeFrame.addScore(10);
      expect(function(){strikeFrame.addScore(5)}).toThrow(new Error("The Frame is already over"));
    })
  });

  describe('Frame Type', function() {
    it("Knows the frame result", function() {
      strikeFrame.addScore(5);
      strikeFrame.addScore(1);
      expect(strikeFrame.frameResult()).toEqual('frame');
    });

    it("Knows the frame result is a spare", function() {
      strikeFrame.addScore(5);
      strikeFrame.addScore(5);
      expect(strikeFrame.frameResult()).toEqual('spare');
    });

    it("Knows the frame result is a strike", function() {
      strikeFrame.addScore(10);
      expect(strikeFrame.frameResult()).toEqual('strike');
    });
  });

  describe('Defending Against Edge Cases', function() {
    it("Should not accept more than two scores", function() {
      strikeFrame.addScore(5);
      strikeFrame.addScore(1);
      expect(function(){strikeFrame.addScore(5)}).toThrow(new Error("The Frame is already over"));
    });

    it("Should not accept two scores over 10", function() {
      strikeFrame.addScore(6);
      expect(function(){strikeFrame.addScore(7)}).toThrow(new Error("Maximum Frame Score Reached"));
    });
  });
});
