<template>
  <div class="editor-container">
    <section class="editor-section">
      <input type="text" v-model="file.filename"/>
      <textarea v-model="file.content"></textarea>
      <p>{{filename}}</p>
      <button @click="onClickEditButton">수정하기</button>
    </section>
    <section class="reader-section">
      <textarea readonly></textarea>
      <button>파일 실행하기</button>
    </section>
  </div>
</template> 

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import {useFileStore} from '../../stores/fileStore';

const fs = useFileStore();
const file = ref({})

const fileData = computed(()=>fs.file || "");

watch([fileData],()=>{
  file.value = fileData.value;
},{immediate: true});

const onClickEditButton = () => {
  const testData = {id: file.value.id, content:file.value};
  fs.updateFile(testData);
  console.log(testData);
};
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
