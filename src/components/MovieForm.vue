<template>
  <form id="movieForm" @submit.prevent="saveMovie">
    <div>
      <label>Movie Title:</label>
      <input v-model="title" type="text" />
    </div>
    <div>
      <label>Description:</label>
      <textarea v-model="description"></textarea>
    </div>
    <div>
      <label>Upload Poster:</label>
      <input type="file" @change="handleFileUpload" />
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';

let title = ref('');
let description = ref('');
let poster = ref(null);

function handleFileUpload(event) {
  poster.value = event.target.files[0];
}

function saveMovie() {
  let formData = new FormData();
  formData.append('title', title.value);
  formData.append('description', description.value);
  formData.append('poster', poster.value);

  fetch('/api/v1/movies', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
}
</script>
