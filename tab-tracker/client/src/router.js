import Vue from 'vue'
import Router from 'vue-router'
import Register from './components/Register.vue'
import Login from '@/components/Login.vue'
import Songs from '@/components/Songs/Index.vue'
import CreateSong from '@/components/CreateSong.vue'
import ViewSong from '@/components/ViewSong/ViewSong.vue'
import EditSong from '@/components/EditSong.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: 'songs'
    },
    {
      path: '/register',
      name: 'register',
      component: Register

    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs
    },
    {
      path: '/songs/create',
      name: 'create-song',
      component: CreateSong
    },
    {
      path: '/songs/:songId',
      name: 'song',
      component: ViewSong
    },
    {
      path: '/songs/:songId/edit',
      name: 'song-edit',
      component: EditSong
    }
  ]
})
