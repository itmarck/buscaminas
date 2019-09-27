<template>
  <v-layout class="view" column>
    <v-container>
      <v-card>
        <v-toolbar card>
          <v-toolbar-title>
            <span class="subheading">GAME OPTIONS</span>
          </v-toolbar-title>
        </v-toolbar>
        <v-container pa-2>
          <v-card-text>
            <v-slider
              v-model="width"
              hint="Number of tiles in width"
              persistent-hint
              color="grey"
              thumb-label="always"
              min="5"
              max="30"
            ></v-slider>
          </v-card-text>
          <v-card-text>
            <v-slider
              v-model="height"
              hint="Number of tiles in height"
              persistent-hint
              color="grey"
              thumb-label="always"
              min="5"
              max="30"
            ></v-slider>
          </v-card-text>
          <v-card-text>
            <v-slider
              v-model="difficulty"
              hint="Difficulty of game"
              persistent-hint
              color="grey"
              thumb-label="always"
              min="1"
              max="9"
            ></v-slider>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat @click="createGame">CREATE GAME</v-btn>
          </v-card-actions>
        </v-container>
      </v-card>
    </v-container>
  </v-layout>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      width: 10,
      height: 10,
      difficulty: 5
    };
  },
  methods: {
    ...mapMutations(["setOptions", "newGame", "toggleStarted"]),
    createGame() {
      let tiles = this.width * this.height;
      let mines = Math.trunc(tiles * (this.difficulty / 10));
      this.setOptions({
        width: this.width,
        height: this.height,
        mines: mines
      });
      this.newGame();
      this.toggleStarted();
    }
  }
};
</script>
