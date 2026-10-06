import { createRouter, createWebHistory } from 'vue-router'
import Cursos from "../components/Cursos.vue";
import Footer from "../components/Footer.vue";
import HelloWorld from "../components/HelloWorld.vue";
import Navbar from "../components/NavBar.vue";

const routes = [
  { path: '/', name:'helloWorld', component: HelloWorld},
  { path: '/cursos', name:'cursos', component: Cursos},
  { path: '/footer', name:'footer', component: Footer},
  { path: '/navbar', name:'navbar', component: Navbar}
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
