<script setup>
import { ref, watch, computed } from 'vue'
import axios from 'axios'
import Summary from '../components/Summary.vue'
import Ingredient from '../components/Ingredient.vue'

const items = ref([])
const ingredientCounts = ref([])
const selectedIngredients = ref([])
const totalPrice = ref(0)
const forceUpdate = ref(0)

const fetchItems = async () => {
  try {
    const { data } = await axios.get('https://dbcbab4134a97f1d.mokky.dev/ingredients')

    items.value = data.map((obj) => ({
      ...obj
    }))
    ingredientCounts.value = Array(items.value.length).fill(0)
  } catch (err) {
    console.log(err)
  }
}

fetchItems()

const incr = (index) => {
  if (ingredientCounts.value[index] !== undefined) {
    ingredientCounts.value[index]++
    updateSelectedIngredients()
  }
}

const decr = (index) => {
  if (ingredientCounts.value[index] > 0) {
    ingredientCounts.value[index]--
    updateSelectedIngredients()
  }
}

const updateSelectedIngredients = () => {
  selectedIngredients.value = []
  items.value.forEach((item, index) => {
    const count = ingredientCounts.value[index] || 0
    for (let i = 0; i < count; i++) {
      selectedIngredients.value.push(item)
    }
  })
}

const updateTotalPrice = () => {
  totalPrice.value = selectedIngredients.value.reduce(
    (total, ingredient) => total + ingredient.price * ingredientCounts[ingredient.id - 1].value,
    0
  )
  totalPrice.value = parseFloat(totalPrice.value.toFixed(2))
}

watch(forceUpdate, () => {
  updateTotalPrice()
})

const totalMinutes = ref(0)
const totalOz = ref(0)
const totalCkal = ref(0)

const updatedTotalMinutes = () => {
  totalMinutes.value = Math.round(
    selectedIngredients.value.reduce(
      (total, ingredient) => total + ingredient.min * ingredientCounts[ingredient.id - 1].value,
      0
    )
  )
}

const updateTotalOz = () => {
  if (selectedIngredients.value.length > 0 && ingredientCounts.value.length > 0) {
    const totalOzValue = selectedIngredients.value.reduce(
      (total, ingredient) =>
        total + (ingredient.oz || 0) * (ingredientCounts[ingredient.id - 1]?.value || 0),
      0
    )
    console.log('Total Ounces:', totalOzValue)
    totalOz.value = parseFloat(totalOzValue.toFixed(2))
  } else {
    totalOz.value = 0
  }
}

const updateTotalCkal = () => {
  totalCkal.value = selectedIngredients.value.reduce(
    (total, ingredient) => total + ingredient.kcal * ingredientCounts[ingredient.id - 1].value,
    0
  )
}

watch(forceUpdate, () => {
  updatedTotalMinutes()
  updateTotalOz()
  updateTotalCkal()
})

const ingredientStyles = computed(() => {
  return selectedIngredients.value.map((ingredient, index) => {
    const offset = -30 * index
    let top = '0'
    if (ingredient.id === 8) {
      ;('-70rem !important')
    } else if (ingredient.id === 6) {
      ;('9rem')
    }
    return {
      position: 'absolute',
      bottom: `${offset}px`,
      top: top
    }
  })
})
</script>

<template>
  <section class="order">
    <div class="order__mid">
      <h1 class="order__title">Make Your Burger</h1>
      <div>
        <img class="order__burger-bg" src="../assets/img/bg_burger.svg" alt="" />
        <div class="ingr">
          <img class="order__burger-bun" src="../assets/img/bun_bottom.png" alt="" />
          <ul class="order__burger-list">
            <li
              v-for="(item, index) in items"
              :key="item.id"
              v-if="ingredientCounts[index] > 0"
              :style="{ position: 'absolute', bottom: `${-30 * index}px` }"
            >
              <img :src="item.img_group || item.img" :alt="item.name" :title="item.name" />
            </li>
          </ul>
        </div>
      </div>

      <Summary
        :totalPrice="totalPrice"
        :totalMinutes="totalMinutes"
        :totalOz="totalOz"
        :totalCkal="totalCkal"
      />
    </div>

    <div>
      <ul class="order__list">
        <li v-for="(item, index) in items" :key="item.id">
          <Ingredient
            :item="item"
            :count="ingredientCounts[index] || 0"
            @onIncr="() => incr(index)"
            @onDecr="() => decr(index)"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.order
  &__title
    font-weight: 700
    font-size: 4.7rem
    position: relative
  &__mid
    display: flex
    align-items: center
    justify-content: space-between
  &__bun
    width: 10rem
    height: 10rem
  &__list
    display: flex
    justify-content: space-between
    align-items: center
  & li
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
  &__burger
    position: relative
    &-bg
      width: 75%
    &-bun
      width: 55%
      position: absolute
      top: -7rem
    &-ingredients
      width: 55%
      position: relative
      left: 0.5rem
.ingr
  position: relative
  min-height: 10rem
  left: 8rem
  top: -1rem
</style>
