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
  it "Should add the Bonus of the combined Score", function() {
    bonusStrikeFrame.addScore(2);
    bonusStrikeFrame.addScore(3);
    expect(bonusStrikeFrame.calculatedScore()).toEqual(10);
  })
});
