import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRouter } from './routers'

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRouter,
  //滚动行为
  scrollBehavior (to, from, savedPosition) {
    // ...
    return {
      left:0,
      top:0,
    }
  }
})

export default router;
