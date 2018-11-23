<template>
  <div>
    <Header/>
    <art-box/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import ArtBox from '../components/ArtBox.vue'
import store from '../store.js'
import router from '../router.js'
export default {
  components: {
    Header,
    ArtBox
  },
  mounted () {
	  var s = this.$store
    var ss = this.$store.state
    if (!localStorage.getItem("haveAuth")) {
      router.push("/")
    }
    localStorage.setItem("lastPage", "articles")
    ss.page = "articles"
    s.commit("getArts")
  }
}
</script>