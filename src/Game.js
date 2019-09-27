class Tile {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.number = 0;
    this.isMine = false;
    this.show = false;
    this.isFlag = false;
    this.isDisabled = false;
  }
}

export default class Game {
  constructor(x, y, mines) {
    this.x = x;
    this.y = y;
    this.tiles = [];
    this.mines = mines;
    this.init();
  }

  init() {
    this.fillTiles();
    this.placeMines();
    this.fillNumbers();
    this.showEmptyTiles();
  }

  showEmptyTiles() {
    this.tiles.forEach((tile) => {
      if (tile.number == 0 && !tile.isMine) {
        tile.show = true;
        tile.isDisabled = true;
        this.getAroundTiles(tile).forEach((e) => {
          e.show = true;
          e.isDisabled = true;
        });
      }
    });
  }

  fillTiles() {
    for (let j = 0; j < this.y; j++) {
      for (let i = 0; i < this.x; i++) {
        this.tiles.push(new Tile(i, j));
      }
    }
  }

  placeMines() {
    for (let i = 0; i < this.mines; i++) {
      let random = Math.trunc(Math.random() * (this.x * this.y));
      this.tiles[random].isMine = true;
    }
  }

  fillNumbers() {
    this.tiles.forEach((tile) => {
      tile.number = this.countMines(tile);
    });
  }

  getTile(x, y) {
    return this.tiles.find((e) => x == e.x && y == e.y);
  }

  getAroundTiles(tile) {
    let x = tile.x;
    let y = tile.y;
    let tiles = [];
    tiles.push(this.getTile(x - 1, y - 1));
    tiles.push(this.getTile(x, y - 1));
    tiles.push(this.getTile(x + 1, y - 1));

    tiles.push(this.getTile(x - 1, y + 1));
    tiles.push(this.getTile(x, y + 1));
    tiles.push(this.getTile(x + 1, y + 1));

    tiles.push(this.getTile(x - 1, y));
    tiles.push(this.getTile(x + 1, y));

    return tiles.filter((e) => e != undefined);
  }

  countMines(tile) {
    return this.getAroundTiles(tile).filter((e) => e.isMine).length;
  }
}
