import GamesService from "../Services/GamesService.js";
import store from "../store.js";

//Private
function _draw() {
  let questions = store.State.questions;
  console.log(questions);
  let template = '';
  questions.forEach(q => {
    template += q.Template
  })
  document.getElementById('question').innerHTML = template
}

//Public
export default class GamesController {
  constructor() {
    store.subscribe("questions", _draw);
    GamesService.getApiQuestion();
  }
}