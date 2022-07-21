const month = "July";
var day = "Thursday";
let  year = 2022;
console.log(month)
console.log(day)
console.log(year)

year = year + 1

console.log(day)
console.log(year)
day += "and Saturday"

var Gitler =  document.getElementById("Gitler")

setInterval(function (){
    var date = new Date() 
    var currentime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    Gitler.innerHTML = currentime 
}, 1000)

var frostnumber = document.getElementById("Gitler2")
var Secondsnumber = document.getElementById("Gitler3")
var calculateButton = document.getElementById("calculate")
var resault = document.getElementById("result")
 calculateButton.addEventListener("click", function name(){
   resault.innerHTML = parseInt(frostnumber.value) 
   + parseInt(Secondsnumber.value)
 })