<template>
	<div>
		<div v-for="(article, index) in articles" :key="index">
			{{article.title}}
		</div>
	</div>
</template>

<script>
import store from '../store.js'
export default {
  mounted () {
	var s = this.$store
    var ss = this.$store.state
    this.articles = ss.articles
  },
  data () {
    return {
      articles: []
    }
  }
}
</script>