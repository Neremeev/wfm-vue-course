<template>
  <div class="car">

    <slot name="title"></slot>

    <hr>
    <hr>

    <slot name="text"></slot>
    <h3>Name: {{ carName }} \ {{ reverseName }}</h3>
    <p>Year: {{ carYear }}</p>
    <button @click="changeName">Change name</button>
    <button @click="changeFunc()">Change from parent</button>
    <button @click="updateCounter">Update Counter</button>
  </div>
</template>

<script>
import {eventEmitter} from './main'


export default {
  props: {
    carName: {
      type: String,
      default: 'Default name'
        //required: true
    },
    carYear: Number,
    changeFunc: Function
    //counter: Number
  },
  methods: {
    changeName() {
      this.carName = 'Mazda'
      this.$emit('nameChanged', this.carName)
    },
    updateCounter() {
      //this.$emit('counterUpdated', this.counter + 1)
      eventEmitter.$emit('counterUpdated', 3)
    }
  },
  computed: {
    reverseName() {
      return this.carName.split('').reverse().join('')
    }
  }
}
</script>

// scoped - атрибут для локализации стилей (без него стили глобальные)
<style scoped>
  .car {
    border: 1px solid black;
  }

  .car h3 {
    margin-bottom: 5px;
  }
</style>
