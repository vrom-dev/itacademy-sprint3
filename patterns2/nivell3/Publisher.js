//https://medium.com/swlh/communicating-using-rabbitmq-in-node-js-e63a4dffc8bb

const amqp = require('amqplib')

class Publisher {
    async init() {
        this.connection = await amqp.connect('amqp://localhost')
        this.channel = await this.connection.createChannel()
        await this.channel.assertExchange('logs', 'fanout', { durable: false })
    }
    publish() {
        const msg = process.argv.slice(2).join(' ') || 'Hello World!'
        this.channel.publish('logs', '', Buffer.from(msg))
        console.log(" [x] Sent %s", msg)
        setTimeout(() => this.close(this.connection), 500)
    }
    close(conn) {
        conn.close()
        process.exit(0)
    }
}

const startPublisher = async () => {
    const publisher = new Publisher()
    await publisher.init()
    publisher.publish()
}

startPublisher()
