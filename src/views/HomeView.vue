<script setup>
import Button from '../components/UI/Button.vue'

const btnPrimary = 'primary'
</script>

<template>
  <main class="offer">
    <h1 class="offer__title">Make Your Burger</h1>
    <Button :primary="btnPrimary">
      <template v-slot:primary>
        <router-link :to="'/order'"> MAKE BURGER </router-link>
      </template>
    </Button>
    <img class="offer__img" src="../assets/img/offer.png" alt="offer-image" />
  </main>
</template>

<style lang="sass" scoped>
.offer
  display: flex
  align-items: center
  justify-content: space-around
  &__img
    width: 65%
    margin-right: -5rem
    margin-top: -5.7rem
    background-image: url('../assets/img/bg_burger.svg')
    background-size: contain
    background-position: center bottom
    background-repeat: no-repeat
  &__title
    font-weight: 700
    font-size: 6.5rem
    width: 35%
    max-width: 6.5rem
    position: relative

a
  color: white
</style>
