<script setup>
import { ref } from 'vue'
import Button from './Button.vue'

const emit = defineEmits(['closeModal'])
defineProps(['showModal'])

const nameValue = ref('')
const phoneValue = ref('')
const btnThird = 'third'
</script>

<template>
  <div class="modal" v-if="showModal">
    <div class="modal-overlay" @click="$emit('closeModal')">
      <form class="modal-content" @click.stop>
        <div class="form__header">
          <div>
            <img src="../../assets/img/phone.svg" alt="Call Me" class="call__icon" />
            <h2>Call me back</h2>
          </div>
          <img
            src="../../assets/img/modal-icon-close.svg"
            alt="close"
            @click="$emit('closeModal')"
          />
        </div>
        <div class="input__container">
          <input id="nameInput" v-model="nameValue" type="text" placeholder="Enter your name" />
          <input
            id="phoneInput"
            v-model="phoneValue"
            type="number"
            placeholder="Enter your phone number"
          />
        </div>
        <Button @click="$emit('closeModal')" :third="btnThird">
          <template v-slot:third>Submit</template>
        </Button>
      </form>
    </div>
  </div>
</template>

<style lang="sass">
.modal
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  display: flex
  opacity: 0.9
  display: flex
  align-items: center
  justify-content: center
  background-color: rgba(0, 0, 0, 0.7)
  z-index: 100

.modal-overlay
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: var(--blue)
  z-index: 100
  opacity: 0.9

.modal-content
  position: relative
  top: 50%
  left: 50%
  width: 40rem
  height: 25rem
  background-color: white
  border-radius: 7px
  z-index: 2000
  transform: translate(-50%, -50%)
  opacity: 1

.input
  &__container
      display: flex
      flex-direction: column
      position: relative
      padding: 0 1rem
      border-radius: 7rem
      border: none
      z-index: 1
      input
        color: var(--text-gray)
        border-radius: 7rem
        border: 1px solid rgba(148, 155, 166, 0.3)
        padding: 1rem
        margin-top: 1.5rem
        pointer-events: none
        z-index: 0
        &::placeholder
          color: var(--text-gray)

.form
  &__header
    position: relative
    display: flex
    justify-content: space-between
    padding: 0 1rem
    &::after
      content: ''
      display: block
      border-bottom: 1px solid var(--text-gray)
      width: 100%
      position: absolute
      opacity: 0.3
      bottom: 0
      left: 0
    div
      display: flex
      gap: 1rem
</style>
