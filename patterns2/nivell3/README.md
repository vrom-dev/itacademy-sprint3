# IT Academy
## Itinerari Node.js - Patterns 1 - Nivell 3

### Requisits
- Instalar RabbitMQ Server.

### Executar aplicació
- Obrim un nou terminal, ens movem al directori on estan els arxius .js i executem:
```bash
node Subscriber.js
```
- Això arrancarà el Subscriber que escoltarà els missatges que enviem.
- Obrim un nou terminal (deixant l'anterior obert), ens movem al mateix directori i executem:
```bash
node Publisher.js ## Si no especifiquem res, el missatge serà "Hello World!"
node Publisher.js Hola a tothom ## El missatge serà "Hola a tothom"
```
- Es poden obrir diversos terminals Publishers i tots els missatges s'escoltaran al Subscriber.