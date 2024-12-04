<script setup>
const props = defineProps(['item', 'count'])
const emit = defineEmits(['onIncr', 'onDecr'])
</script>

<template>
  <div @click="selectedIngredient" class="ingredient">
    <div class="ingredient__img">
      <img
        :src="item.img"
        :alt="item.name"
        :title="props.item.name"
        :style="{ 'margin-top': `${props.item['margin-top']}rem` }"
      />
    </div>

    <div class="ingredient__count">
      <button @click.stop="$emit('onDecr')" class="ingredient__count_decr"></button>
      <span>{{ count }}</span>
      <button @click.stop="$emit('onIncr')" class="ingredient__count_incr"></button>
    </div>
  </div>
</template>

<style scoped lang="sass">
.ingredient
  display: flex
  align-items: center
  flex-direction: column
  padding: 1.5rem 1.5rem 2rem 1.5rem
  border: 0.2rem solid var(--main)
  border-radius: 3rem
  margin-right: 2rem
  cursor: pointer
  &:hover
    border: 0.2rem solid var(--blue)
  & span
    font-size: 1.7rem
    padding: 1.5rem 0
  &__img
    & img
      width: 10rem
  &__count
    display: flex
    align-items: center
    justify-content: center
    & span
      padding: 0 1rem
    & button
      padding: 18px
      background-color: var(--main)
      border-radius: 5rem
      position: relative
      border: none
      cursor: pointer
      &:focus
        outline: none
      &.ingredient__count_decr::before
        content: ""
        display: block
        width: 1.4rem
        height: 0.2rem
        background-color: var(--blue)
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
      &.ingredient__count_incr
        &::before
          content: ""
          display: block
          width: 1.4rem
          height: 0.2rem
          background-color: var(--blue)
          position: absolute
          top: 50%
          left: 50%
          transform: translate(-50%, -50%)
        &::after
          content: ""
          display: block
          width: 0.2rem
          height: 1.4rem
          background-color: var(--blue)
          position: absolute
          top: 50%
          left: 50%
          transform: translate(-50%, -50%)
</style>
