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

let inputButton = document.getElementById("js-button");
inputButton.addEventListener("click", function () {
  let inputSearch = document.getElementById("js-search");
  let evento = data.events.filter((cE) => {
    return cE.name.toLowerCase().includes(inputSearch.value.toLowerCase());
  });
 container18.innerHTML = ""
 evento.forEach(createCards)
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
  console.log(event);

});


