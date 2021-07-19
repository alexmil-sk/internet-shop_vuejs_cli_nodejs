
<template>
	<div id="app">
		<h1 class="h1 main">vue.js</h1>
		<v-main-wrapper/>
	</div>
</template>

<script>
import vMainWrapper from './components/v-main-wrapper.vue';
console.log(vMainWrapper);

export default {
	name: 'App',
	components: {
		vMainWrapper,
	}
}
</script>

<style>
.h1 {
	padding-top:30px;
	text-transform: uppercase;
}
.main {
	font-size: 60px;
	border: 2px solid #000;
	background-color: #888;
	color: white;
	padding-bottom: 30px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  min-height: 100vh;
  background-color: rgb(223, 223, 223);
}
</style>
