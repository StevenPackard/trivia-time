import store from "../store.js";
import Game from "../Models/Game.js";

// @ts-ignore
const _api = axios.create({
  baseURL: "http://jservice.io/api/random"
})

class GamesService {

  nextQuestion() {
    this.getApiQuestion();
  }

  getApiQuestion() {
    _api.get()
      .then(response => {
        let question = response.data.map(nq => new Game(nq))
        store.commit("questions", question)
      })
      .catch(error => {
        console.log(error);
      })
  }

}

const service = new GamesService();
export default service;