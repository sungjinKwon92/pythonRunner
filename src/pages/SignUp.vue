<template>
	<AppLayout>
		<div>
			<header>
				<h2>SignUp</h2>
			</header>
			<section>
			
				<input type="text" placeholder="username" v-model="email"/>
                <input type="text" placeholder="nickname" v-model="nickname" />

				<input type="password" placeholder="password" v-model="password" />
				<button @click="onClick">Login</button>
			</section>
		</div>
	</AppLayout>
</template>

<script setup lang="ts">
import {ref} from 'vue';

import AppLayout from '../components/AppLayout.vue';

const email = ref("");
const nickname = ref("");
const password = ref("");

const onClick = () => {
	console.log({email, nickname, password});
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