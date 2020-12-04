/**
 The function takes number of seconds as input and return an object with keys 
 hours
 minutes
 seconds
 The value corresponding to each key should be the conversion of seconds into correponding 
 time 
 */
const convertTime = (seconds) => {
  if (typeof seconds === "number") {
    //number
    minutes = Math.floor(seconds / 60); //1 min=60sec
    hours = Math.floor(minutes / 60); //1 hr=60 min
    seconds = Math.floor(seconds % 60); //remainder
    if (minutes >= 60) {
      minutes = 0;
    }
  } else {
    throw Error("Invalid Input");
  }
  return {
    hours,
    minutes,
    seconds,
  };
};

module.exports = convertTime;
