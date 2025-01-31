import { createRouter, createWebHistory } from 'vue-router'

const pages = [
  'Home', 'About', 'Characters', 'Colors', 'Games', 'News', 'Players', 'Privacy', 'Terms', 'Tokens'
];

const routes = pages.map((name) => {
  return {
    path: (name == 'Home') ? '/' : '/' + name.toLowerCase(),
    name: name,
    component: () => import(`./pages/${name}.vue`)
  }
});

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
