<template>
    <button @click="onClickButton">
       {{ data?.filename }} 
    </button>
</template>

<script setup lang="ts">
import {File} from '../../interfaces';
import { useFileStore } from '@/stores/fileStore';


const fs = useFileStore();
const props = defineProps<{
    data:File
}>();

const onClickButton = () =>{
    if(props.data && props.data.id){
        fs.loadFile(props.data.id);
    }else {
        console.error("파일이 없습니다.");
    }
}


</script>

<style scoped>
</style>