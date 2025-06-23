

let display = document.querySelector(".display");
let buttons = document.querySelectorAll(".num");
let operations = document.querySelectorAll(".operation");
let result = document.querySelector(".result");
let cancel = document.querySelector(".cancel");
let back = document.querySelector("#back");
// let per = document.querySelector(".per");

let firstval = "";
let op = "";
let lastval = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let val = e.target.innerText;

    if (val === ".") {
      if (op === "" && firstval.includes(".")) return;
      if (op !== "" && lastval.includes(".")) return;
      if (op === "" && firstval === "") val = "0.";
      if (op !== "" && lastval === "") val = "0.";
    }

    if (op === "") {
      firstval += val;
      display.innerText = firstval;
    } else {
      lastval += val;
      display.innerText = firstval + op + lastval;
    }
  });
});

operations.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    if (firstval === "") return;
    if (lastval !== "") {
      firstval = eval(firstval + op + lastval).toString();
      lastval = "";
    }
    op = e.target.innerText;
    let newval = Number(firstval).toFixed(3);
    display.innerText = newval + op;
  });
});

result.addEventListener("click", () => {
  if (firstval !== "" && op !== "" && lastval !== "") {

    let ans = eval(firstval + op + lastval);
    if(op=="%"){
      ans=eval(firstval*lastval/100)
    }
    display.innerText = ans.toFixed(3);
    firstval = ans.toString();
    lastval = "";
    op = "";
  }
});

cancel.addEventListener("click", () => {
  firstval = "";
  lastval = "";
  op = "";
  display.innerText = "";
});

back.addEventListener("click", () => {
  if (firstval != "" && op == "") {
    console.log(typeof firstval);
    fstlen = firstval.length - 1;
    firstval = firstval.slice(0, fstlen);
    display.innerText = firstval;
  }
  if (firstval != "" && op != "" && lastval == "") {
    op = "";
    display.innerText = firstval + op;
  }
  if (firstval != "" && op != "" && lastval != "") {
    lstlen = lastval.length - 1;
    lastval = lastval.slice(0, lstlen);
    display.innerText = firstval + op + lastval;
  }
});

// per.addEventListener("click",()=>{
//   let ans =firs
// })

//---

// let display = document.querySelector(".display");
// let buttons = document.querySelectorAll(".num");
// let operations = document.querySelectorAll(".operation");
// let result = document.querySelector(".result")
// let cancel = document.querySelector(".cancel")
// console.log(buttons);
// let firstval = "";
// let op = "";
// let lastval = "";
// let val = ""
// Array.from(buttons).forEach((button) => {
//   button.addEventListener("click", (value) => {

//     if(op == ""){      console.log(value.target);
//       firstval = firstval + value.target.innerText;
//       display.innerText = firstval;}

//   });
// });

// Array.from(operations).forEach((operator) => {
//   operator.addEventListener("click",(e)=>{
//       op = e.target.innerText;
//       console.log(op);
//       val = firstval + op
//       display.innerText = firstval + op;
//   })

// });

// Array.from(buttons).forEach((button) => {
//   button.addEventListener("click", (value) => {
//     if(op != ""){
//       console.log(value.target);
//       lastval = lastval + value.target.innerText;
//       display.innerText = val + lastval;
//     }

//   });
// });

// result.addEventListener("click",()=>{
//   let ans = eval(firstval + op + lastval);
//   display.innerText = ans;
//   firstval = ans.toString();
// })

// cancel.addEventListener("click",()=>{
//   firstval="";
//   lastval="";
//   op = "";
//   display.innerText="";
// })