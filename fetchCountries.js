const Asia = fetch("https://restcountries.eu/rest/v2/region/asia") //return promise obj
  .then((data) => data.json());
// .then((data) => console.log(data));

const Europe = fetch("https://restcountries.eu/rest/v2/region/europe").then(
  (data) => data.json()
);
// console.log("promise", [Europe, Asia]);

Promise.all([Asia, Europe])
  .then((data) => [...data[0], ...data[1]])

  .then((data) => data.forEach((data) => createFlag(data)))
  .catch((data) => console.log("Try again"));
// console.log([...data[0], ...data[1]]);
let head = document.createElement("div");
head.className = "header";
head.innerHTML = `<h1 class="head">"Asia & Europe Countries"</h1>`;
document.body.append(head);
function createFlag(details) {
  const info = document.createElement("div");
  info.className = "container";
  info.innerHTML = `
  <div class="flag-container">
  <img class="flag" src="${details.flag} " width="250px" heigth="150px">

  </div>
  <div class="details">
  <h3>${details.name}</h3>
  <p><b>Population:</b>${details.population}</p>
  <p><b>Region:</b>${details.region}</p>
  <p><b>Capital:</b>${details.capital}</p>
  </div>
  
  
  `;
  document.body.append(info);
}
