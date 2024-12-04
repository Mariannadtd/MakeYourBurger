<script setup>
import { ref } from 'vue'
import Button from '../components/UI/Button.vue'
import Modal from '../components/UI/Modal.vue'

const btnSecond = 'second'

const links = ref([
  { name: 'Discover', href: '/', class: 'link__discover' },
  { name: 'Make Your Burger', href: '/order', class: 'link__order' }
])

const calls = ref([{ name: 'Call me Back', class: 'call__me' }, { name: '8 800 555-35-35' }])

const showModal = ref(false)

const handleClick = () => {
  showModal.value = true
}
</script>

<template>
  <header>
    <div>
      <a class="logo">
        <img src="../assets/img/logo.svg" alt="logo" />
      </a>
      <nav class="nav">
        <ul>
          <li v-for="link in links" :key="link.name">
            <router-link :to="link.href" custom v-slot="{ navigate, isActive }">
              <div :class="[link.class, isActive ? 'active' : '']" @click="navigate">
                {{ link.name }}
              </div>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>

    <div>
      <ul class="call" v-for="call in calls" :key="call.name">
        <li v-if="call.class">
          <Button :second="btnSecond" @click="handleClick">
            <template v-slot:second>
              <img src="../assets/img/phone.svg" alt="Call Me" class="call__icon" />
              <span>{{ call.name }}</span>
            </template>
          </Button>
        </li>

        <li v-else>
          <span>{{ call.name }}</span>
        </li>
      </ul>
      <a href="#">
        <img class="user" src="../assets/img/user_head.png" alt="" />
      </a>
      <Modal :showModal="showModal" @closeModal="showModal = false" />
    </div>
  </header>
</template>

<style lang="sass" scoped>
header
  display: flex
  align-items: center
  justify-content: space-between
  font-weight: 500
  font-size: 1.6rem
  div, ul
    display: flex
    align-items: center

.logo
  display: inline-block
  background-color: var(--main)
  padding: 2rem
  border-radius: 5rem
  height: 5.7rem
  width: 5.7rem


.call
  position: relative
  &__me
    position: absolute
    z-index: 1
  &__icon
    vertical-align: middle
    height: 2rem
    width: 2rem
    margin-right: .5rem

.user
  height: 2rem

.link__discover, .link__order
  text-decoration: none
  position: relative
  display: inline-block
  margin-left: 5rem

.active::after
  content: ''
  display: block
  position: absolute
  width: 100%
  height: 0.2rem
  background-color: var(--blue)
  left: 0
  bottom: -1rem
</style>
