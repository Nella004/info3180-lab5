<template>
  <div>
    <h1>Add Movie</h1>
    <form id="movieForm" @submit.prevent="saveMovie">
      <!-- Form fields for movie title, description, file upload, etc. -->
    </form>
  </div>
</template>
  
  <script setup>
  import MovieForm from '@/components/MovieForm.vue';
  </script>
  