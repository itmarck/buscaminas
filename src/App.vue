<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-title>Mines</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat to="/">Game</v-btn>
        <v-btn flat to="/rooms">Rooms</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <router-view />
  </v-app>
</template>

