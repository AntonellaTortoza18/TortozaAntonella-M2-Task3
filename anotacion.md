# Metodos basicos:
.push
Agrega el elemento al final del array

.includes
devuelve true si el valor buscado se encuentra en el array

.concat
Une los arrays seleccionados en un unico array

# de Orden Superior:

.forEach
ejecuta la función indicada una vez por cada elemento del array. Unicamente existe dentro de un array. Hace practicamente lo mismo que el for of. por cada elemento va a invocar una funcion q le voy a especificar. Recibe como parametro una función.

.map
sirve p recorrer una array y hace algo idéntico en todos sus elementos.  Hace falta retornar dentro del map(si no te dice undefined), devuelve el array modificado. El dato original se mantiene,  Construye otro array y es necesario guardarlos en una variable nueva. tiene que devolver el mismo dato que recibe: string-->string// objeto--> objeto. Entonces... retorna nuevo array de igual elemento pero modificandolo de lo q sea que haga la función

.filter
espera que le pases una función y esa función va a recibir un valor y va a decidir si ese valor pasa al resultado final. Llama a una función que devuelve true o false. Lo mismo que entra sale,  ... Si coincide lo retorno, si no hay ninguno devuelve array con 0
retorna un array con los elementos que hayan pasado el condicional del filtro

.reduce
necesita un array y un valor inicial 0, y en cada vuelta va acumulando cada elemento del array, dando 1 solo elemento de resultado(unico valor)

.sort
para ordenar, en particular tiene  que recibir una función que dependa de dos parametros, va a ir iterando entre esos dos parametros y comparando. Ojo que cambia el original

# Metodos de string
toLowerCase & toUpperCase: convierte todos los caracteres de la cadena en minusculas/mayusculas y los devuelve. No cambia la cadena original
.slice: devuelve una subcadena

# Otros
los addEventListener depende el evento que escuche tu DOM se modificara de una u otra manera, al dispararse el evento llama a la funcion que nosotros declaremos para ese evento. 

Funciones anonimas: no tiene nombre definido, no la podemos llamar en cualquier momento
Funcion flecha: nos permite reducir su sintaxis, en funciones nombradas como anonimas

Return: finaliza la ejecucion de la funcion y especifica un valor para ser devuelto a quien llama la funcion

/anotar porque use == en details. id es string y _id es nro. y son diferentes valores/

# location y location.search
La interface Location representa la ubicación (URL) del objeto al que esta vinculado.
Los cambios hechos en ella son reflejados en el objeto al cual está relacionado. Es un objeto que tiene todas las propiedades de la url.

Location.search, es una de las propiedades de location, nos muestra el signo de pregunta con el id que creamos, y el id propiamente del evento.
Es un DOMString que contiene un '?' seguido por los parametros o el "querystring" de la URL.

loaction.search.slice() lo usamos para cortar el nombre de la propiedad y que podamos obtener solo el id del objeto.

  const pastEventsSorted = pastEvents.sort(
    (a, b) => b.percentage - a.percentage
  );
  let capacity = events
    .filter((e) => e.capacity)
    .sort((a, b) => b.capacity - a.capacity);