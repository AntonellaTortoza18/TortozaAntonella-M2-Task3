let container18 = document.getElementById("container18");

console.log(location); // veo la propiedad location
console.log(location.search);
console.log(location.search.slice(4));
console.log(data.events);
let id = location.search.slice(4);
const eventos = data.events;
console.log(eventos);
let evento = eventos.filter((evento) => evento._id == id)[0];
console.log(id);
console.log(evento);

function createCardDetails(date, data) {
  if (date < data.date) {
    let div = document.createElement("div");
    div.className = "row g-0";
    div.innerHTML = `
          <div class="col-md-5">
          <img
            src="${data.image}"
            class="img-fluid rounded-start"
            style="height: 100%; object-fit: cover; width: 100%"
            alt="${data.description}"
          />
        </div>
        <div class="col-md-7 card-body">
            <h5 class="card-title">${data.name}</h5>
            <p>Date: ${data.date}</p>
            <p class="card-text">
              ${data.description}
            </p>
            <p>Place: ${data.place}</p>
            <p>Capacity: ${data.capacity}</p>
            <p>Estimate: ${data.estimate || "not available"}</p>
            <p class="price">Price: $${data.price}</p>
        </div>
                `;
    container18.appendChild(div);
  } else {
    let div = document.createElement("div");
    div.className = "row g-0";
    div.innerHTML = `
          <div class="col-md-5">
          <img
            src="${data.image}"
            class="img-fluid rounded-start"
            style="height: 100%; object-fit: cover; width: 100%"
            alt="${data.description}"
          />
        </div>
        <div class="col-md-7 card-body">
            <h5 class="card-title">${data.name}</h5>
            <p>Date: ${data.date}</p>
            <p class="card-text">
              ${data.description}
            </p>
            <p>Place: ${data.place}</p>
            <p>Capacity: ${data.capacity}</p>
            <p>Assistance: ${data.assistance}</p>
            <p class="price">Price: $${data.price}</p>
        </div>
                `;
    container18.appendChild(div);
  }
}

let date = data.currentDate;
createCardDetails(date, evento);
