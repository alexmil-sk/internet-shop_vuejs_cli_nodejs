<template>
	<h1>{{ title }}</h1>
	<div class="v-catalog">
		<div class="catalog-items">
			<v-catalog-item
				v-for="product in products"
				:key="product.article"
				:product_data="product"
				@sendArticle="showArticleConsole"
			/>
		</div>
	</div>
</template>

<script>
import vCatalogItem from './v-catalog-item';


export default ({
	name: 'v-catalog',
	components: {
		vCatalogItem,

	},
	props: {},
	data() {
		return {
			title: 'Каталог товаров',
			products: [
				{
					image: "blind.jpg",
					name: "Заглушка",
					price: 0,
					article: "toy_blind",
					available: false
				},
				{
					image: "kitty.jpg",
					name: "Котёнок",
					price: 150,
					article: "toy01",
					available: true
				},
				{
					image: "leopard.jpg",
					name: "Леопард",
					price: 200,
					article: "toy02",
					available: false
				},
				{
					image: "owl.jpg",
					name: "Совёнок",
					price: 250,
					article: "toy03",
					available: true
				},
				{
					image: "piggy.jpg",
					name: "Поросёнок",
					price: 300,
					article: "toy04",
					available: false
				},
				{
					image: "puppy.jpg",
					name: "Щенок",
					price: 350,
					article: "toy05",
					available: true
				}
			],
		}
	},
	computed: {

	},
	methods: {
		showArticleConsole(data) {
			console.log(data);
		}
	},
	watch: {},
	
	//Хуки жизненного цикла

	mounted() {
		console.log('Hello. Проверка хука mounted Catalog');

	}
})
</script>

<style>
	.v-catalog {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
	}
	.catalog-items {
		padding: 30px;
		display: flex;
		outline: 1px solid #000;
		flex-wrap: wrap;
		justify-content: space-evenly;

	}
</style>