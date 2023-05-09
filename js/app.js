// Tu código aquí dina
let image = document.querySelector("#photo");
let name = document.querySelector("#first");
let lastName = document.querySelector("#last");
let country = document.querySelector("#country");
let phone = document.querySelector("#phone");
let email = document.querySelector("#email");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  getRandomJoke();
});

async function getRandomJoke() {
  // 1. Va a pedir un chiste a la API de Chuck Norris
  // USamos el método 'fetch' que es una función global de JAvaScript, para hacer una petición GET a la API , en la URL que le pasamos como parámetro
  // Guardamos la respuesta en la variable response.

  // await -> usado para gestionar funciones que se ejecutan de forma asíncrona, es decir, que van a tardar un ratito más o menos largo, en ejecutarse.
  const respuesta = await fetch("https://randomuser.me/api");
  console.log("Response", respuesta);

  // 2. Va a procesar la respuesta, para convertirla en un tipo de datos que sea capaz mi programa de entederlo (objeto, array de objetos) 99% veces
  // Le decimos a JavaScript que esa respuesta contiene un string en formato JSON. Queremos que lo convieta de string a objeto (o array de objetos)
  const datos = await respuesta.json();

  // 3. Cuando tenga la información ya puedo actualizar el DOM
  console.log("datos: ", datos);
  name.textContent = datos.results[0].name.first;
  lastName.textContent = datos.results[0].name.last;
  country.textContent = datos.results[0].location.city;
  phone.textContent = datos.results[0].phone;
  email.textContent = datos.results[0].email;
  let url = `${datos.results[0].picture.large}`;
  //console.log(url)
  image.src = url;
}
