//import Vue from 'vue';
//import Vuex from 'vuex';
import axios from 'axios';
import { createStore } from 'vuex';

//Vue.use(Vuex);

//export const store = new Vuex.Store({
export const store = createStore({
	state: {
		products: []
	},
	mutation: { //Мутации - синхронны
		SET_PRODUCTS_TO_STATE: (state, products) => {
			state.products = products;
		}
	},
	actions: { //actions - асинхронны
		GET_PRODUCTS_FROM_API({ commit }) {
			return axios(' http://localhost:3000/products', {
				method: "GET"
			})
			.then((products) => {
				commit('SET_PRODUCTS_TO_STATE', products);
				return products;
			})
				.catch((error) => {
					console.log(error);
					return error;
			})
		}
	},
	getters: { //Короткий путь на получение информкации в state
		PRODUCTS(state) {
			return state.products;
		}
	}
});

//export default store;
