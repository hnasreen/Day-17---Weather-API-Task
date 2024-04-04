var res = fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
res.then((data) => data.json()).then((data1) => foo(data1))

var container = document.createElement("div")
container.className = "container"

var row = document.createElement("div")
row.className = "row"

function foo(data1) {
    console.log(data1)
    for (var i = 0; i < data1.length; i++) {
        var col = document.createElement("div")
        col.className = "col-md-4"
        col.innerHTML = `
        <div class="card border-info mb-3" style="max-width: 18rem;">
    <div class="card-header">${data1[i].name}</div>
  <div class="card-body text-info">
    <p class="card-text">Capital : ${data1[i].capital}<br>Region: ${data1[i].region}<br>Population: ${data1[i].population}</p>
  </div>
</div>`
        row.append(col)
        container.append(row)
        document.body.append(container)
    }
}