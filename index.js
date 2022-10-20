let question = document.querySelector(".res")
let first =[] 
let eva = ''
let realAns = ""
let extra = document.querySelector(".extra")
const onebtn = document.querySelector(".one")
const otherResult = document.createElement("div")
let back = document.querySelector(".back")
onebtn.addEventListener("click", function(){
    question.classList.remove("res-show")
    const one = 1
    first.push(one)
    for (let i = 0; i < first.length; i++) { 
       unknown = first[i]
    }  
    otherResult.textContent += unknown 
    console.log(otherResult.textContent)
    question.textContent+= unknown 
})
const twobtn = document.querySelector(".two")
twobtn.addEventListener("click", function(){
    question.classList.remove("res-show")
    const two = 2
    first.push(two)
    for (let i = 0; i < first.length; i++) {
        unknown = first[i]
    }
    otherResult.textContent += unknown 
    question.textContent += unknown
})
const threebtn = document.querySelector(".three")
threebtn.addEventListener("click", function(){
    question.classList.remove("res-show")
    const three = 3
    first.push(3)
    for (let i = 0; i < first.length; i++) {
        unknown = first[i]
    }
    otherResult.textContent += unknown 
    question.textContent += unknown
})
const fourbtn = document.querySelector(".four")
fourbtn.addEventListener("click", function(){
    question.classList.remove("res-show")
    const four = 4
    first.push(4)
    for (let i = 0; i < first.length; i++) {
        unknown = first[i]
    }
    otherResult.textContent += unknown 
    question.textContent += unknown
})
const fivebtn = document.querySelector(".five")
fivebtn.addEventListener("click", function(){
    question.classList.remove("res-show")
    const five = 5
    first.push(5)
    for (let i = 0; i < first.length; i++) {
        unknown = first[i]
    }
    otherResult.textContent += unknown 
    question.textContent += unknown
})
const sixbtn = document.querySelector(".six")
sixbtn.addEventListener("click", function(){
    question.classList.remove("res-show")
    const six = 6
    first.push(6)
    for (let i = 0; i < first.length; i++) {
        unknown = first[i]
    }
    otherResult.textContent += unknown 
    question.textContent += unknown
})
const sevenbtn = document.querySelector(".seven")
sevenbtn.addEventListener("click", function(){
    question.classList.remove("res-show")
    const seven = 7
    first.push(7)
    for (let i = 0; i < first.length; i++) {
        unknown = first[i]
    }
    otherResult.textContent += unknown 
    question.textContent += unknown
})
const eightbtn = document.querySelector(".eight")
eightbtn.addEventListener("click", function(){
    question.classList.remove("res-show")
    const eight = 8
    first.push(8)
    for (let i = 0; i < first.length; i++) {
        unknown = first[i]
    }
    otherResult.textContent += unknown 
    question.textContent += unknown
})
const ninebtn = document.querySelector(".nine")
ninebtn.addEventListener("click", function(){
    question.classList.remove("res-show")
    const nine =9
    first.push(9)
    for (let i = 0; i < first.length; i++) {
        unknown = first[i]
    }
    otherResult.textContent += unknown 
    question.textContent += unknown
})
const zerobtn = document.querySelector(".zero")
zerobtn.addEventListener("click", function(){
    question.classList.remove("res-show")
    const zero =0
    first.push(0)
    for (let i = 0; i < first.length; i++) {
        unknown = first[i]
    }
    otherResult.textContent += unknown 
    question.textContent += unknown
})
const minus = document.querySelector(".minus")
let minusfunc = "-"
minus.addEventListener("click", function(){
    if(question.classList.contains("res-show")){
        otherResult.textContent += minusfunc
        question.classList.remove("res-show")
        eva = "Ans"
        question.textContent = eva
        question.textContent +=minusfunc
        
    }else{
    question.classList.remove("res-show")
    otherResult.textContent += minusfunc
    question.textContent +=minusfunc
    }
})
const times = document.querySelector(".times")
let timesfunc = "*"
times.addEventListener("click", function(){
    if(question.classList.contains("res-show")){
        otherResult.textContent += timesfunc
        question.classList.remove("res-show")
        eva = "Ans"
        question.textContent = eva
        question.textContent +=timesfunc
        
    }else{
    question.classList.remove("res-show")
    otherResult.textContent += timesfunc
    question.textContent +=timesfunc
    }
})
const add = document.querySelector(".add")
let addfunc = "+"
add.addEventListener("click", function(){
    if(question.classList.contains("res-show")){
        otherResult.textContent +=  addfunc
        question.classList.remove("res-show")
        eva = "Ans"
        question.textContent = eva
        question.textContent += addfunc
        
    }else{
    question.classList.remove("res-show")
    otherResult.textContent +=  addfunc
    question.textContent += addfunc
    }
})
const divide = document.querySelector(".divide")
let dividefunc = "/"
divide.addEventListener("click", function(){
    if(question.classList.contains("res-show")){
        otherResult.textContent +=  dividefunc
        question.classList.remove("res-show")
        eva = "Ans"
        question.textContent = eva
        question.textContent += dividefunc
        
    }else{
    question.classList.remove("res-show")
    otherResult.textContent +=  dividefunc
    question.textContent += dividefunc
    }
    
})
const equal = document.querySelector(".ans")
equal.addEventListener('click',function ok(){
    question.classList.add("res-show")
    if (eva === "Ans"){
        question.textContent = eval (otherResult.textContent)
    }else
    {
    eva = eval(question.textContent)
    realAns =eval(question.textContent)
   question.textContent = eva
    }
})
const clear = document.querySelector(".clear")
clear.addEventListener("click", function(){
     first =[]
     question.textContent = ""
     otherResult.textContent = ""
})
back.addEventListener("click", function(){
    console.log(question.textContent.charAt(2))
    question.classList.remove("res-show")
  let uyd = otherResult.textContent
  uyd = uyd.substring(0, uyd.length-1)
 otherResult.textContent=uyd
   uyd = question.textContent
   uyd = uyd.substring(0, uyd.length-1)
   question.textContent = uyd
//    if(question.textContent = "An"){ 
//     question.textContent = " "
//    }
   
   
})

