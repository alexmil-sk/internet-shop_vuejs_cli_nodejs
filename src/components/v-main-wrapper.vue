<template>
	<div class="v-main-wrapper">
		<keep-alive>
			<router-view></router-view>
		</keep-alive>

	</div>
</template>

<script>
//import vCatalog from './v-catalog';
//import vCart from './v-cart';
import { mapGetters } from 'vuex';

export default ({
	name: 'v-main-wrapper',
	props: {},
	data() {
		return {
			title: 'Интернет-магазин мягких игрушек'
		}
	},
	computed: {},
	methods: {},
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
