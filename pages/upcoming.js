console.log(data);
let container18 = document.getElementById("container18");

console.log(container18);

for (let i = 0; i < data.events.length; i++) {
  if (data.currentDate < data.events[i].date) {
    let div = document.createElement("div");
    div.className = "card card1";
    div.style = "width:18rem;";
    div.innerHTML = `
    <img src="${data.events[i].image}" class="imgcard card-img-top"  alt:"${data.events[i].name}"/>
    <div class="card-body d-flex flex-column align-items-center  text-center justify-content-between">
      <h5 class="card-title">${data.events[i].name}</h5>
      <p class="card-text">
      ${data.events[i].description}
      </p>
      <p class="price">Price: $${data.events[i].price}</p>
      <a href="./pages/details.html" class="btn btn-dark">Read More></a>
    </div>
    `;
    container18.appendChild(div);
  }
}
