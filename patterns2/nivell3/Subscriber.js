//https://medium.com/swlh/communicating-using-rabbitmq-in-node-js-e63a4dffc8bb

const amqp = require('amqplib')

class Subscriber {
    async init() {
        try {
            this.connection = await amqp.connect('amqp://localhost')
            this.channel = await this.connection.createChannel()
            const { exchange } = await this.channel.assertExchange('logs', 'fanout', { durable: false })
            const { queue } = await this.channel.assertQueue('', { exclusive: true })
            this.exchange = exchange
            this.queue = queue
            this.channel.bindQueue(this.queue, this.exchange, '')
        } catch (e) {
            console.log(e)
        }
    }
    listen () {
        this.channel.consume(this.queue, (msg) => {
            if (msg.content) {
                console.log(' [x] %s', msg.content.toString())
            }
        }, { noAck: true })
        console.log(' [*] Waiting for messages. To exit press CTRL+C')
    }
}

const startSubscriber = async () => {
    const subscriber = new Subscriber()
    await subscriber.init()
    subscriber.listen()
}

startSubscriber()
