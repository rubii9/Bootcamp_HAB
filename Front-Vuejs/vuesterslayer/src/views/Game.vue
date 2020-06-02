<template>
  <div class="game">
    <!--BARRAS DE VIDA -->
    <hpbars :playerHp="playerHp" :enemyHp="enemyHp"></hpbars>

    <!--  REGISTRO DE JUEGO -->
    <logs :logs="logs"></logs>

    <!--  RESET GAME -->
    <reset v-show="!end" v-on:reset="reset"></reset>

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
import reset from "@/components/reset.vue";
import logs from "@/components/logs.vue";

import Swal from "sweetalert2";

export default {
  name: "Game",
  components: {
    hpbars,
    options,
    reset,
    logs
  },
  data() {
    return {
      playerHp: 80,
      enemyHp: 80,
      healHp: 35,
      healTimes: 2,
      specialTimes: 2,

      end: true,
      logs: []
    };
  },
  methods: {
    attack() {
      let damage = this.calculateDamage(3, 10);
      this.enemyHp -= damage;

      this.logs.unshift({
        text: "Player hits " + damage + "Hp"
      });
      if (this.logs[2]) {
        this.logs.length = 1;
      }
      this.hpcontroll();
      this.enemyAttack();
    },
    calculateDamage(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    enemyAttack() {
      let damage = this.calculateDamage(10, 15);
      this.playerHp -= damage;
      this.logs.unshift({
        text: "Enemy hits " + damage + "Hp"
      });
      if (this.logs[2]) {
        this.logs.length = 1;
      }
      this.hpcontroll();
    },
    heal() {
      if (this.playerHp < 50 && this.healTimes > 0) {
        this.playerHp += this.healHp;
        this.healTimes--;
        this.logs.unshift({
          text: "Player heals " + this.healHp + "Hp"
        });
        if (this.logs[2]) {
          this.logs.length = 1;
        }
        this.hpcontroll();
        this.enemyAttack();
      }
    },
    specialAttack() {
      if (this.specialTimes > 0) {
        let damage = this.calculateDamage(15, 25);
        this.enemyHp -= damage;
        this.specialTimes--;
        this.logs.unshift({
          text: "Player hits " + damage + "Hp" + " with speacial attack"
        });
        if (this.logs[2]) {
          this.logs.length = 1;
        }
        this.hpcontroll();
        this.enemyAttack();
      }
    },
    giveUp() {
      this.enemyHp = 80;
      this.playerHp = 80;
      this.specialTimes = 2;
      this.healTimes = 2;
      this.end = true;
      this.logs = [];
      Swal.fire({
        title: "Surrender :(",
        text: "Not lucky this time",
        confirmButtonText: "Go Home"
      });
      this.goHome();
    },
    reset() {
      this.enemyHp = 80;
      this.playerHp = 80;
      this.specialTimes = 2;
      this.healTimes = 2;
      this.end = true;
      this.logs = [];
    },
    hpcontroll() {
      if (this.playerHp <= 0 && this.enemyHp <= 0) {
        this.playerHp = 0;
        this.enemyHp = 0;
        this.end = false;
        Swal.fire({
          title: "Ops",
          text: "Something was wrong",
          confirmButtonText: "Try again"
        });
      }
      if (this.playerHp <= 0) {
        this.playerHp = 0;
        this.end = false;
        Swal.fire({
          title: "You lost",
          text: "Not lucky this time",
          confirmButtonText: "Try again"
        });
      }
      if (this.enemyHp <= 0) {
        this.enemyHp = 0;
        this.end = false;
        Swal.fire({
          title: "You win",
          text: "Congrats!🏆",
          confirmButtonText: "ok"
        });
      }
    },
    goHome() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped></style>
