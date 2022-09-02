En este desafío debes crear una función la cual produzca una espera en un tiempo específico y debe funcionar como una Promesa.

La función deberá recibir dos parametros

- time = el tiempo de espera
- message = el mensaje que debe imprimir despues de la espera

Para ejecutar el tiempo de espera debes usar `window.setTimeout`

La solución debería tener un input y output como los siguientes:

Input

```js
delay(2000, 'Hello after 2s').then((message) => console.log(message))
```

Output

```sh
# after 2s
Hello after 2s
```
