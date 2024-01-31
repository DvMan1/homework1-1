// const refBtnCreate = document.querySelector(
//   'button[type="button"][data-create]'
// );
// const refBtnDestroy = document.querySelector(
//   'button[type="button"][data-destroy]'
// );
// const refCountBox = document.querySelector('input[type="number"]');
// const refBody = document.querySelector("body");
// console.log(refCountBox);
// let arrBox = []; 
// let currentValue = 0;
// refCountBox.addEventListener("input", function (event) {
//   currentValue = event.target.value;
// });
// console.log(arrBox);

// refBtnCreate.addEventListener("click", function () {
//   console.log(currentValue);

//   for (let count = 0; count < currentValue; count += 1) {
//     const box = document.createElement("div");
//     arrBox[count] = box;
//     arrBox[count].classList.add("divStyleBox");
//     arrBox[count].style.backgroundColor = getRandomHexColor();
      //  let divSize = 30;
      //  arrBox[count].style.width = `${divSize + count * 10}px`;
      //  arrBox[count].style.height = `${divSize + i * 10}px`
//     console.log(box);
//   }

//   if (refCountBox.value !== "") {
//     refCountBox.value = "";
//   }

//   console.log(arrBox);
//   const refAllBox = document.querySelectorAll(".divStyleBox");
//   console.log(refAllBox);
//   refAllBox.forEach(function (refAllBox) {
//     refAllBox.remove();
//   });
//   refBody.append(...arrBox);
// });

// refBtnDestroy.addEventListener("click", function () {
//   const refAllBox = document.querySelectorAll(".divStyleBox");
//   console.log(refAllBox);
//   refAllBox.forEach(function (refAllBox) {
//     refAllBox.remove();
// arrBox = [];
//   });
// });

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// console.log(arrBox);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreateEl = document.querySelector("button[data-create]");
console.log(btnCreateEl);
const btnDestrEl = document.querySelector("button[data-destroy]");
console.log(btnDestrEl);
const divEl = document.querySelector("#boxes");
console.log(divEl);
const inputEl = document.querySelector('input[type="number"]');
console.log(inputEl);
const arrDiv = [];

inputEl.addEventListener("input", (event) => {
  const value = event.target.value;
  if (value > 100 || value < 0) {
    event.target.value = 0;
  }

  btnCreateEl.addEventListener("click", () => {
    for (let i = 0; i < inputEl.value; i += 1) {
      let divSize = 30;
      arrDiv.push(document.createElement("div"));
      arrDiv[i].style.width = `${divSize + i * 10}px`;
      arrDiv[i].style.height = `${divSize + i * 10}px`;
      arrDiv[i].style.backgroundColor = getRandomHexColor();
    }
    divEl.append(...arrDiv);
  });

  btnDestrEl.addEventListener("click", () => {
    divEl.innerHTML = "";
  });
});


