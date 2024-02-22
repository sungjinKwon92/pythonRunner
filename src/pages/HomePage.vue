<template>
    <AppLayout>
        <div class="container-home">
            <section class="list-section">
                <h3>Python Runner</h3>
                <button>파이썬 파일 생성하기</button>
                <!-- <div v-for="file in fileData">
                    <p>{{file?.name}}</p>
                </div> -->
            </section>
            <section class="editior-section">
                <FileInput/>
            </section>
        </div>
    </AppLayout>
</template>

<script setup lang="ts">
import {ref} from 'vue';

import AppLayout from '../components/AppLayout.vue';
import FileInput from '../components/HomePage/FileInput.vue';

const fileData = ref([]);

</script>

<style scoped>
    .container-home{
        width: 100%;
        height:100%;
        
        
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 10px;
        
        .list-section{
            padding: 0 10px;
            background-color:#F6F6F6 ;
            border-radius: 30px;

            display: flex;
            flex-direction: column;
            align-items: center;

            button {
                width:100%;
            }
        }
        .editior-section{
            grid-column: 2 / 5;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    } 
</style>