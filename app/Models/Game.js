export default class Game {
  constructor(data) {
    this.id = data.id
    this.question = data.question
    this.answer = data.answer
    this.value = data.value
  }

  get Template() {
    return `
    <div class="col-6 bg-primary text-light text-center main-border d-flex flex-column justify-content-center">
      <h1>$${this.value}</h1>
      <h2>"${this.question}"</h2>
      <h3>Answer: "${this.answer}'"</h3>
    </div>
    `
  }
}