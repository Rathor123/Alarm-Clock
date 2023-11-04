let gana = new Audio("smoke.mp3");
// audio function
function setgana() {
  gana.play();
}
// set alarm function
function setarlrm() {
  // audio play when alarm set
  let set = document.getElementById("set");
  let now = new Date();
  let dtlocal = document.getElementById("alarm").value;
  let fut = new Date(dtlocal);
  let timetoalarm = fut - now;
  if (timetoalarm >= 0) {
    setTimeout(() => {
      setgana();
    }, timetoalarm);
  }
}

set.addEventListener("click", setarlrm);
// digital clock

function time() {
  const tarikh = new Date();
  let h = tarikh.getHours();
  let ht = h > 12 ? h - 12 : h;
  let hours = (document.querySelector(".hours").innerHTML = ht);
  let m = tarikh.getMinutes();
  let mt = m < 10 ? "0" + m : m;

  let minutes = (document.querySelector(".minutes").innerHTML = ` :${mt}`);

  let s = tarikh.getSeconds();
  let st = s < 10 ? "0" + s : s;

  let sec = (document.querySelector(".sec").innerHTML = ` :${st}`);
}
setInterval(time, 1000);
