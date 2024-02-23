<template>
  <AppLayout>
    <div class="container-home">
      <section class="list-section">
        <h3 @click="onClickHeader">Python Runner</h3>
        <button @click="onClickAdderButton">파이썬 파일 생성하기</button>
        
        <div class="file-list" v-for="file in fs.files" :key="file?.id">
          <FileButton :data="file" />
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
import AppLayout from "../components/AppLayout.vue";
import FileInput from "../components/HomePage/FileInput.vue";
import FileEditor from "../components/HomePage/FileEditor.vue";
import FileButton from '../components/HomePage/FileButton.vue';
import {useFileStore} from '../stores/fileStore';

const viewType = ref("home");
const fs = useFileStore();

onMounted(() => {
  fs.loadFiles();
});

const onClickAdderButton = () => {
  viewType.value = "adder";
};

const onClickHeader = () => {
  viewType.value = "home";
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

    h3{
      cursor: pointer;
    }

    button {
      width: 100%;
    }

    .file-list {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top:20px;
    
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
