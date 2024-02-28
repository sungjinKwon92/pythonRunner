<template>
	<AppLayout>
		<div>
			<header @click="router.push('/')">
				<h2>PythonRunner</h2>
			</header>
			<section>
				<input type="text" placeholder="username" v-model="username"/>
				<input type="password" placeholder="password" v-model="password" />
				<button @click="onClickLoginButton">Login</button>
				<router-link to="/signup">회원가입 하러 가기</router-link>
			</section>
		</div>
	</AppLayout>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import {useRouter} from 'vue-router';

import { useUserStore } from '@/stores/userStore';
import AppLayout from '../components/AppLayout.vue';

const username = ref("");
const password = ref("");
const us = useUserStore();
const router = useRouter();

const onClickLoginButton = async () => {
	const data = {Username: username.value, Password:password.value};
	await us.logIn(data);
	if(Object.keys(us.me) && !us.isStoreLoading){
		router.push('/');
	}
}

</script>
<style scoped>
	div{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	
		section{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin-top: 20px;
			gap: 10px;
			
			input{
				width: 300px;
				height: 30px;
				font-size: 20px;
			}
		
			button{
				width: 100%;
				height: 30px;
				font-size: 20px;
			}
		}
	}
</style>