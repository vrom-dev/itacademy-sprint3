const EventEmitter = require('events')

class Observable  {
  constructor() {
    this.observers = []
    this.emitter = new EventEmitter()
  }

  subscribe(o) {
    this.observers = [...this.observers, o]
  }

  unsuscribe(o) {
    this.observers = this.observers.filter(observer => observer !== o)
  }

  addListener(name, cb) {
    this.emitter.on(name, cb)
  }
}

class Topic extends Observable {
  constructor() {
    super()
    this.messages = []
    this.addListener('setMessage', (model) => this.observers.forEach(observer => observer.notify(model)))
  }
  setMessage(msg, user) {
    const messageToAdd = {user, message: msg}
    this.messages = [...this.messages, messageToAdd]
    this.emitter.emit('setMessage', messageToAdd)
  }
}

class User {
  constructor(username) {
    this.username = username
  }

  notify(model) {
    console.log(`# Notification for ${this.username} => message added to the topic: ${model.message}, by ${model.user.username}`)
  }
}

const sports = new Topic()
const food = new Topic()

const yoda = new User('yoda')
const han = new User('han')

sports.subscribe(yoda)
sports.subscribe(han)
sports.setMessage('Hola Mundo', yoda)
sports.unsuscribe(han)
sports.setMessage('Hello World', han)

food.subscribe(yoda)
food.setMessage('I\'m veggie', han)
