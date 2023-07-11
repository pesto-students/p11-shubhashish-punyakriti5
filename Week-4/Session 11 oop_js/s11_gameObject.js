game = {
  lives: 3,
  coins: 0,
  points: function () {
    return this.coins * 10;
  },
  playerdies: function () {
    if (this.lives > 0) this.lives--;
  },
  newGame: function () {
    this.lives = 3;
    this.coins = 0;
    console.log(
      `lives = ${this.lives}\ncoins  = ${this.coins}\npoints = ${this.points()}`
    );
  },
};g

game.newGame();
game.coins = 2;
console.log(`points = ${game.points()}`);
game.playerdies();
console.log(`lives = ${game.lives}`);
game.playerdies();
game.playerdies();
console.log(`lives = ${game.lives}`);
game.newGame();
