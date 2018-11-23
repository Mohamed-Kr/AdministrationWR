<template>
	<div>
		<div v-for="(message, index) in messages" :key="index">
			{{message.id}}
		</div>
	</div>
</template>

<script>
import store from '../store.js'
export default {
  mounted () {
	var s = this.$store
    var ss = this.$store.state
    this.messages = ss.messages
  },
  data () {
    return {
      messages: []
    }
  }
}
</script>
