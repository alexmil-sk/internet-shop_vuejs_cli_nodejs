import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		products: [],
		cart: []
	},
	mutation: { //Мутации - синхронны
		SET_PRODUCTS_TO_STATE: (state, products) => {
			state.products = products;
		},
		SET_CART: (state, product) => {
			if (state.cart.length) {
				let isProdExist = false;
				state.cart.map(function (item) {
					if (item.articel === product.article) {
						isProdExist = true;
						item.quantity++;
					}
				})
				if (!isProdExist) {
					state.cart.push(product);
				}
			} else {
				state.cart.push(product);
			}
		},
		REMOVE_FROM_CART: (state, index) => {
			state.cart.splice(index, 1);
		},
		INCREMENT: (state, index) => {
			state.cart[index].quantity++;
		},
		DECREMENT: (state, index) => {
			if (state.cart[index].quantity > 1) {
				state.cart[index].quantity--;
			}
		}
	},
	actions: { //actions - асинхронны
		GET_PRODUCTS_FROM_API({ commit }) {
			return axios(' http://localhost:3000/products', {
				method: "GET"
			})
				.then((products) => {
					commit('SET_PRODUCTS_TO_STATE', products.data);
					return products;
				})
				.catch((error) => {
					console.log(error);
					return error;
				});
		},
		ADD_TO_CART({ commit }, product) {
			commit('SET_CART', product);
		},
		INCREMENT_CART_ITEM({ commit }, index) {
			commit('INCREMENT', index);
		},
		DECREMENT_CART_ITEM({ commit }, index) {
			commit('DECREMENT', index);
		},
		DELETE_FROM_CART({ commit }, index) {
			commit('REMOVE_FROM_CART', index);
		}
	},
	getters: { //Короткий путь на получение информкации в state
		PRODUCTS(state) {
			return state.products;
		},
		CART(state) {
			return state.cart;
		}
	}
});

export default store;
