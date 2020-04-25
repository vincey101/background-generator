// const first = () => {
//     const greet = "Hi";
//     const second = () => {
//         alert(greet);
//     }
//     return second;
// }

// let newFunc =first();
// newFunc();
    

// class Player {
//     constructor (name, type){
//         console.log('player', this);
//         this.name = name;
//         this.type = type;
//     }
//     introduce(){
//         console.log(`Hi i am ${this.name}, I'm a ${this.type}`)
//     }
// }
// class Wizard extends Player {
//     constructor(name, type){
//         super(name, type)
//         console.log('wizard', this);
//     }
//     play(){
//         console.log(`WEEEEEE I'm a ${this.type}`);
//     }
// }

// const wizard1 = new Wizard('shelly','Healer');
// const wizard2 = new Wizard('shawn','black magician');

// const name = "seun"
// const age = 34
// const pet = "cat"
// const sentence = `hey there i'm ${name}, i'm ${age-10} and i have a lovely ${pet}`

// function greet(name='', age=30, pet='cat') {
//     return `hey there i'm ${name}, i'm ${age-10} and i have a lovely ${pet}`
// }


// function moveCommand(direction) {
//     var whatHappens;
//     switch (direction) {
//         case "forward":
//             whatHappens = "you encounter a problem"
//             break;
//         case "back":
//             whatHappens = "you are back home"
//             break;
//         case "left":
//             whatHappens = "you saw a river"
//             break;
//         case "right":
//             whatHappens = "you climb a tree"
//             break;
//         default:
//             whatHappens = "enter valid direction"
//             break;
//     }
//     return whatHappens
// }


// function isUserValid(bool) {
//     return bool;
// }
// var answer = isUserValid(true) ? "you may enter" : "access denied";


// var fun = 5;

// function funy() {
//     var fun = "hello";
//     console.log(1, fun);
// }

// function funer() {
//     var fun = "bye";
//     console.log(2, fun);
// }

// function funnest() {
//     fun = "i would be back";
//     console.log(3, fun);
// }

// console.log("window", fun);
// funy();
// funer();
// funnest();

// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2")
// var body = document.getElementById("gradient")

// function setGradient() {
//     body.style.background = "linear-gradient(to right,"+color1.value+", "+color2.value+")"

//     css.textContent = body.style.background
// };

// color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient);


// var button = document.getElementById("enter");
// var input = document.getElementById("user input");
// var ul = document.querySelector("ul");

// function inputLength() {
//     return input.value.length
// }

// function createListElement() {
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
//     input.value = "";
// }

// function addListAfterclick() {
//     if (inputLength() > 0) {
//         createListElement()
//     }
// }

// function addListAfterKeypress(event) {
//     if (inputLength() > 0 && event.keyCode == 13) {
//         createListElement()
//     }
// }


// button.addEventListener("click", addListAfterclick)
// input.addEventListener("keypress", addListAfterKeypress)


// var database = [
//     {
//         username:"vincent",
//         password:"breitling"
//     },
//     {
//         username:"sally",
//         password:1234
//     },
//     {
//         username:"andrei",
//         password:"bat"
//     }
// ];

// var newsFeed = [
//     {
//         username:"vincent",
//         feed:"i am so happy today"
//     },
//     {
//         username:"sally",
//         feed:"one man for himself"
//     },
//     {
//         username:"mitch",
//         feed:"i can be anything i want"
//     }
// ];

// function logIn(username, password) {
//     for (let i = 0; i < database.length; i++) {
//         if(database[i].username == username && database[i].password) {
//             return true;      
//         }
//     }
//     return false;
// }

// function signIn(username,password) {
//     if (logIn(username, password)) {
//         console.log(newsFeed);
//     }else {
//         alert("sorry,wrong username and password");
//     }

// }
// var usernamePrompt = prompt("what's your username?");
// var passwordPrompt = prompt("what's your password?");

// signIn(usernamePrompt, passwordPrompt);