<template>
  <div>
    <h1>Parent: {{ carName }}</h1>
    <h2 slot="title">{{ carName }}</h2>
    <p slot="text">Lorem ipsum dolor.</p>
    <!--<app-counter :counter="counter"></app-counter>-->
    <app-counter></app-counter>

    <app-car
      :carName="carName"
      :carYear="carYear"
      :counter="counter"
      :changeFunc="changeNameToAudi"
      @nameChanged="carName = $event"
    ></app-car>
    <!--@counterUpdated="counter = $event"-->
  </div>
</template>

<script>
// локальная регистрация
import Car from './Car.vue'
import Counter from './Counter.vue'

export default {
  data () {
    return {
      carName: 'Ford',
      carYear: 2018,
      //counter: 0
    }
  },
  methods: {
    changeNameToAudi() {
      this.carName = 'Audi'
    }
  },
  components: {
    appCar: Car,
    appCounter: Counter
  }
}
</script>

<style>

</style>
