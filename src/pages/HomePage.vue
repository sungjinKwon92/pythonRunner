<template>
  <AppLayout>
    <div class="container-home">
      <section class="list-section">
        <h3>Python Runner</h3>
        <button @click="onClickAdderButton">파이썬 파일 생성하기</button>
        <div v-for="file in fileData" :key="file.id">
          <p>{{ file?.filename }}</p>
        </div>
      </section>
      <section class="editior-section">
        <FileInput v-if="viewType === 'adder'" />
        <FileEditor v-else />
      </section>
    </div>
  </AppLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

// import { loadFilesAPI } from "../apis/files";
import AppLayout from "../components/AppLayout.vue";
import FileInput from "../components/HomePage/FileInput.vue";
import axios from "axios";
import FileEditor from "../components/HomePage/FileEditor.vue";

const fileData = ref();
const viewType = ref("home");

onMounted(async () => {
  axios
    .get("http://localhost:3000/file")
    .then((res) => {
      fileData.value = res.data;
    })
    .catch((err) => console.log(err));
});

const onClickAdderButton = () => {
  viewType.value = "adder";
};
</script>

<style scoped>
.container-home {
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;

  .list-section {
    padding: 0 10px;
    background-color: #f6f6f6;
    border-radius: 30px;

    display: flex;
    flex-direction: column;
    align-items: center;

    button {
      width: 100%;
    }
  }
  .editior-section {
    grid-column: 2 / 5;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
