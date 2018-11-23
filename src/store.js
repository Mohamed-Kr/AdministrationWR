import Vue from "vue";
import Vuex from "vuex";
import router from './router.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lastPage: '',
    authentified : false
  },
  mutations: {
    setSelected() {
      if (this.lastPage == "articles") {
        var id = "messages"
      }else {
        var id = "articles"
      }
      document.getElementById(id).style.backgroundColor = "white"
      document.getElementById(id).style.color = "#2980b9"
    },
    goToBeginPage () {
      this.authentified = true
      router.push("/")
    },
    Auth () {
      if (localStorage.getItem("password") === null || localStorage.getItem("password") === undefined) {
        var url_string = window.location.href
        var url = new URL(url_string)
        if (url.searchParams.get("password") != null) {
          localStorage.setItem("password", url.searchParams.get("password"));
        }
        if (localStorage.getItem("password") === null || localStorage.getItem("password") === undefined) {
          localStorage.setItem("password", prompt("Mot de Passe:"))
        }
      }
      this.commit("verifyPass")
    },
    verifyPass () {
      axios.get('https://api.werobot.fr/message/', {
        headers: {
          'Authorization': "Bearer " + localStorage["password"]
        }
      }).then((response) => {
        if (response.data.data == undefined) {
          if (localStorage["lastPage"] != undefined) {
            this.lastPage = localStorage["lastPage"]
          } else {
            this.lastPage = "articles"
          }
        } else {
          router.push("/" + this.lastPage)
        }
        return (response.data.success)
      })
    }
  },
  actions: {}
});
