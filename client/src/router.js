import { createRouter, createWebHistory } from 'vue-router'

const pages = [
  'Home', 'About', 'Characters', 'Colors', 'Games', 'News', 'Players', 'Privacy', 'Terms', 'Tokens'
];

const calcRoute = (name) => {
  return (name == 'Home') ? '/' : '/' + name.split(' ')[0].toLowerCase();
}

const routes = pages.map((name) => {
  return {
    path: calcRoute(name),
    name: name,
    component: () => import(`./pages/${name.split(' ')[0]}.vue`)
  }
});

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
