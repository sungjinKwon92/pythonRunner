import {defineStore} from 'pinia';
import {loadFilesAPI, addFileAPI, loadFileAPI} from '../apis/files'
import {File} from '../interfaces'

export const useFileStore = defineStore('store',{
    state: ()=>({
        files : [] as File[],
        file : null as File | null,
    }), 
    getters:{
        getFiles(): File[]{
            return this.files;
        }
    },
    actions:{
        //action에 대한 정의...
        loadFiles(){
            loadFilesAPI().then((files)=>{
                this.files = files;
            }).catch((err)=>console.error(err));
        },
        addFile(file: File){
            addFileAPI(file).then((file)=>{
                this.files.push(file);
            }).catch((err)=>console.error(err));
        },
        loadFile(id:string){
            loadFileAPI(id).then((file)=>{
                this.file = file;
            }).catch((err)=>console.error(err));
        }
    }
});