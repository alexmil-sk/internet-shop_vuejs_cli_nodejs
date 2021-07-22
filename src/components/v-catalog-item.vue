<template>
	<div class="v-catalog-item">
		<h2>Карточка товара в каталоге</h2>
		<h2>{{ product_data.name }}</h2>
		<img :src="require('../assets/img/' + product_data.image)" :alt="product_data.article">
		<p class="v-catalog-item__price">Price: {{ product_data.price }} &#8381;</p>
		<button
			class="v-catalog-item__addBtn btn"
			@click="addToCart()"
			>Add to Cart
		</button>
	</div>
</template>

<script>
	export default ({
		name: 'v-catalog-item',
		components: {

		},
		props: {
			product_data: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		data() {
			return {
				title: 'Item title'
			}
		},
		computed: {},
		methods: {
			addToCart() {
				this.$emit('addToCart', this.product_data);
			}
		},
		watch: {},
		
		//Хуки жизненного цикла

		mounted() {
			this.$set(this.cart_item_data, 'quantity', 1)
		}
	})
</script>

<style>
	.v-catalog-item {
		display: flex;
		/*flex-basis: 15%;*/
		flex-direction: column;
		justify-content: center;
		align-items: center;
		max-width: 900px;
		margin: 20px 10px;
		padding: 10px;
		border: 1px solid #666;
		border-radius: 20px;
		box-shadow: 0 0 8px 0 #000;
	}
	.v-catalog-item img {
		width: 320px;
		height: 400px;
		border: 1px solid #999;
	}

	.v-catalog-item__price {
		font-size: 1.3em;

	}
	.v-catalog-item__addBtn {
		font-size: 1em;
		background-color: lightgreen;
	}
	.btn {
		min-width: 150px;
		height: 50px;
		border-radius: 20px;
		font-size: 1.2em;
		margin-bottom: 20px;
	}
	.btn:hover {
		cursor: pointer;
		background-color: #ccc;
		font-weight: bold;
		border: 2px solid #000;
	}
	.btn:active {
		background-color: #555;
		color: #fff;
		border: none;
	}

</style>