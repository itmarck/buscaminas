<template>
  <v-layout class="view" column>
    <v-container 
      class="tablero"
      :style="`grid-template-columns: repeat(${options.width}, 1fr)`">
      <v-btn
        class="tile"
        v-for="(tile, index) of tiles"
        :key="index"
        @click="showAndValidateTile(tile)"
        @contextmenu.prevent="showHideFlag(tile)"
        :disabled="tile.isDisabled"
        raised
      >
        <v-icon small v-if="tile.isFlag">flag</v-icon>
        <div v-else>
          <div v-if="tile.show">
            <v-icon small v-if="tile.isMine">brightness_6</v-icon>
            <span v-else :class="`n${tile.number}`"> {{ tile.number }} </span>
          </div>
        </div>
      </v-btn>
    </v-container>
    <v-container>
      <v-card>
        <v-layout justify-space-between align-center>
          <v-btn flat @click="newGame">NEW GAME</v-btn>
          <div>
            <v-icon v-if="lose">sentiment_very_dissatisfied</v-icon>
            <v-icon v-else> {{ this.winner ? "favorite" : "mood" }} </v-icon>
          </div>
          <v-btn flat @click="toggleStarted">OPTIONS</v-btn>
        </v-layout>
      </v-card>
    </v-container>
  </v-layout>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "game",
  computed: {
    ...mapState(["tiles", "winner", "lose", "options"])
  },
  methods: {
    ...mapMutations(["newGame", "setWinner", "setLose", "toggleStarted"]),
    showAndValidateTile(tile) {
      if (this.lose || this.winner) return;
      tile.show = true;
      tile.isFlag = false;
      if (tile.isMine) {
        this.tiles.forEach(tile => {
          if (tile.isMine) tile.show = true;
          if (tile.isMine && tile.isFlag) tile.isFlag = false;
        });
        this.setLose(true);
      } else {
        tile.isDisabled = true;
        this.setWinner(this.isWinner());
      }
    },
    showHideFlag(tile) {
      if (this.lose || this.winner) return;
      if (tile.isFlag) tile.isFlag = false;
      else tile.isFlag = true;
    },
    isWinner() {
      let winner = true;
      this.tiles.forEach(tile => {
        if (!tile.show && !tile.isMine) winner = false;
      });
      return winner;
    }
  }
};
</script>

<style scoped>
.view {
  flex-grow: 0;
}
.tablero {
  display: grid;
  grid-gap: 4px;
}
.tile {
  min-width: 0;
  margin: 0;
  height: 3em;
}

.n0 {
  color: transparent;
}
.n1 {
  color: blue;
}
.n2 {
  color: green;
}
.n3 {
  color: red;
}
.n4 {
  color: purple;
}
.n5 {
  color: hotpink;
}
.n6 {
  color: #e02209;
}
.n7 {
  color: #e02209;
}
.n8 {
  color: #e02209;
}
</style>

