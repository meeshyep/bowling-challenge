describe("SpareFrame", function() {

  beforeEach(function() {
    spareFrame = new SpareFrame();
  });

  describe("Spare Bonus Game", function(){
    it('Should add bonus of first score', function(){
      spareFrame.addScore(2);
      spareFrame.addScore(3);
      expect(spareFrame.calculateScore()).toEqual(7);
    });

    it('Should finish on first roll strike', function(){
      spareFrame.addScore(10);
      expect(function(){spareFrame.addScore(5)}).toThrow(new Error("The Frame is already over"));
    })
  });

  describe('Frame Type', function() {
    it("Knows the frame result", function() {
      spareFrame.addScore(5);
      spareFrame.addScore(1);
      expect(spareFrame.frameResult()).toEqual('frame');
    });

    it("Knows the frame result is a spare", function() {
      spareFrame.addScore(5);
      spareFrame.addScore(5);
      expect(spareFrame.frameResult()).toEqual('spare');
    });

    it("Knows the frame result is a strike", function() {
      spareFrame.addScore(10);
      expect(spareFrame.frameResult()).toEqual('strike');
    });
  });

  describe('Defending Against Edge Cases', function() {
    it("Should not accept more than two scores", function() {
      spareFrame.addScore(5);
      spareFrame.addScore(1);
      expect(function(){spareFrame.addScore(5)}).toThrow(new Error("The Frame is already over"));
    });

    it("Should not accept two scores over 10", function() {
      spareFrame.addScore(6);
      expect(function(){spareFrame.addScore(7)}).toThrow(new Error("Maximum Frame Score Reached"));
    });
  });
});
