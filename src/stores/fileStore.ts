import {defineStore} from 'pinia';
import {addFileAPI} from '../apis/files'
import {File} from '../interfaces'

export const useFileStore = defineStore('store',{
    state: ()=>({
        files : [] as File[],
        file : null as File | null,
    }), 
    getters:{
        getFiles(): File[]{
            return this.files;
        },
        getFilesByUser: (state) => (userId: number): File[] => {
            return state.files.filter((file) => file.UserId === userId); // Assuming the property is userId in your File interface
        },
    },
    actions:{
        //action에 대한 정의...
        async addFile(file: File){
            try{
                const res = await addFileAPI(file);
                this.files.push(res);
            }catch(err){
                console.error(err);
            }
        }
    }

});