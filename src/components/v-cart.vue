<template>
	<div class="v-cart">
		<h1>{{ title }}</h1>
	</div>
</template>

<script>
export default ({
	name: 'v-cart',
	components: {

	},
	props: {},
	data() {
		return {
			title: 'Корзина'
		}
	},
	computed: {

	},
	methods: {},
	watch: {},
	
	//Хуки жизненного цикла

	mounted() {
		console.log('Hello. Проверка хука mounted Cart');

	}
})
</script>

<style>
	.v-cart {
		display: flex;
		justify-content: center;
		align-items: center;
		max-width: 900px;
		margin: 0 auto;
	}
</style>