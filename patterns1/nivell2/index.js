class Player {
  constructor (username) {
    this.username = username
  }
}

let instance = null

class Score {
  constructor () {
    if (instance) throw new Error ('Score class can\'t be instantiated more than once')
    this.players = []
    instance = this
  }
  
  static getInstance() {
    if(!instance) return new Score()
    return instance
  }
  
  addPlayers(...players) {
    players.forEach(player => {
      const { username } = player
      const isRepeated = this.players.some(p => p.username === username)
      if (isRepeated) return
      this.players = [...this.players, {username: username, score: 0}]
    })
  }
  
  addPoints(player, points) {
    const { username } = player
    const isPlayerAdded = this.players.some(p => p.username === username)
    if(!isPlayerAdded) return
    this.players = this.players.map(p => p.username !== username ? p : { username, score: p.score + points })
  }
  
  substractPoints(player, points) {
    const { username } = player
    const isPlayerAdded = this.players.some(p => p.username === username)
    if(!isPlayerAdded) return
    this.players = this.players.map(p => p.username !== username ? p : { username, score: p.score - points })
  }

  printResult() {
    const players = this.players.sort((a, b) => b.score - a.score)
    
    console.log('## FINAL RESULTS ##')
    players
      .forEach(player => console.log(`player: ${player.username}, score: ${player.score}`))
    
    console.log('## WINNER' , players[0].username, '##')
  }
}

const leia = new Player('leia')
const han = new Player('han')
const luke = new Player('luke')
const yoda = new Player('yoda')

const score = new Score() // Instance can also be created with Score.getInstance()
const score2 = Score.getInstance()
//const score3 = new Score() // Error: 'Score class can't be instantiated more than once'


score.addPlayers(leia, han, luke, yoda)

score.addPoints(yoda, 15)
score.addPoints(han, 3)
score.substractPoints(yoda, 2)
score.addPoints(luke, 5)
score.substractPoints(han, 2)
score.addPoints(leia, 8)

score.printResult()

console.log(score === score2) // true