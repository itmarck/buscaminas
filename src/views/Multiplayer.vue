<template>
  <div>
    <v-container>
      <v-card>
        <v-container style="text-align: center">Disponible proximamente</v-container>
      </v-card>
    </v-container>
    <!-- <v-container grid-list-lg>
      <v-layout wrap>
        <v-flex v-for="(sala, i) of salas" :key="i" xs12 sm6>
          <v-card>
            <v-card-title primary-title class="headline">
              {{ sala.nombre }}
            </v-card-title>
            <v-card-text>
              <span class="grey--text"> Difultad: {{ sala.difucultad }} </span
              ><br />
              <strong> {{ sala.enJuego ? "En juego" : "" }} </strong>
              <span>
                {{ sala.estado ? "Disponible" : "No disponible" }}
              </span>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat>Ver</v-btn>
              <v-btn >Unirse</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container> -->
  </div>
</template>

<script>
import firestore from "../firestore";
export default {
  name: "multiplayer",
  data() {
    return {
      salas: []
    };
  },
  created() {
    firestore.collection("salas").onSnapshot(snap => {
      this.salas = snap.docs.map(e => e.data());
    });
  }
};
</script>
