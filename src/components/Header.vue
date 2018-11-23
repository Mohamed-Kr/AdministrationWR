<template>
	<div>
		<h1>We Robot</h1>
		<h2>Administration</h2>
		<div class="container-fluid">
			<div class="row">
				<div class="col-sm-3"></div>
				<div class="col-sm-6">
					<button class="btn btn-lg menuBtn " id="articles" @click='goToArticles'>Articles</button>
					<button class="btn btn-lg menuBtn " id="messages" @click='goToMessages'>Messages</button>
				</div>
				<div class="col-sm-3"></div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.menuBtn {
	width: 50%;
	background-color: #2980b9;
	color: white;
	border-style: solid;
	border-color: #2980b9;
}
.menuBtn:hover, .selected {
	background-color:#85abc5;
}
#articles {
	border-radius: 10px 0px 0px 10px;
	border-width: 3px 0px 3px 3px;
}
#messages {
	border-radius: 0px 10px 10px 0px;
	border-width: 3px 3px 3px 0px;
}
h1{
	font-family: AR DESTINE;
	text-align: center;
	font-size: 5em;
	color: #2980b9;
}
h2{
	text-align: center;
	font-size: 2em;
	font-weight: bold;
	color: #2980b9;
	margin-bottom: 2em;	
}
</style>

<script>
import router from '../router.js';
import store from '../store.js';
export default {
	methods: {
		goToArticles () {
			router.push("/articles")
		},
		goToMessages () {
			router.push("/messages")
		}
	},
	mounted () {
		store.commit("setSelected")
	}
}
</script>
