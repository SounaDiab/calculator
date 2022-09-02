function insert(num) {
  let myString = document.form.textview.value;
  let lastChar = myString[myString.length - 1];
  if (myString.length < 30) {
    if (!isNaN(lastChar) || lastChar == null || !isNaN(num)) {
      document.form.textview.value = myString + num;
    } else if (num != lastChar) {
      document.form.textview.value = myString.replace(lastChar, num);
    }
  }
}

function equal() {
  let sum = document.form.textview.value;
  if (sum) {
    document.form.textview.value = eval(sum);
  }
}

function clean() {
  document.form.textview.value = "";
}

function back() {
  let exp = document.form.textview.value;
  document.form.textview.value = exp.substring(0, exp.length - 1);
}

function hide() {
  let hide = document.querySelector(".container1");
  hide.style.visibility = "hidden";
}

function appearance() {
  let appearance = document.querySelector(".container1");
  appearance.style.visibility = "visible";
}


function sin() {
  let sum = document.form.textview;
  let rad = Math.PI / 180;
  sum.value = Math.sin(sum.value * rad);
}

function cos() {
  let sum = document.form.textview;
  let rad = Math.PI / 180;
  sum.value = Math.cos(sum.value * rad).toFixed(0);
}

function tan() {
  let sum = document.form.textview;
  let rad = Math.PI / 180;
  if (sum.value == 45) {
    sum.value = Math.tan(sum.value * rad).toFixed(0);
  } else if (sum.value == 90 || sum.value == 270) {
    sum.value=`Error`
  } else if (sum.value == 135) {
    sum.value = Math.tan(sum.value * rad).toFixed(0);
  }
  else {
    sum.value = Math.tan(sum.value * rad);
  }
}

function pow() {
  let sum = document.form.textview;
  sum.value = Math.pow(sum.value, 2);
}

function sqrt() {
  let sum = document.form.textview;
  sum.value = Math.sqrt(sum.value, 2);
}

function log() {
  let sum = document.form.textview;
  sum.value = Math.log10(sum.value);
}
function ln() {
  let sum = document.form.textview;
  sum.value = Math.log(sum.value);
}

function pi() {
  let sum = document.form.textview;
  sum.value = 3.14159265359;
}

function e() {
  let sum = document.form.textview;
  sum.value = 2.71828182846;
}

function fact() {
  let sum = document.form.textview;
  let i, num, f;
  f = 1;
  num = sum.value;
  for (i = 1; i <= num; i++) {
    f = f * i;
  }

  i = i - 1;

  sum.value = f;
}





