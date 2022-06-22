//* shift boshidan udalit qil
//* unshift boshiga qo'sh
//* pop oxiridan udalit qil
//* push oxiriga qo'sh
//*
//*
// const ismInputi = document.getElementById("ism");
// const famInputi = document.getElementById("fam");
// const telInputi = document.getElementById("tel");
// const btn = document.getElementById("btn");

// const users = [];

// btn.addEventListener("click", function () {
//   users.unshift(ismInputi.value);
// })
//
//
// const ismInputi = document.getElementById("ism");
// const list = document.getElementById("list");
// const btn = document.getElementById("btn");

// btn.addEventListener("click", function () {
//   const li = document.createElement("li");
//   const udalitBtn = document.createElement("button");
//   udalitBtn.textContent = "Udalit";
//   udalitBtn.addEventListener("click", () => {
//     li.remove();
//   });
//   li.textContent = `${ismInputi.value}`;
//   li.append(udalitBtn);
//   list.append(li);
// });

// document.body.addEventListener("mouseover", (e) => {
//   console.log("bosildi", e);
//   if (e.key === "Enter") {
//     document.body.style.backgroundColor = "blue";
//   } else {
//     document.body.style.backgroundColor = "red";
//   }
// });

//

//
const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function (enet) {
  jump();
});
function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");
  }
  setTimeout(function () {
    dino.classList.remove("jump");
  }, 300);
}
let isAlive = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    alert("GAME OVER!!!  " + " " + " " + " " + " " + "   REFRESH");
  }
}, 10);
