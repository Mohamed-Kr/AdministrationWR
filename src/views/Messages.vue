<template>
  <div>
    <Header/>
    <msg-box/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import MsgBox from '../components/MsgBox.vue'
import store from '../store.js'
import router from '../router.js'
export default {
  components: {
    Header,
    MsgBox
  },
  mounted () {
	  var s = this.$store
    var ss = this.$store.state
    if (!localStorage.getItem("haveAuth")) {
      router.push("/")
    }
    localStorage.setItem("lastPage", "messages")
    ss.page = "messages"
    s.commit("getMsgs")
  },
}
</script>

