console.log("Hello out there!");

let firstName = "Martin";
let lastName = "O'Driscoll";
let myAge = "39";

console.log(firstName, lastName, myAge);

let mySkills = ["HTML", "CSS", "JavaScript"];

mySkills [0] = "Windows 10";
mySkills [3] = "Android User";

console.log(mySkills);

let name = {
    first: firstName,
    last: lastName,
    age: myAge,
    skills: mySkills
}

console.log(name);
console.log(name.last);

name.nickname = "Tan";
name.skills [3] = "Fixer";

let jumpToTop = document.getElementById("jumptotop");

function topFunction() {
    document.documentElement.scrollTop = 0;
}