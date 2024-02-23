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
    fs.loadFile(props.data.id);
}

</script>

<style scoped>
</style>