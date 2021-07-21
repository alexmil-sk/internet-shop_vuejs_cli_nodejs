<template>
	<div class="v-main-wrapper">
		<h1 class="h1">{{ title }}</h1>
		<v-catalog />
		<v-cart
			v-if="cart.length"
			:cart_data="cart"
		/>
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
				title: 'Интернет-магазин мягких игрушек',
				cart: [
					{
						image: "kitty.jpg",
						name: "Котёнок",
						price: 150,
						article: "toy01",
						available: true
					},
				],
			}
		},
		computed: {},
		methods: {
		},
		watch: {},

		//Хуки жизненного цикла

		mounted() {}
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
