<template>
  <AppLayout>
    <div class="home-container">
      <section class="list-section">
        <section class="header">
          <h3 @click="onClickHeader">Python Runner</h3>
          <button v-if="!isLoggedIn" @click="onClickLoginButton">로그인</button>
        </section>
        <button @click="onClickAdderButton">파이썬 파일 생성하기</button>
        
        <div class="container" v-for="file in fs.files" :key="file?.id">
          <FileButton :data="file" />
        </div>
      </section>
      <section class="editor-section">
        <FileInput v-if="viewType === 'adder'" />
        <FileEditor v-else />
      </section>
    </div>
  </AppLayout>
</template>

<script setup lang="ts">
import { ref, onMounted, computed} from "vue";
import {useRouter} from 'vue-router';
import AppLayout from "../components/AppLayout.vue";
import FileInput from "../components/HomePage/FileInput.vue";
import FileEditor from "../components/HomePage/FileEditor.vue";
import FileButton from '../components/HomePage/FileButton.vue';
import {useFileStore} from '../stores/fileStore';
import {useUserStore} from '../stores/userStore';

const viewType = ref("home");
const us = useUserStore();
const fs = useFileStore();
const router = useRouter();
const isLoggedIn = computed(() => Object.keys(us.me).length > 0);

onMounted(()=>{
  console.log("testing");
});

const onClickAdderButton = () => {
  if(!isLoggedIn.value){
    alert('로그인이 필요합니다.');
  }else{
    viewType.value = "adder";
  }
};

const onClickHeader = () => {
  viewType.value = "home";
};

const onClickLoginButton = () => {
  router.push('/login');
}
</script>

<style scoped>
.home-container {
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  .list-section{
    padding: 0 10px;
    background-color: #f6f6f6;
    border-radius: 30px;

    display: flex;
    flex-direction: column;
    align-items: center;

    .header{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      h3{
        cursor: pointer;
      }
      button {
        width: 40%;
        height: 40px;
        font-size: 20px;
      }
    }

    button {
      width: 100%;
    }

    .content {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top:20px;
    
    }
  }

  .editor-section {
    grid-column: 2 / 5;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
