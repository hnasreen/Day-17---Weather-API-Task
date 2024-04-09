// var res = fetch("https://restcountries.com/v3.1/all")
// res.then((data) => data.json()).then((data1) => foo(data1))
var container = document.createElement("div")
container.className = "container"

var row = document.createElement("div")
row.className = "row"

async function foo() {
    let res = await fetch("https://restcountries.com/v3.1/all")
    let data1 = await res.json()
    console.log(data1)

    for (var i = 0; i < data1.length; i++) {
        var col = document.createElement("div")
        col.className = "col-md-4"
        col.innerHTML = `
            <div class="card border-info mt-3 mb-4 h-100" style="max-width: 18rem;">
            <div class="card-header">${data1[i].name.common}</div> 
            <div class="card-body text-info">
                <img src="${data1[i].flags.png}" class="img-fluid mb-2" class="card-img-top" style="width: auto; height: 100px; object-fit: cover;" alt="flag">
                <p class="card-text">Capital : ${data1[i].capital}<br>Region: ${data1[i].region}<br>Population: ${data1[i].population}</p>
                <button class="btn btn-primary" onclick="fetchWeather(${data1[i].latlng[0]},${data1[i].latlng[1]})">Click for Weather</button>
        </div>
    </div>` 
        row.append(col)
        container.append(row)
        document.body.append(container)
    }
}

async function fetchWeather(temp1,temp2) {
    let lat = temp1;
    let lon = temp2;
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e0345cc4b8388ac645d85e52714e6078`)
    let weatherData = await data.json()
    console.log(weatherData.main.temp)
    alert(`Temperature: ${weatherData.main.temp}`);
}

foo()

