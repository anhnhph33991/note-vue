import ViewNote from "@/views/ViewNote.vue";
import ViewStats from "@/views/ViewStats.vue";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "notes",
    component: ViewNote,
  },
  {
    path: "/stats",
    name: "stats",
    component: ViewStats,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
