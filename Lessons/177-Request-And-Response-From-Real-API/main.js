/*
  Ajax
  - Ready State => Status Of The Request
  [0] Request Not Initialized
  [1] Server Connection Established
  [2] Request Received
  [3] Processing Request
  [4] Request Is Finished And Response Is Ready
  - Status
  [200] Response Is Successful
  [404] Not Found
*/
let myRequest = new XMLHttpRequest();

// عن طريق ال
// open method
// تسطيع تحديد ال
// request method
// like (get or post or .....)

myRequest.open(
  "GET",
  "https://api.open-meteo.com/v1/forecast?latitude=51.48&longitude=12.00&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,rain,weathercode,visibility,temperature_80m,temperature_120m,temperature_180m,windspeed_1000hPa&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_min,sunrise,sunset,rain_sum&current_weather=true&timezone=auto"
);

// to send the request we use sendMethod
myRequest.send();
console.log(myRequest);

myRequest.onreadystatechange = function () {
  // console.log(myRequest.readyState);
  // console.log(myRequest.status);
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
  }
};
