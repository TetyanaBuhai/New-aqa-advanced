const age = 18;

function check_if_allowed(age1, age2, religion) {
  if (typeof age1 !== "number" || typeof age2 !== "number") {
    console.log("incorrect data");
    return;
  }

  if (religion !== "loh") {
    console.log("go away");
    return;
  }

  if (age1 < age2) {
    console.log("NOT OK");
    return false;
  } else {
    console.log("ok");
    return true;
  }
}

function log_sum(num) {
  return num + " $";
}

function sell_alcohol(price, number, age, your_age, religion) {
  if (!check_if_allowed(age, your_age, religion)) {
    return "forbidden";
  }
  let sum = price * number;
  return log_sum(sum);
}

let s = sell_alcohol(4, 2, 30, age, "loh");

console.log(s);

