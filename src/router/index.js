import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import AddMovieFormView from '../views/AddMovieFormView.vue'; // Import your AddMovie form component

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/movies/create',  // This should match your route
    name: 'add-movie',
    component: AddMovieFormView,  // This is your component for the movie form
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
