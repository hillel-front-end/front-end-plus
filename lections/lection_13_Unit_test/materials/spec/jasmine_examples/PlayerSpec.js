describe("Player", function() {
  var Player = require('../../lib/jasmine_examples/Player');
  var Song = require('../../lib/jasmine_examples/Song');
  var player;
  var song;

  beforeEach(function() {
    player = new Player();
    song = new Song();
  });

  it("should x == y", function(){
    var x = 10;
    var y = 10;

    expect(x).toEqual(y);
  });

  it("should be able to play a Song", function() {
    spyOn(player, 'foo'); // 1

    var resp = player.play(song); // 2

    // 3
    expect(player.currentlyPlayingSong).toEqual(song);
    expect(player.foo).toHaveBeenCalledTimes(1);
    expect(player.foo).toHaveBeenCalledWith(200);
    expect(resp).toEqual(false);
    expect(player.isPlaying).toEqual(true);
  });

  describe("when song has been paused", function() {
    var DATA = {};
    beforeEach(function() {
      DATA.foo = 40;
    });

    it("should indicate that the song is currently paused", function() {
      expect(player.isPlaying).toBeFalsy();

      // demonstrates use of 'not' with a custom matcher
      expect(player).not.toBePlaying(song);
    });

    it("should be possible to resume", function() {
      player.resume();
      expect(player.isPlaying).toBeTruthy();
      expect(player.currentlyPlayingSong).toEqual(song);
    });
  });

  // demonstrates use of spies to intercept and test method calls
  it("tells the current song if the user has made it a favorite", function() {
    spyOn(song, 'persistFavoriteStatus');

    player.play(song);
    player.makeFavorite();

    expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  });

  //demonstrates use of expected exceptions
  describe("#resume", function() {
    it("should throw an exception if song is already playing", function() {
      player.play(song);

      expect(function() {
        player.resume();
      }).toThrowError("song is already playing");
    });
  });
});
