<template>
	<div class="v-cart">
		<router-link :to="{name: 'catalog'}">
			<div class="v-catalog_to-cart">To Catalog</div>
		</router-link>
		<h1>{{ title }}</h1>
		<p v-if="!cart_data.length">Товара в корзине нет...</p>
		<div class="v-cart-items">
			<v-cart-item 
				v-for="(item, index) in cart_data"
				:key="item.article"
				:cart_item_data="item"
				@delFromCart="delFromCart(index)"
				@increment="increment(index)"
				@decrement="decrement(index)"
			/>
		</div>
		<div class="v-cart__total">
			<p>Итого:</p>
			<p>{{ cartTotalSum }} &#8381;</p>
		</div>
	</div>
</template>

<script>
import vCartItem from './v-cart-item';
import { mapActions} from 'vuex'

export default ({
	name: 'v-cart',
	components: {
		vCartItem
	},
	props: {
		cart_data: {
			type: Array,
			default() {
				return [];
			}
		}
	},
	data() {
		return {
			title: 'Корзина'
		}
	},
	computed: {
		cartTotalSum() {
			let result = [];

			if (this.cart_data.length) {
				for (let item of this.cart_data) {
					result.push(item.price * item.quantity);
				}
				result = result.reduce(function(sum, el){
					return sum + el;
				});
				return result;
			} else {
				return 0;
			}
		}
	},
	methods: {
		...mapActions([
			'DELETE_FROM_CART',
			'INCREMENT_CART_ITEM',
			'DECREMENT_CART_ITEM',
		]),
		decrementItem(index) {
			this.DECREMENT_CART_ITEM(index);

		},
		incrementItem(index) {
			this.INCREMENT_CART_ITEM(index);
		},
		delFromCart(index) {
			this.DELETE_FROM_CART(index);
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
		margin: 0 auto 100px;
	}
	.v-cart-items {
		padding: 30px;
		display: flex;
		outline: 1px solid #000;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}
	.v-cart__total {
		position: fixed;
		bottom: 0;
		right: 0;
		left: 0;
		padding: 20px;
		display: flex;
		justify-content: center;
		background-color: lightgreen;
		color: #fff;
		font-size: 20px;
	}
</style>