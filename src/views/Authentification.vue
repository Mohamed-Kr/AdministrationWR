<template>
	<div>
		<h1>We Robot</h1>
		<h2>Administration</h2>
		<p v-show="notAauthentified">Erreur d'authentification...</p>		
	</div>
</template>

<script>
import store from '../store.js'
export default {
	mounted () {
		this.notAauthentified = store.commit("Auth")
	},
	data () {
		return {
			notAauthentified: false
		}
	}
}
</script>


<style scoped>
div {
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: #2980b9;
	z-index: 999;
	display: flex;
	align-items: center;
	flex-direction: column;
}
h1{
	font-family: AR DESTINE;
	text-align: center;
	font-size: 5em;
	color: #ffffff;
}
h2{
	text-align: center;
	font-size: 2em;
	color: #ffffff;
	font-weight: bold;
}
p {
	color: red;
	font-size: 2em;
}
</style>
