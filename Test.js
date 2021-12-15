let time = "09:09AM";
let timeArr = time.split("");
function normalizeTime(time) {
  return timeArr.slice(6);
}
function TwentyFourhourformat(time) {
  const timeEndsWith = time.endsWith("AM") ? "AM" : "PM";
  if (timeEndsWith === "AM") {
    normalizeTime(time);
  } else {
    let newTime = timeArr.slice(3) + 12;
  }
}

console.log(TwentyFourhourformat(time));
