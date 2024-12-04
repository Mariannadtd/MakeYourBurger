<script setup>
import { ref } from 'vue'
import visaImg from '@/assets/img/payment-visa.svg'
import mastercardImg from '@/assets/img/payment-mastercard.svg'
import gpImg from '@/assets/img/payment-gpay.svg'
import apImg from '@/assets/img/payment-apple-pay.svg'
import ppImg from '@/assets/img/payment-paypal.svg'
import etImg from '@/assets/img/payment-etherium.svg'
import btcImg from '@/assets/img/payment-bitcoin.svg'

const links = ref([
  { name: '2023', id: 1 },
  { name: 'Make Your Burger', href: '/order', id: 2 },
  { name: 'Privacy Policy', href: '/privacy', id: 3 },
  { name: 'Terms & Conditions', href: '/terms', id: 4 },
  { name: 'Visa', img: visaImg, id: 5, isFirstImage: true },
  { name: 'Mastercard', img: mastercardImg, id: 6 },
  { name: 'Google Pay', img: gpImg, id: 7 },
  { name: 'Apple Pay', img: apImg, id: 8 },
  { name: 'PayPal', img: ppImg, id: 9 },
  { name: 'Etherium', img: etImg, id: 10 },
  { name: 'Bitcoin', img: btcImg, id: 11 }
])

const images = ref(null)
</script>

<template>
  <footer class="footer">
    <ul class="footer__menu">
      <li
        v-for="link in links"
        :key="link.id"
        :class="{ footer__item: true, 'first-image': link.isFirstImage }"
      >
        <router-link v-if="link.href" :to="link.href">
          {{ link.name }}
        </router-link>
        <img v-else-if="link.img" :src="link.img" :alt="link.name" />
        <span v-else>
          {{ link.name }}
        </span>
      </li>
    </ul>
  </footer>
</template>

<style lang="sass" scoped>
.footer
  margin-top: 2rem
  &__menu
    display: flex
    justify-content: space-between
    align-items: center
  &__item
    margin-left: 1.5rem
    font-size: 1.2rem
    color: black
    &:first-child
      margin-left: 0
    a, router-link
      color: black
      text-decoration: none
.first-image
  margin-left: 30%
</style>
