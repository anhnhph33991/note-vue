<template>
  <NavBar />
  <div class="content">
    <RouterView />
  </div>
</template>

<script setup>
import NavBar from "@/components/Layout/NavBar.vue";
</script>

<style>
@import "bulma/css/bulma.min.css";

.content {
  width: 1600px;
  padding: 10px;
  margin: auto;
}
</style>
