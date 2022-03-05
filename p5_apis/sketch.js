let clima, api, apiKey, metric, url, _input, _button;

function setup() {
  createCanvas(400, 200);
  api = "http://api.openweathermap.org/data/2.5/weather?q=";
  apiKey = "&appid=e93d5153f6bd745ab58596c98cf9a980&";
  units = "&units=metric";
  _input = select("#city");
  _button = select("#submit");

  _button.mousePressed(PreguntarElClima);
  function PreguntarElClima() {
    url = `${api}${_input.value()}${apiKey}${units}`;
    loadJSON(url, datosObtenidos);
  }
}
function datosObtenidos(data) {
  clima = data;
  console.log(clima);
}
function draw() {
  background(0);
  if (clima) {
    let temperatura = clima.main.temp;
    let humedad = clima.main.humidity;
    circle(100, 100, temperatura);
    circle(300, 100, humedad);
  }
}
