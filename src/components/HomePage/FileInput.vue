<template>
  <div class="fileinput-container">
    <section>
      <h2>실행할 파이썬 파일을 선택해주세요</h2>
      <input type="file" @change="updateContent" />
    </section>
    <input
      type="text"
      placeholder="파일 이름을 넣어주세요."
      v-model="filename"
    />
    <textarea v-model="content" readonly></textarea>
    <button @click="onSubmit">저장하기</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {useFileStore} from '../../stores/fileStore'
import {useUserStore} from "@/stores/userStore";

const filename = ref("");
const content = ref("");
const fs = useFileStore();
const us = useUserStore();
const isLoggedIn = Object.keys(us.me).length > 0;

const updateContent = (e:Event) => {
  const input = e.target as HTMLInputElement;
  if (!input.files || input.files.length === 0) {
    return;
  }
  
  const file = input.files[0];
  const reader = new FileReader();
  reader.onload = (e:ProgressEvent<FileReader>) => {
    if (typeof e.target?.result === 'string') {
      filename.value = file.name.split('.')[0];
      content.value = e.target.result;
    }
  };
  reader.readAsText(file);
};

const onSubmit = async (e:Event) => {
  e.preventDefault();
  const data = {FileName: filename.value, Content: content.value, UserId: us.me?.id};
  await fs.addFile(data);
};
</script>

<style scoped>
.fileinput-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  section {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  input[type="text"] {
    width: 30%;
    height: 40px;
    border: none;
    border-bottom: 3px solid #000;
    font-size: 20px;
    font-weight: 600;
    &:focus {
      outline: none;
    }
  }

  textarea {
    width: 90%;
    height: 60%;
    border: 1px solid #000;
    border-radius: 20px;
    padding: 10px;
    font-size: 15px;
    font-weight: 600;
  }

  button {
    width: 600px;
    height: 50px;
    border-radius: 20px;
  }
}
</style>
