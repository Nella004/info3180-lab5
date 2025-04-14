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
import { ref, onMounted } from "vue";

let title = ref('');
let description = ref('');
let poster = ref(null);

onMounted(() => {
  getCsrfToken();
});

function handleFileUpload(event) {
  poster.value = event.target.files[0];
}

let csrf_token = ref("");

function getCsrfToken() {
  fetch('/api/v1/csrf-token')
    .then((response) => response.json())
    .then((data) => {
      csrf_token.value = data.csrf_token;
    });
}

function saveMovie() {
  let movieForm = document.getElementById('movieForm');
  let form_data = new FormData(movieForm);

  fetch("/api/v1/movies", {
    method: 'POST',
    body: form_data,
    headers: {
      'X-CSRFToken': csrf_token.value
    }
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // success message
    })
    .catch((error) => {
      console.log(error);
    });
}


</script>
