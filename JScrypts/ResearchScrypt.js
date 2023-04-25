
const LatitudScore = document.querySelector(".latitude-1")
const LongitudeScore = document.querySelector(".longitude-1")
const idScore = document.querySelector(".id-1")

console.log("Hola")




fetch('https://api.wheretheiss.at/v1/satellites/25544')
    .then(res2 => {
        return res2.json();
    })
    .then(data => {
        console.log(data);
        LatitudScore.textContent = data.latitude
        LongitudeScore.textContent = data.longitude
        idScore.textContent = data.id
    })
    .catch(error => console.log(error))








