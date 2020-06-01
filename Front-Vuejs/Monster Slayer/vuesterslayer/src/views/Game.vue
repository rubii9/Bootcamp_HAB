<template>
  <div class="game">
    <!--BARRAS DE VIDA -->
    <hpbars :playerHp="playerHp" :enemyHp="enemyHp"></hpbars>

    <!--  MENSAJE RESULTADO -->
    <message :seewinner="seewinner" :seelooser="seelooser" v-on:giveUp="giveUp"></message>

    <!--OPCIONES DE JUEGO -->
    <options
      v-on:attack="attack"
      v-on:specialAttack="specialAttack"
      v-on:heal="heal"
      v-on:giveUp="giveUp"
      :heals="healTimes"
      :specials="specialTimes"
      v-show="end"
    ></options>
  </div>
</template>

<script>
import hpbars from "@/components/hpbars.vue";
import options from "@/components/options.vue";
import message from "@/components/message.vue";

export default {
  name: "Game",
  components: {
    hpbars,
    options,
    message
  },
  data() {
    return {
      playerHp: 80,
      enemyHp: 80,
      healHp: 25,
      healTimes: 2,
      specialTimes: 2,
      seewinner: false,
      seelooser: false,
      end: true
    };
  },
  methods: {
    attack() {
      let damage = this.calculateDamage(3, 10);
      this.enemyHp -= damage;
      this.enemyAttack();
      this.hpcontroll();
    },
    calculateDamage(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    enemyAttack() {
      let damage = this.calculateDamage(5, 12);
      this.playerHp -= damage;
      this.hpcontroll();
    },
    heal() {
      if (this.playerHp < 50 && this.healTimes > 0) {
        this.playerHp += this.healHp;
        this.healTimes--;
        this.enemyAttack();
        this.hpcontroll();
      }
    },
    specialAttack() {
      if (this.specialTimes > 0) {
        let damage = this.calculateDamage(15, 25);
        this.enemyHp -= damage;
        this.specialTimes--;
        this.enemyAttack();
        this.hpcontroll();
      }
    },
    giveUp() {
      this.enemyHp = 80;
      this.playerHp = 80;
      this.specialTimes = 2;
      this.healTimes = 2;
      this.seewinner = false;
      this.seelooser = false;
      this.end = true;
    },
    hpcontroll() {
      if (this.playerHp <= 0 && this.enemyHp <= 0) {
        this.playerHp = 0;
        this.enemyHp = 0;
        this.seelooser = true;
        this.end = false;
      }
      if (this.playerHp <= 0) {
        this.playerHp = 0;
        this.seelooser = true;
        this.end = false;
      }
      if (this.enemyHp <= 0) {
        this.enemyHp = 0;
        this.seewinner = true;
        this.end = false;
      }
    }
  }
};
</script>

<style scoped>
</style>