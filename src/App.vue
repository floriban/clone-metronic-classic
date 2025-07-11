<script setup lang="ts">
import Sidebar from './sections/Sidebar.vue';
import Header from './sections/Header.vue';
import Contenido from './sections/Content.vue';
</script>

<template>
  <div class="flex h-screen">
    <Sidebar />

    <div class="flex flex-col grow-1">
      <Header />
      <Contenido />
    </div>
  </div>
</template>