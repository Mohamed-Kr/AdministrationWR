<template>
	<div class="container">
    <p class="noMsg" v-if="noMsgs">Aucun Messgage...</p>
		<div v-for="(msg, index) in messages" :key="index" class="C container-fluid">
      <div class="row">
        <div class="col-12 head">
          <div>
          <p class="pseudo">{{ msg.author_name }}</p>
          </div>
          <p class="date">{{ msg.created_at }}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <p class="email">{{ msg.author_email }}</p>
        </div>
        <div class="col-md-9">
          <p class="subject">{{ msg.subject }}</p>
          <p class="content">{{ msg.content }}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 foot">
          <p class="id">#{{ msg.id }}</p>
          <div class="btn-group" data-toogle="button">
            <a class="btn mailBtn" :href="'mailto: ' + msg.author_email"><i class="material-icons">email</i></a>
            <button class="btn delBtn" @click="delMsg(msg.id, msg.subject)"><i class="material-icons">delete</i></button>
          </div>
        </div>
      </div>
    </div>
	</div>
</template>

<style scoped>
.noMsg {
  text-align: center;
  font-size: 2em;
	color: #868686;
}
.container {
	padding: 0px;
}
.content {
  min-height: 5em;
  margin-bottom: 2em;
}
.subject {
  font-weight: bold;
  margin-top: 2em;
}
.foot {
  display: flex;
  justify-content: flex-end;
  align-items: center
}
.body {
	min-height: 16em;
}
.head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.pseudo {
	color: #2980b9;
	font-weight: bold;
	font-size: 1.3em; 
	display: inline;
}
p {
  margin: 0px;
  padding: 0px;
	word-wrap:break-word;
}
.email, .id, .date {
	color: #777777;
}
.id {
  display: inline;
}
.date {
  text-align: right;
}
i {
  transform: scale(1.3)
}
.mailBtn {
	background-color: #019626;
	color: white;
}
.mailBtn:hover {
	background-color: #0a7236;
}
.delBtn {
	background-color: #bd1717;
	color: white;
}
.delBtn:hover {
	background-color: #790c0c;
}
.C {
	background-color: #c4c4c4;
	width: 100%;
	margin-top: 1em;
	margin-bottom: 1em;
	padding: 1.4em;
	border-radius: 5px;	
}
</style>


<script>
import store from '../store.js'
export default {
  mounted () {
	  var s = this.$store
    var ss = this.$store.state
    this.messages = ss.messages
    this.noMsgs = ss.noMsgs
    this.messages = ss.messages.map((item) => {
		item.created_at = "le " + moment(item.created_at, "YYYY-MM-DD hh:mm:ss").format("LL");
		return item
	})
  },
  methods: {
		delMsg: (id, subject) => {
			if (confirm("êtes vous sur de vouloir supprimer ce message? : \n \n" + subject + "")) {
				axios.delete('https://api.werobot.fr/message/' + id, {
					headers: {
						'Authorization': "Bearer " + localStorage["password"]
					}
				}).then(() => {
          this.$store.state.commit('getMsgs')
					alert("message supprimé =)");
				})
			}
		}
  },
  data () {
    return {
      messages: [],
      noMsgs: false
    }
  }
}
</script>
