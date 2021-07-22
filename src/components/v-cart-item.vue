<template>
	<div class="v-cart-item">
		<h3>{{ title }}</h3>
		<h2>{{ cart_item_data.name }}</h2>
		<img :src="require('../assets/img/' + cart_item_data.image)" :alt="cart_item_data.article">
		<p class="v-cart-item__price">Price: {{ cart_item_data.price }} &#8381;</p>
		<h3>{{ cart_item_data.article }}</h3>
		<span>
			<span class="incrDecr" @click="incrementItem">+</span>
			<h4>Количество товара:{{ cart_item_data.quantity}}</h4>
			<span class="incrDecr" @click="decrementItem">-</span>
		</span>
		<button
			class="v-catalog-item__delBtn btn"
			@click="delFromCart"
			>Delete from Cart
		</button>
	</div>
</template>

<script>

	export default ({
		name: 'v-cart-item',
		components: {

		},
		props: {
			cart_item_data: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		data() {
			return {
				title: 'Карточка товара в корзине'
			}
		},
		computed: {

		},
		methods: {
			incrementItem() {
				this.$emit('increment');
			},
			decrementItem() {
				this.$emit('decrement');
			},
			delFromCart() {
				this.$emit('delFromCart');
			}
		},
		watch: {},
		
		//Хуки жизненного цикла

		mounted() {}
	})
</script>

<style>
	.v-cart-item {
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
	.v-cart-item img {
		width: 320px;
		height: 400px;
		border: 1px solid #999;
	}

	.v-cart-item__price {
		font-size: 1.3em;

	}
	.v-cart-item__delBtn {
		font-size: 1em;
		background-color: lightcoral;
	}
	.incrDecr {
		cursor: pointer;
	}

</style>