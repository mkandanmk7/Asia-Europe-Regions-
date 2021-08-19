const Asia = fetch("https://restcountries.eu/rest/v2/region/asia") //return promise obj
  .then((data) => data.json());

const Europe = fetch("https://restcountries.eu/rest/v2/region/europe").then(
  (data) => data.json()
);
console.log("promise", [Europe, Asia]);

Promise.all([Asia, Europe])
  .then((data) => [...data[0], ...data[1]])
  .then((data) => createFlag(data));

div = document.createElement("div");
div.className = "outer";
document.body.append(div);

function createFlag(flag) {
  flag.forEach((details) => {
    div.innerHTML += `
<div class=container>
<img src=${details.flag}>
  <h3>${details.name}</h3>
  <p><b>Region</b>:${details.region}</p>
  <p><b>Capital</b>:${details.capital}</p>
  <p><b>Population</b>:${details.population}</p>
  </div>`;
  });
}
