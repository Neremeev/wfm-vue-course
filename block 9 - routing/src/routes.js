import VueRouter from 'vue-router'
import Home from './pages/Home'
import ErrorCmp from './pages/Error'
import CarFull from './pages/CarFull'

// lazy loading
const Cars = resolve => {
  require.ensure(['./pages/Cars.vue'], () => {
    resolve(
      require('./pages/Cars.vue')
    )
  })
}

// lazy loading
const Car = resolve => {
  require.ensure(['./pages/Car.vue'], () => {
    resolve(
      require('./pages/Car.vue')
    )
  })
}


export default new VueRouter({
  routes: [
    {
      path: '',
      component: Home
    },
    {
      path: '/cars',
      component: Cars,
      name: 'cars'
    },
    {
      path: '/car/:id', // динамическое id
      component: Car,
      children: [
        {
          path: 'full', // localhost:8080/car/10/full
          component: CarFull,
          name: 'carFull',
          // гварды
          beforeEnter (to, from, next) {
            console.log('beforeEnter')
            next()
          }
        }
      ]
    },
    {
      // редирект
      path: '/none',
      redirect: {
        name: 'cars'
      }
    },
    {
      // 404
      path: '*',
      component: ErrorCmp
    }
  ],
  // для того, чтобы сохранять страницы в истории
  mode: 'history',
  // для хешей-якорей
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return {x: 0, y: 0}
  }
})
