import {defineStore} from 'pinia';
import {signUpAPI, loginAPI} from '../apis/user';
import {User} from '../interfaces';

export const useUserStore = defineStore('userStore',{
    state:()=>({
        me:{} as {id:number, username: string},
        isStoreLoading:false,
    }),
    getters:{},
    actions:{
        async signUp(data:User){
            this.isStoreLoading = true;
            try{
                const res = await signUpAPI(data);
                console.log (res);
            }catch(err){
                console.error(err);
            }
            this.isStoreLoading = false;
        },
        async logIn(data:User){
            this.isStoreLoading = true;
            try{
                const res = await loginAPI(data);
                this.me = res;
                
            }catch(err){
                console.error(err);
                this.isStoreLoading = false;
            }
            this.isStoreLoading = false;
        }
    }
})