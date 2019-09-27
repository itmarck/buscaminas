<template>
  <div>
    <game-play v-if="started"></game-play>
    <game-create v-else></game-create>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  components: {
    GamePlay: () => import("@/components/GamePlay.vue"),
    GameCreate: () => import("@/components/GameCreate.vue")
  },
  computed: {
    ...mapState(["started"])
  }
};
</script>

