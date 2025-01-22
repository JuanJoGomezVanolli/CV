//Estos son los elementos que cambian en las cajas superiores
const firstName = document.querySelector("#first_title_1");
const secondName = document.querySelector("#first_title_2");
const thirdName = document.querySelector("#first_title_3");
const fourthName = document.querySelector("#first_title_4");

const firstID = document.querySelector("#second_title_1");
const secondID = document.querySelector("#second_title_2");
const thirdID = document.querySelector("#second_title_3");
const fourthID = document.querySelector("#second_title_4");

const firstMAG = document.querySelector("#third_title_1");
const secondMAG = document.querySelector("#third_title_2");
const thirdMAG = document.querySelector("#third_title_3");
const fourthMAG = document.querySelector("#third_title_4");

//Estos son los elementos que cambian en la div mainObjectContainer
const main_cont_1st = document.querySelector(".main_container_1st_title");
const main_cont_2nd = document.querySelector(".main_container_2nd_title");
const main_cont_3rd = document.querySelector(".main_container_3rd_title");
const main_cont_4th = document.querySelector(".main_container_4th_title");
const main_cont_5th = document.querySelector(".main_container_5th_title");

function myDateFormFunction() {
  var input = document.getElementById("input-text").value;
  // Do something with the input value
  console.log(input);
  fetch(
    `https://api.nasa.gov/neo/rest/v1/feed?start_date=${input}&end_date=${input}&api_key=rwV0N316D2DtQMTqqixM0PbmjFKNLifJy3ZSHYMN`
  )
    .then((res2) => {
      return res2.json();
    })
    .then((data) => {
      //console.log("hola");
      neoObjct = Object.values(data.near_earth_objects); // Este es un array que tiene todos los objetos que pasaron ese dia.

      function sortByMagnitude(array) {
        array.sort(
          (a, b) =>
            Math.abs(b.absolute_magnitude_h) - Math.abs(a.absolute_magnitude_h)
        );
        return array;
      }

      function getSelectedValuesFromArray(objects) {
        const selectedValues = [];
        objects.forEach(function (object) {
          const {
            name,
            id,
            absolute_magnitude_h,
            is_potentially_hazardous_asteroid,
            estimated_diameter,
          } = object;
          selectedValues.push({
            name,
            id,
            estimated_diameter,
            absolute_magnitude_h,
            is_potentially_hazardous_asteroid,
          });
        });
        return selectedValues;
      }

      // Array de Objectos: arr = neoObjct[0]
      asteroidObject = sortByMagnitude(getSelectedValuesFromArray(neoObjct[0])); // Aqui le asignamos a asteroidObject un array de objetos los cuales ya tienen solo valores
      console.log(asteroidObject); // seleccionados "getSelectedValuesFromArray" y ya fueron ordenados sortByMagnitude

      //Imprimimos todos los espacios en pantalla

      firstName.textContent = `Object Name: ${asteroidObject[1].name}`;
      secondName.textContent = `Object Name: ${asteroidObject[2].name}`;
      thirdName.textContent = `Object Name: ${asteroidObject[3].name}`;
      fourthName.textContent = `Object Name: ${asteroidObject[4].name}`;
      firstID.textContent = `ID: ${asteroidObject[1].id}`;
      secondID.textContent = `ID: ${asteroidObject[2].id}`;
      thirdID.textContent = `ID: ${asteroidObject[3].id}`;
      fourthID.textContent = `ID: ${asteroidObject[4].id}`;
      firstMAG.textContent = `Magnitude: ${asteroidObject[1].absolute_magnitude_h}`;
      secondMAG.textContent = `Magnitude: ${asteroidObject[2].absolute_magnitude_h}`;
      thirdMAG.textContent = `Magnitude: ${asteroidObject[3].absolute_magnitude_h}`;
      fourthMAG.textContent = `Magnitude: ${asteroidObject[4].absolute_magnitude_h}`;

      main_cont_1st.textContent = asteroidObject[0].name;
      main_cont_2nd.textContent = asteroidObject[0].id;
      main_cont_3rd.textContent = asteroidObject[0].absolute_magnitude_h;
      main_cont_4th.textContent = `${asteroidObject[0].estimated_diameter.kilometers.estimated_diameter_min.toFixed(
        2
      )} + ${asteroidObject[0].estimated_diameter.kilometers.estimated_diameter_max.toFixed(
        2
      )}`;
      main_cont_5th.textContent =
        asteroidObject[0].is_potentially_hazardous_asteroid;
    })
    .catch((error) => console.log(error));
}
