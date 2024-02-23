<template>
  <div class="editor-container">
    <section class="editor-section">
      <input type="text" :readonly="!isEditing"/>
      <textarea :readonly="!isEditing" v-mode="fileContent"></textarea>
      <button @click="isEditing = !isEditing">{{!isEditing?"수정하기":"저장하기" }}</button>
    </section>
    <section class="reader-section">
      <textarea readonly></textarea>
      <button>파일 실행하기</button>
    </section>
  </div>
</template> 

<script setup>
import { ref, computed } from "vue";

import {useFileStore} from '../../stores/fileStore';

const isEditing = ref(false);
const fs = useFileStore();

const fileContent = computed({
  get:()=>fs.file?.content || "",
  set:(value) =>{
    if(fs.file){
      fs.file.content = value;
    }
  },
})

</script>

<style scoped>
.editor-container {
  width: 100%; 
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 20px;
  .editor-section{
    display: flex;
    flex-direction: column;
    gap: 10px;

    input{
      width: 30%;
      height: 40px;
      font-size: 20px;
    }
    
    textarea {
      border: 1px solid #000;
      border-radius: 20px;
      padding: 20px;
      font-weight: bolder;
      font-size: 20px;
      width: 100%;
      height: 50vh;
    }

    button{
      width: 30%;
      height: 40px;
    }
  }
  .reader-section{
    display: flex;
    flex-direction: column;
    gap: 10px;

    textarea {
      border: 1px solid #000;
      border-radius: 20px;
      padding: 20px;
      font-weight: bolder;
      font-size: 20px;
      width: 100%;
      height: 28vh;
    }

    button{
      width: 30%;
      height: 40px;
    }
  }
}
</style>
