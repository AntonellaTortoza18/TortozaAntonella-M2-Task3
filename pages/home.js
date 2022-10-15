console.log(data);
let container18 = document.getElementById("container18");

console.log(container18);

// for (let i = 0; i < data.events.length; i++) {
//   let div = document.createElement("div");
//   div.className = "card card1";
//   div.style = "width:18rem;";
//   div.innerHTML = `
//     <img src="${data.events[i].image}" class="imgcard card-img-top"  alt:"${data.events[i].name}"/>
//     <div class="card-body d-flex flex-column align-items-center text-center justify-content-between">
//       <h5 class="card-title">${data.events[i].name}</h5>
//       <p class="card-text">
//       ${data.events[i].description}
//       </p>
//       <p class="price">Price: $${data.events[i].price}</p>
//       <a href="./pages/details.html" class="btn btn-dark">Read More></a>
//     </div>
//     `;
//   container18.appendChild(div);
// }

data.events.forEach(createCards);

function createCards(data) {
  let div = document.createElement("div");
  div.className = "card card1";
  div.style = "width:18rem;";
  div.innerHTML = `
    <img src="${data.image}" class="imgcard card-img-top"  alt:"${data.name}"/>
    <div class="card-body d-flex flex-column align-items-center text-center justify-content-between">
      <h5 class="card-title">${data.name}</h5>
      <p class="card-text">
      ${data.description}
      </p>
      <p class="price">Price: $${data.price}</p>
      <a href="./pages/details.html" class="btn btn-dark">Read More></a>
    </div>
    `;
  container18.appendChild(div);
}

// input y search

// search.addEventListener("keyup", function (event) {
//   let evento = data.events.filter((cE) => {
//     return cE.name.toLowerCase().includes(event.target.value.toLowerCase());
//   });
//   console.log(evento);
// });
let applied = {};

function filter(fn, value) {
  let event = data.events;

  applied[fn] = value;

  console.log(applied);

  for (let name in applied) {
    if (name == "isEvent") {
      event = event.filter(cE => cE.name.toLowerCase().includes(applied[name].toLowerCase()))
    }
    if (name == "matchesWithText") {
      event = event.filter(value => value.category.includes(applied[name]))
    }
  }

  return event;
}

function updateCards(element, data, fn) {
  element.innerHTML = "";
  data.forEach(fn);
}

// let inputButton = document.getElementById("js-button");
// inputButton.addEventListener("click", function () {
//   let inputSearch = document.getElementById("js-search");
//   let evento = data.events.filter((cE) => {
//     return cE.name.toLowerCase().includes(inputSearch.value.toLowerCase());
//   });

//   updateCards(container18, evento, createCards);
// });

let inputButton = document.getElementById("js-button");
inputButton.addEventListener("click", function (event) {
  let inputSearch = document.getElementById("js-search");
  console.log(inputSearch.value);
  event = filter("isEvent", inputSearch.value);
  console.log(event);
  updateCards(container18, event, createCards);
  // Swal.fire({
  //   icon: 'error',
  //   title: 'Oops...',
  // text: '¡No Matches!',
  //   width: 600,
  //   padding: '3em',
  //   color: '#716add',
  //   background: '#fff url(/images/trees.png)',
  //   backdrop: `
  //     rgba(0,0,123,0.4)
  //     url("https://raw.githubusercontent.com/sweetalert2/sweetalert2.github.io/master/images/nyan-cat.gif")
  //     left top
  //     no-repeat
  //   `
  // })
  // container18.innerHTML = "";
  // evento.forEach(createCards);
});

// categories events

let containerCheckBoxes = document.getElementById("js-container-check");

let categoriesEvents = data.events.map((event) => event.category);
console.log(categoriesEvents);
let categoriesEventsFilter = [...new Set(categoriesEvents)];
console.log(categoriesEventsFilter);

categoriesEventsFilter.forEach(createCheckBoxes);
console.log(categoriesEventsFilter);

function createCheckBoxes(category) {
  containerCheckBoxes.innerHTML += `
  <div class="form-check form-check-inline" >
            <input
              class="form-check-input"
              type="checkbox" 
              value="${category}"  id="inlineCheckbox1"
            />
            <label class="form-check-label" for="inlineCheckbox1"
              >${category}</label
            >
          </div>
  `;
}

let inputCheckbox = document.getElementById("js-container-check");

inputCheckbox.addEventListener("change", function (event) {
  event = filter("matchesWithText", event.target.value);
  console.log(event);
  updateCards(container18, event, createCards);
  // container18.innerHTML = "";
  // category.forEach(createCards);
});
