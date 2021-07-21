<template>
	<h1>{{ title }}</h1>
	<div class="v-cart">
		<div class="v-cart-items">
			<v-cart-item
				v-for="item in cart_data"
				:key="item.article"
				:cart_item_data="item"
				@addToCartUp="addToCart"
				/>
		</div>
	</div>
</template>

<script>

	import vCartItem from './v-cart-item';

	export default ({
		name: 'v-cart',
		components: {
			vCartItem,
		},
		props: {
			cart_data: {
			type: Array,
				default() {
					return []
				}
			}
		},
		data() {
			return {
				title: 'Корзина',
				cart: [
					{
						image: "kitty.jpg",
						name: "Котёнок",
						price: 150,
						article: "toy01",
						available: true
					},
				]
			}
		},
		computed: {},
		methods: {
			addToCart(cart_item_data) {
				this.cart.push('Проверка');
				console.log(cart_item_data);
			}
		},
		watch: {},
		//Хуки жизненного цикла

		mounted() {}
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
	.v-cart-items {
		padding: 30px;
		display: flex;
		outline: 1px solid #000;
		flex-wrap: wrap;
		justify-content: space-evenly;

	}
</style>