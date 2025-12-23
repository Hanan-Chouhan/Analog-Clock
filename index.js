setInterval(() => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let hrotation = 30 * hours + minutes / 2;
  let mrotation = 6 * minutes;
  let srotation = 6 * seconds;

  document.querySelector(".hours").style.transform = `rotate(${hrotation}deg)`;
  document.querySelector(
    ".minutes"
  ).style.transform = `rotate(${mrotation}deg)`;
  document.querySelector(
    ".seconds"
  ).style.transform = `rotate(${srotation}deg)`;
}, 1000);
