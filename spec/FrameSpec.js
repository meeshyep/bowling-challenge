describe ("Frame", function() {

  beforeEach function() {
    frame = new Frame();
    finalFrame = new Frame('final');
    bonusSpareFrame = new Frame('spare');
    bonusStrikeFrame = new Frame('strike');
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
    it("Knows the result of the frame - normal", function() {
      frame.addScore(5);
      frame.addScore(1);
      expect(frame.frameResult()).toEqual(null);
    });

    it("Knows the result of the frame - spare", function() {
      frame.addScore(5);
      frame.addScore(5);
      expect(frame.frameResult()).toEqual('spare');
    });
    it("Knows the result of the frame - strike", function() {
      frame.addScore(10);
      frame.addScore(0);
      expect(frame.frameResult()).toEqual('strike');
    });
  });

  describe('Calculating the Frame Score', function() {
    it "Should return 0 on a Gutter Frame", fucntion() {
      frame.addScore(0);
      frame.addScore(0);
      expect(frame.calculatedScore()).toEqual(0);
    });

    it("Should return sum of pins on a Normal Frame", function() {
      frame.addScore(1);
      frame.addScore(2);
      expect(frame.calculatedScore()).toEqual(3);
    })
  });

  describe("Spare Bonus Game", function() {
    beforeEach(function() {
      bonusSpareFrame = new Frame('spare');
    });
    it "Should add the Bonus of the first Score", function() {  }
    bonusSpareFrame.addScore(5);
    bonusSpareFrame.addScore(5);
    expect(bonusSpareFrame.calculatedScore()).toEqual(10);
  })
});

describe("Spare Bonus Game", function(){
  beforeEach(function() {
    bonusStrikeFrame = new Frame('strike');
  });
  describe("Strike Bonus Game", function(){
    it "Should add the Bonus of the combined Score", function() {
      bonusStrikeFrame.addScore(2);
      bonusStrikeFrame.addScore(3);
      expect(bonusStrikeFrame.calculatedScore()).toEqual(10);
    })
  });
  describe("Final Frame", function(){
    it('should add bonus of combined score', function(){
      finalFrame.addScore(3);
      finalFrame.addScore(4);
      expect(finalFrame.calculateScore()).toEqual(7);
    });
    it('should add one roll bonus for spare', function(){
      finalFrame.addScore(3);
      finalFrame.addScore(7);
      finalFrame.addScore(5);
      expect(finalFrame.calculateScore()).toEqual(15);
    });
    it('should add one roll bonus for strike', function(){
      finalFrame.addScore(10);
      finalFrame.addScore(10);
      expect(finalFrame.calculateScore()).toEqual(20);
    });
    it('should add two roll bonus for doublestrike', function(){
      finalFrame.addScore(10);
      finalFrame.addScore(10);
      finalFrame.addScore(10);
      expect(finalFrame.calculateScore()).toEqual(30);
    })
  });

  describe('Defending Against Edge Cases', function() {
    it("should not accept more than two scores unless final", function() {
      frame.addScore(5);
      frame.addScore(1);
      expect(function(){frame.addScore(5)}).toThrow(new Error("The Frame in already over"));
    });
    it("should not accept two scores over 10", function() {
      frame.addScore(6);
      expect(function(){frame.addScore(7)}).toThrow(new Error("Maximum Frame Score Reached"));
    });
    it("should not accept three scores over 30 on final w/ strikes", function() {
      finalFrame.addScore(10);
      finalFrame.addScore(10);
      expect(function(){finalFrame.addScore(15)}).toThrow(new Error("Maximum Frame Score Reached"));
    });
  });
