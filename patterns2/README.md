# IT Academy
## Itinerari Node.js  - Sprint 3 - Patterns 1

## Nivell 1
### Exercici 1 - Middleware
- Creu en un fitxer inicial una petita aplicació que sumi, resti i multipliqui rebent els paràmetres en un JSON.
- Creu, en un fitxer extern, una classe que emmagatzemi middlewares (funcions).
- Invoqui les execucions de la suma, la resta i la multiplicació de manera natural. Inserida la invocació a middlewares que variïn el resultat natural oferint com a resultat final el quadrat, el cub i la divisió entre 2 del resultat inicial en cadascuna de les operacions.
## Nivell 2
### Exercici 1 - Decorator
- Creu un Decorator en un file js que retorni una funció. Aquesta funció efectuarà una conversió de moneda a euros multiplicant pel coeficient de conversió del fitxer adjunt currency_conversions.json, en funció de la divisa original.
- Creu una petita aplicació que calculi el cost de N articles al preu X, aplicant diverses conversions emprant el Decorator del punt anterior.
## Nivell 3
### Exercici 1 - Publisher / Subscriber
- Utilitzant RabbitMQ com a element imprescindible, creï una queue on una classe Publisher publiqui missatges que siguin llegits per una classe Subscriber. 
- Traci per consola l'emissió i recepció de cada missatge en consoles diferents.