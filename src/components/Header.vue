<template>
	<div>
		<h1>We Robot</h1>
		<h2>Administration</h2>
		<div class="container-fluid" style="margin-bottom: 7em;">
			<div class="row">
				<div class="col-sm-3"></div>
				<div class="col-sm-6">
					<button :class="{selected : artSelected, menuBtn : !artSelected}" class="btn-lg" id="articles" @click='goTo("articles")'>Articles</button>
					<button :class="{selected : msgSelected, menuBtn : !msgSelected}" class="btn-lg" id="messages" @click='goTo("messages")'>Messages</button>
				</div>
				<div class="col-sm-3"></div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.selected {
	width: 50%;
	background-color: #ffffff;
	color: #2980b9;
	border-style: solid;
	border-color: #2980b9;
}
.menuBtn {
	width: 50%;
	background-color: #2980b9;
	color: white;
	border-style: solid;
	border-color: #2980b9;
}
.menuBtn:hover, .selected:hover {
	background-color:#abcfe7;
	border-color: #507b97;
	color: #2980b9;
	cursor: pointer;
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
		goTo (page) {
			router.push(page)
		}
	},
	mounted () {
		var s = this.$store
		var ss = this.$store.state
		if (document.URL.includes("articles")) {
			this.artSelected = true
		}else {
			this.msgSelected = true
		}
	},
	data () {
		return {
			artSelected: false,
			msgSelected: false
		}
	}
}
</script>
