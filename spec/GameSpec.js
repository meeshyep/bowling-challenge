describe("Game", function() {

  beforeEach(function() {
    frame = jasmine.createSpyObj('frame',['addScore','calculateScore','frameResult']);
    frame.calculateScore.and.returnValue(6);
    spyOn(window, "frame").and.returnValue(frame);
    game = new Game(frame: frame, strike: frame, spare: frame, final: frame});
  });

  describe('Adding frames', function() {
    it("should create new frame", function() {
      game.nextFrame();
      expect(frame).toHaveBeenCalled();
    });

    it("Should save current frame", function() {
      game.nextFrame();
      expect(game.framesHistory).toEqual([frame]);
    });

    describe('Adding Bonus Spare Frame', function(){
      beforeEach(function() {
        frame.frameResult.and.returnValue('spare');
      });

      it("Should create new Bonus Spare Frame", function(){
        game.nextFrame();
        game.addScore(5);
        game.addScore(5);
        expect(game._nextFrameType()).toEqual('spare');
      });
    });

    describe('Adding Bonus Strike Frame', function(){
      beforeEach(function() {
        frame.frameResult.and.returnValue('strike');
      });

      it("Should create new Bonus Strike Frame", function(){
        game.nextFrame();
        game.addScore(10);
        expect(game._nextFrameType()).toEqual('strike');
      });
    });
  });

  describe('Adding Final Frame', function(){
    beforeEach(function() {
      for (var i = 0; i < 9; i++) {
        game.nextFrame();

        frame.frameResult.and.returnValue('final');
      }
    });

    it("Should create new Bonus Spare Frame", function(){
      expect(game._nextFrameType()).toEqual('final');
    });
  });

  describe('Adding Scores to Frame', function() {
    it("Should add Score to new Frame", function() {
      game.nextFrame();
      game.addScore(1);
      expect(frame.addScore).toHaveBeenCalled();
    });
  });

  describe('Calculating Scores for Frame', function() {
    it('adds score from frame', function(){
      game.nextFrame();
      game.addScore(1);
      game.addScore(5);
      expect(game.calculateGameScore()).toEqual(6);
    });
  });
});
