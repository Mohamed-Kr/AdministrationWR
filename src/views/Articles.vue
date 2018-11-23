<template>
  <div>
    <Header/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import store from '../store.js'
export default {
  components: {
    Header
  },
  mounted () {
    store.lastPage = "articles"
    if(!store.authentified) {
      store.commit("goToBeginPage")
    }
  }
}
</script>