<template>
	<AppLayout>
		<div>
			<header>
				<h2>SignUp</h2>
			</header>
			<section>
				<input type="text" placeholder="username" v-model="username" />
				<input type="password" placeholder="password" v-model="password" />
				<button @click="onSignUp">회원가입</button>
			</section>
		</div>
	</AppLayout>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import {useRouter} from 'vue-router';

import AppLayout from '../components/AppLayout.vue';
import {useUserStore} from '../stores/userStore';

const username = ref("");
const password = ref("");
const us = useUserStore();
const router = useRouter();

const onSignUp = async () => {
	const data = {Username: username.value, Password:password.value};
	await us.signUp(data);
	if(!us.isStoreLoading){
		alert('회원가입이 완료되었습니다. 로그인 해주세요.');
		router.push('/login');
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