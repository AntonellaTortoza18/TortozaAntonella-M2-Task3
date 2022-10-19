let container18 = document.getElementById("container18");
let containerCheckBoxes = document.getElementById("js-container-check");
let inputButton = document.getElementById("js-button");

function createCards(data) {
  container18.innerHTML = "";
  if (data.length > 0) {
    data.forEach((events) => {
      let div = document.createElement("div");
      div.className = "card card1";
      div.style = "width:18rem;";
      div.innerHTML = `
            <img src="${events.image}" class="imgcard card-img-top"  alt:"${events.name}"/>
            <div class="card-body d-flex flex-column align-items-center text-center justify-content-between">
              <h5 class="card-title">${events.name}</h5>
              <p class="card-text">
              ${events.description}
              </p>
              <p class="price">Price: $${events.price}</p>
              <a href="../pages/details.html?id=${events._id}" target="_blank" class="btn btn-dark">Read More ></a>
            </div>
            `;
      container18.appendChild(div);
    });
  } else {
    container18.innerHTML = ` <p id="message"> Event not found, adjust search filter! </p>`;
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Event not found, adjust search filter",
      width: 600,
      padding: "3em",
      color: "#716add",
      backdrop: `
              rgba(0,0,123,0.4)
              url("https://raw.githubusercontent.com/sweetalert2/sweetalert2.github.io/master/images/nyan-cat.gif")
              left top
              no-repeat
            `,
    });
  }
}
createCards(data.events);

//FILTRADO DE CATEGORIAS Y ELIMINACION DE DUPLICADOS:
let categoriesEvents = data.events.map((event) => event.category);
//Recorro el array de eventos con map y separo de este la propiedad categorias.
console.log(categoriesEvents);
//Dado que al recorrer el array anterior me va a dar todas las categorias, con el metodo set elimino las repetidas y dejo solo el primer elemento encontrado, el resto lo descarta y guardo el dato obtenido con el metodo anterior en la variable categoriesEventsFilter.
let categoriesEventsFilter = [...new Set(categoriesEvents)];

//CREACION DE CHECKBOX DINAMICOS: declaro dentro de la funcion createCheckBoxes la variable vacia checkContainer, luego con la funcion forEach recorro categoriesEventsFilter, que son las categorias que habia filtrado anteriormente, para que pueda recoorer el array completo y utilice el parametro categoria para que en cada vuelta del forEacg aloje en checContainer el templete, luego llamo al dom, al elemento padre, que es containerCheckBoxes y le imprimo el contenido de checkContainer. .

function createCheckBoxes() {
  checkContainer = "";
  categoriesEventsFilter.forEach((categoria) => {
    checkContainer += `
        <div class="form-check form-check-inline" >
                  <input
                    class="form-check-input"
                    type="checkbox" 
                    value="${categoria}"  id="inlineCheckbox1"
                  />
                  <label class="form-check-label" for="inlineCheckbox1"
                    >${categoria}</label
                  >
                </div>
        `;
  });
  containerCheckBoxes.innerHTML = checkContainer;
}

createCheckBoxes();

//APLICACION DE ESCUCHADOR DE EVENTOS A LOS CHECKBOX: creo la variable checksSelected para poder guardar los eventos con clickeo o desclickeo, luego llamo a todos los elementos input con su clase y los guardo en una constante checBoxes para luego usarlos en la funcion.
let checksSelected = [];
const checkBoxes = document.querySelectorAll(".form-check-input");
//Con forEach recorro el array checBoxes que almacena todos los input, para aplicarle a c/u de sus checks un escuchador de eventos de tipo click, y creo un condicional, en el cual establezco que al escuchar click, es decir true, se ingrese el valor del evento mediante el push al array que habia dejado vacio de checksSelected, y que de lo contrario lo filtre.
// En cada condicional, sea true o false, llamo a la funcion de filtradoCombinadoCyS que me traera el contenido correspondiente.
// esta funcion queda guardada en checksSelected para usarla en el filtrado.

checkBoxes.forEach((checks) => {
  checks.addEventListener("click", (event) => {
    let checked = event.target.checked;
    console.log(checked);
    if (checked) {
      checksSelected.push(event.target.value);
      console.log(checksSelected);
      filtradoCombinadoCyS();
      console.log(checksSelected);
    } else {
      checksSelected = checksSelected.filter(
        (uncheck) => uncheck !== event.target.value
      );
      filtradoCombinadoCyS();
    }
  });
});

//APLICACION DE ESCUCHADOR DE EVENTOS A LA BARRA SEARCH: creo una variable vacia de tipo string, llamada searchText para guardar los eventos de tipo keyup. Luego llamo y guardo el elemento (js-search) en la variable variable inputSearch, para usarlos en la funcion.

let searchText = "";
let inputSearch = document.getElementById("js-search");
inputSearch.addEventListener("input", function (evento) {
  searchText = evento.target.value;
  filtradoCombinadoCyS();
});

// inputButton.addEventListener("click", function (event) {
//   let evento = data.events.filter((cE) => {
//     return cE.name.toLowerCase().includes(searchText.value.toLowerCase());
//   });
//   container18.innerHTML = "";
//   evento.forEach(createCards);
// });

//CREACION DE LA FUNCION DE FILTRADO COMBINANDO LOS EVENTOS DE CHECKBOX Y SEARCH: 
//POR ULTIMO EJECUTO LA FUNCION CON SU LLAMDADO.
function filtradoCombinadoCyS() {
  let datos = [];
  console.log(datos);
  if (checksSelected.length > 0 && searchText !== "") {
    checksSelected.map((categoria) =>
      datos.push(
        ...data.events.filter(
          (evento) =>
            evento.name
              .toLowerCase()
              .includes(searchText.trim().toLowerCase()) &&
            evento.category == categoria
        )
      )
    );
  } else if (checksSelected.length > 0 && searchText == "") {
    checksSelected.map((categoria) =>
      datos.push(
        ...data.events.filter((evento) => evento.category == categoria)
      )
    );
  } else if (checksSelected.length == 0 && searchText !== "") {
    datos.push(
      ...data.events.filter(
        (evento) =>
          evento.name.toLowerCase().includes(searchText.trim().toLowerCase()) ||
          evento.category
            .toLowerCase()
            .includes(searchText.trim().toLowerCase())
      )
    );
  } else {
    datos.push(...data.events);
  }
  createCards(datos);
}
filtradoCombinadoCyS();

//  alt + 96 backticks
// alt + 39 '' comillas simples
