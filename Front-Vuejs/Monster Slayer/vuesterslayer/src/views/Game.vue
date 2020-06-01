<template>
  <div class="game">
    <!--BARRAS DE VIDA -->
    <hpbars :playerHp="playerHp" :enemyHp="enemyHp"></hpbars>

    <!--OPCIONES DE JUEGO -->
    <options
      v-on:attack="attack"
      v-on:specialAttack="specialAttack"
      v-on:heal="heal"
      v-on:giveUp="giveUp"
      :heals="healTimes"
      :specials="specialTimes"
    ></options>
  </div>
</template>

<script>
import hpbars from "@/components/hpbars.vue";
import options from "@/components/options.vue";

export default {
  name: "Game",
  components: {
    hpbars,
    options
  },
  data() {
    return {
      playerHp: 80,
      enemyHp: 80,
      healHp: 25,
      healTimes: 2,
      specialTimes: 2
    };
  },
  methods: {
    attack() {
      let damage = this.calculateDamage(3, 10);
      this.enemyHp -= damage;
      this.enemyAttack();
    },
    calculateDamage(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    enemyAttack() {
      let damage = this.calculateDamage(5, 12);
      this.playerHp -= damage;
    },
    heal() {
      if (this.playerHp < 50 && this.healTimes > 0) {
        this.playerHp += this.healHp;
        this.healTimes--;
        this.enemyAttack();
      }
    },
    specialAttack() {
      if (this.specialTimes > 0) {
        let damage = 20;
        this.enemyHp -= damage;
        this.specialTimes--;
        this.enemyAttack();
      }
    },
    giveUp() {
      this.enemyHp = 80;
      this.playerHp = 80;
      this.specialTimes = 2;
      this.healTimes = 2;
    }
  }
};
</script>

<style scoped>
</style>