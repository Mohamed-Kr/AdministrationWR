<template>
	<div class="container">
		<div class="container">
		<button class="btn-lg btn-success btn-block">Créer un article</button>
		</div>
		<div v-for="(art, index) in articles" :key="index" class="C container-fluid">
			<div class="row date">
				<p>{{ art.created_at }}</p>
			</div>
			<div class="row">
				<div class="col-sm-6 img">
				<img :src="art.image">
				</div>
				<div class="col-sm-6">
					<p class="title">{{ art.title }}</p>
					<p class="description">{{ art.description + "...." }}</p>
				</div>
			</div>
			<div class="row artFoot">
				<p class="id">{{"#" + art.id}}</p>
				<button class="editBtn btn"><i class="material-icons">settings</i></button>
			</div>
		</div>
	</div>
</template>

<style scoped>
.artFoot {
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding-right: 1.5em;
}
.editBtn {
	background-color: #005ac2;
	color: white;
	margin-bottom: 20px;
}
i {
	transform: scale(1.3)
}
.editBtn:hover {
	background-color: #023268;
}
.description {
	word-wrap:break-word;  
}
.title {	
	color: #2980b9;
	font-weight: bold;
	font-size: 1.3em;
	word-wrap:break-word; 
}
.img {
	display: flex;
	justify-content: center;
	align-items: center;
}
img {
	max-height: 18em;
	border-radius: 5px;	
}
.date, .id {
	display: flex;
	justify-content: flex-end;
	padding-right: 1em;
	color: #777777;
}
.container {
	padding: 0px;
}
.C {
	background-color: #c4c4c4;
	min-height: 10em;
	width: 100%;
	margin-top: 1em;
	margin-bottom: 1em;
	padding: 1em;
	border-radius: 5px;	
}
</style>


<script>
import store from '../store.js'
import router from '../router.js'
export default {
	methods: {
		edit(id) {
			$router.push("articles/edit/:id=" + id)
		}
	},
  mounted () {
	var s = this.$store
    var ss = this.$store.state
	this.articles = ss.articles
	this.articles = ss.articles.map((item) => {
		item.created_at = "le " + moment(item.created_at, "YYYY-MM-DD hh:mm:ss").format("LL");
		return item
	})
  },
  data () {
    return {
      articles: []
    }
  }
}
</script>