<template>
	<div class="v-main-wrapper">
		<h1 class="h1">{{ title }}</h1>
		<v-catalog />
		<v-cart />

	</div>
</template>

<script>
import vCatalog from './v-catalog';
import vCart from './v-cart';

export default ({
	name: 'v-main-wrapper',
	components: {
		vCatalog,
		vCart,
	},
	props: {},
	data() {
		return {
			title: 'Интернет-магазин мягких игрушек'
		}
	},
	computed: {

	},
	methods: {},
	watch: {},

	//Хуки жизненного цикла

	mounted() {
		console.log('Hello. Проверка хука mounted Main Wraspper');
	}
})
</script>


<style>
	.v-main-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		max-width: 1200px;
		margin: 0 auto;
	}
</style>
