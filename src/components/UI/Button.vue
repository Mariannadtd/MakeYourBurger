<script setup>
const emit = defineEmits(['click'])

const props = defineProps({
  primary: String,
  second: String,
  third: String
})
</script>

<template>
  <button
    :class="['btn', { btn_primary: primary }, { btn_second: second }, { btn_third: third }]"
    @click="$emit('click')"
  >
    <slot name="primary"></slot>
    <slot name="second"></slot>
    <slot name="third"></slot>
  </button>
</template>

<style scoped lang="sass">
.btn
  border: none
  cursor: pointer
  text-decoration: none
  outline: none
  border-radius: 100rem
  font-weight: 700
  &_primary
    display: block
    background-color: var(--blue)
    color: white
    font-size: 2.5rem
    padding: 3rem
    height: 20rem
    width: 20rem
    position: absolute
    margin-right: 40rem
    margin-bottom: -25rem
    z-index: 5
    transition: all 0.3s ease
    &:hover
      height: 23rem
      width: 23rem
      font-size: 2.75rem
      background-color: var(--blue-dark)
  &_second
    padding: .6rem 1rem
    margin-right: 5rem
    background-color: #fce8e8
    color: red
  &_third
    padding: 1.5rem 5rem
    background-color: var(--blue)
    margin: 1.8rem 1rem 0 1rem
    color: white
    transition: background-color 0.3s ease
    float: right
    &:hover
      background-color: var(--blue-dark)
</style>
