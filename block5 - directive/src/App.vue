<template>
  <div>

    <h2 v-colored v-if="visible">{{ title }}</h2>
    <button @click="visible = !visible">Toggle</button>
    <button @click="title = 'New title'">Change title</button>


    <!--<h2 v-colored:background="'red'">{{ title }}</h2>-->
    <h2 v-colored:background.font="'red'">{{ title }}</h2>
    <h2 v-colored:color.delay.font="'blue'">{{ title }}</h2>

    <h2 v-font>Local font directive</h2>
  </div>
</template>

<script>

export default {
  data () {
    return {
      title: 'Hello I am Vue!',
      visible: true
    }
  },
    // локальная регистрация
  directives: {
    font: {
      bind(el, bindings, vnode) {
        el.style.fontSize = '40px'
      }
    }
  }
}
</script>

<style scoped>

</style>
