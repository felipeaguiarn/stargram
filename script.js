

let dark = document.getElementById("dark");

dark.addEventListener('click', 

function darkmode (){
let bg = document.getElementById('body');
bg.style.backgroundColor = "black";
bg.style.color = "white";
bg.style.border = "gray";

let log = document.querySelector("#logo");
log.setAttribute('src', './img/stargram-white.png');

let picture = document.getElementById('group');
picture.style.backgroundColor = "black";

let login = document.getElementById('login');
login.style.backgroundColor = "gray";
login.style.color = "white";

document.getElementById('login').innerHTML = "Continue como darthvader";

let logout = document.getElementById('logout');
logout.style.color = "white";

let bg2 = document.getElementById('group2');
bg2.style.backgroundColor = "black";

var profile = document.querySelector("#profile");
profile.setAttribute('src', './img/DARTH.jpg');

})

var btn = document.querySelector("#refresh");
btn.addEventListener("click", function() {
    
    location.reload();
});




// let white = document.getElementById("white");

// white.addEventListener('click', function(){
//     let y = document.getElementById('body');
//     y.style.backgroundColor = "red";


// })


let voltar = document.getElementById("white");
voltar.addEventListener('click',
function back() {
    document.getElementById("body").reset();
  }
)


