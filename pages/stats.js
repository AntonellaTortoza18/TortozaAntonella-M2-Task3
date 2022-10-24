async function getDatos() {
  let res = await fetch("https://mind-hub.up.railway.app/amazing");
  let data = await res.json();
  let events = data.events;
  // console.log(events);
//
  let res1 = await fetch("https://mind-hub.up.railway.app/amazing/?time=past");
  let data1 = await res1.json();
  let pastEvents = data1.events;
  // console.log(pastEvents);
//
  let respon = await fetch(
    "https://mind-hub.up.railway.app/amazing/?time=upcoming"
  );
  let data2 = await respon.json();
  let upcomingEvents = data2.events;
  // console.log(upcomingEvents);

// filtro categorias de eventos pasados
let categoriesEventsPast = pastEvents.map(event => event.category);
let categoriesEventsFilterPast = [...new Set (categoriesEventsPast)]
console.log(categoriesEventsFilterPast);
// recorro el array de eventos pasados con map y le agrego dos nuevas propiedades a cada evento, percentage y gananciaReal.
 pastEvents.map((everyEvent) => {
    let assistance = everyEvent.assistance;
    let capacity = everyEvent.capacity;
    let percentage = ((assistance / capacity) * 100).toFixed();
    everyEvent.percentage = percentage;
    let gananciaReal = (everyEvent.price * everyEvent.assistance)
    everyEvent.ganancia = gananciaReal
   
  });

  // MAP + FILTER para obtener un array con los eventos de cada categoria. Se utiliza el map porque tengo que transformar el array de categorias en un array con los eventos de CADA CATEGORIA
  let arrayEventsPast = categoriesEventsFilterPast.map(cadaCategoria =>{
    let arrayFiltradoPast = pastEvents.filter(cadaEvento => cadaEvento.category === cadaCategoria)
    return arrayFiltradoPast
  
  })
  console.log(arrayEventsPast);

// Creo la variable ordenadoPorAsistencia que va a recorrer el array de eventos pasados con sort y este va a ordenar de menor a mayor los eventos segun su asistencia.
let ordenadoPorAsistencia =[...pastEvents].sort((evento1,evento2) => evento1.assistance - evento2.assistance)
// let mayorPorcentajeAsistencia = ordenadoPorAsistencia[ordenadoPorAsistencia.length-1]
// let menorPorcentajeAsistencia = ordenadoPorAsistencia[0]

// Creo la variable ordenadoPorCapacidad que va a recorrer el array de eventos pasados con sort y este va a ordenar de menor a mayor los eventos segun su capacidad.
let ordenadoPorCapacidad = [...pastEvents].sort((evento1,evento2)=> evento1.capacity-evento2.capacity)
// let mayorCapacidad = ordenadoPorCapacidad[ordenadoPorCapacidad.length-1]
// let menorCapacidad = ordenadoPorCapacidad[0]

  table1(ordenadoPorAsistencia, ordenadoPorCapacidad);







// filtro categorias de eventos futuros
  let categoriesEventsUpcoming = upcomingEvents.map(event => event.category);
  let categoriesEventsFilterUpcoming = [...new Set(categoriesEventsUpcoming)];
  console.log(categoriesEventsFilterUpcoming);
// recorro el array de eventos futuros con map y le agrego dos nuevas propiedades a cada evento, percentage y ganancia estimada.
    upcomingEvents.map((everyEvent) => {
    let estimate = everyEvent.estimate;
    let capacity = everyEvent.capacity;
    let percentageAssistEst = ((estimate / capacity) * 100).toFixed();
    everyEvent.percentage = percentageAssistEst;
    let gananciaEstimate = (everyEvent.price * everyEvent.estimate)
    everyEvent.ganancia = gananciaEstimate
  });

// MAP + FILTER para obtener un array con los eventos de cada categoria. Se utiliza el map porque tengo que transformar el array de categorias en un array con los eventos de CADA CATEGORIA
  let arrayEventsUpcoming = categoriesEventsFilterUpcoming.map(cadaCategoria =>{
    let arrayFiltradoUpcoming = upcomingEvents.filter(cadaEvento => cadaEvento.category === cadaCategoria)
    return arrayFiltradoUpcoming
  
  })
  console.log(arrayEventsUpcoming);

// REDUCE para obtener la ganancia y el porcentaje total estimado de c/ categoria









}
getDatos();

function table1(arrayAsistencia, arrayCapacidad) {
  let tableOne = `<tr class= "subtitle">
                       <td class="table-subtitle">Event with the highest percentage of attendance</td>
                       <td class="table-subtitle">Event with the lowest percentage of attendance</td>
                       <td class="table-subtitle">Event with larger capacity</td>
                    </tr>
                    <tr>
                    <td>${arrayAsistencia[arrayAsistencia.length-1].name}:  ${arrayAsistencia[arrayAsistencia.length-1].percentage}% of attendance </td>
                    <td>${arrayAsistencia[0].name}: ${arrayAsistencia[0].percentage}% of attendance</td>
                    
                   <td>${arrayCapacidad[arrayCapacidad.length-1].name}: ${arrayCapacidad[arrayCapacidad.length-1].capacity} total capacity</td>
                    </tr>`;
  document.getElementById("tableOne").innerHTML = tableOne;
}

function tableUpcoming(array) {
  let tableUpcoming = ` <tr class="subtitle">
  <td class="table-subtitle">Categories</td>
  <td class="table-subtitle">Revenues</td>
  <td class="table-subtitle">Percentage of estimated attendance</td>
</tr>`
array.forEach((event)=>{
  tableUpcoming += `<tr>
  <td>${event}</td>
   <td> ${event.gananciaEstimate}</td>
  <td>${event.percentageAssistEst}</td>
   </tr>`;
})

  document.getElementById("tableUpcoming").innerHTML = tableUpcoming;
}

// function tablePast(categories, arrayPast) {
//   let tablePast = `
//   <tr class="subtitle">
//   <td class="table-subtitle">Categories</td>
//   <td class="table-subtitle">Revenues</td>
//   <td class="table-subtitle">Percentage of attendance</td>
// </tr>

// <tr>

// <td>${categories.categoriesEventsFilter[0]}</td>
//  <td> ${arrayPast.ganancia[0]}</td>
// <td>${arrayPast.percentage[0]}</td>
//  </tr>

//   `;
//   document.getElementById("tablePast").innerHTML = tablePast;
// }

// function tablePast(arrayCategories, event){
//   let tr = document.createElement("tr");
//   arrayCategories.forEach((event)=> {
//     tr.innerHTML = `
//      <td>${event}</td>
//  <td> ${d}</td>
//  <td>${sa}</td>
//  `
//  })

// }