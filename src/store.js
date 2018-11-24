import Vue from "vue";
import Vuex from "vuex";
import router from './router.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    page: "",
    articles: [],
    messages: [],
    noMsgs: false
  },
  mutations: {
    pass: () => {
      localStorage.setItem("haveAuth", true)
      if (localStorage.getItem("mustChangePass")) {
        localStorage.clear()
      }
      if (localStorage.getItem("password") === null) {
        var url_string = window.location.href
        var url = new URL(url_string)
        if (url.searchParams.get("password") != null) {
          localStorage.setItem("password", url.searchParams.get("password"));
        }
        if (localStorage.getItem("password") === null) {
          localStorage.setItem("password", prompt("Mot de Passe:"))
        }
      }
      if (localStorage.getItem("lastPage") == undefined || localStorage.getItem("password") == null){
        localStorage.setItem("lastPage", "articles")
      }
      router.push("/" + localStorage.getItem("lastPage"))
    },
    getArts: function () {
      axios.get('https://api.werobot.fr/post'
      ).then((res) => {
        this.state.articles = res.data.data.posts;
        })
    },
    getMsgs: function () {
      axios.get('https://api.werobot.fr/message', {
        headers: {
          'Authorization': 'Bearer ' + localStorage["password"]
        }
      }).then((response) => {
        this.state.messages = response.data.data.messages;
        if (response.data.data.messages[0] == undefined) {
          console.log("noMsg")
          this.state.noMsgs = true
        }else {
          console.log("Msg")
        }
        }).catch(function (error) {
          if ( error.response.status == 401) {
            localStorage.clear()
          }
        });
    }
  }
})