// Write your code in this file!

function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
    return "This one is on me!";
  } else if (feet > 2000 && feet < 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

function ternaryCheckCity(city) {
  let result
  if (city === "NYC") {
    result = "Ok, sounds good.";
  } else {
    result = "No go.";
  }
  return result
}

function switchOnCharmFromTip(tip) {
  let result
  if (tip === "generous") {
    result = "Thank you so much.";
  } else if (ride > 2000) {
    result = "Thank you.";
  }
  else {
    result = "Bye.";
  }
  return result
