<template>
	<div class="v-cart-item">
		<h2>{{ title }}</h2>
		<h2>{{ cart_item_data.name }}</h2>
		<h3>{{ cart_item_data.article }}</h3>
		<img :src="require('../assets/img/' + cart_item_data.image)" alt="Foto">
		<p class="v-catalog-item__price">Price: {{ cart_item_data.price }} &#8381;</p>
		<p class="v-cart_item__quantity">Количество:</p>
		<button
			class="v-catalog-item__delBtn btn"
			>Delete from Cart
		</button>
	</div>
</template>

<script>
export default ({
	name: 'v-cart-item',
	components: {},
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
	computed: {},	
	
})
</script>

<style>
	.v-cart-item {
		display: flex;
		flex-wrap: nowrap;
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
	.v-cart_item__quantity {
		color: #000;
		font-size: 20px;
	}
	.v-catalog-item__delBtn {
		font-size: 1em;
		background-color: lightcoral;
	}
</style>