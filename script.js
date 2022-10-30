function displayWeather(response) {
    console.log(response);
  
    document.querySelector("#replace-city").innerHTML = response.data.name;
    let newTemp = document.querySelector("#current-temp");
    let temperature = Math.round(response.data.main.temp);
    newTemp.innerHTML = `${temperature}°`;
    console.log(temperature);
  }
  
  let submitForm = document.querySelector("#location-id");
  submitForm.addEventListener("submit", displayWeather);
  
  let forms = document.querySelector("#location-id");
  forms.addEventListener("submit", changeTime);
  
  function changeCity(event) {
    event.preventDefault();
  
    let apiKey = "62231151ce343c4d68652e1617efc22f";
    let cityName = document.querySelector("#input").value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(displayWeather);
  }
  
  let form = document.querySelector("#location-id");
  form.addEventListener("submit", changeCity);
  
  function changeTime(event) {
    event.preventDefault();
  
    let weekDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
  
    let currentTime = new Date();
    let currentDay = weekDays[currentTime.getDay()];
    let hour = currentTime.getHours();
    let minutes = currentTime.getMinutes();
  
    let newTime = document.querySelector("#timer");
    newTime.innerHTML = `${currentDay} ${hour}:${minutes}`;
  }
  