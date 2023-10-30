let num1,num2,num3,press;

alert("Welcome to calculator enter your option")

press = prompt(" Press 1 for add,"+
" Press 2 for subtract,"+
" press 3 for multiply,"+
" press 4 for divide,")

function add (num1,num2,num3){
   num1 = prompt("Enter number 1")
   num2 = prompt("Enter number 2")
   num3 = Number(num1)+Number(num2)
   alert("Hi your addition of " + num1 + "add " + num2 +" is" + num3)
}

function sub (num1,num2,num3){
    num1 = prompt("Enter number 1")
    num2 = prompt("Enter number 2")
    num3 = Number(num1)-Number(num2)
    alert("Hi your subtraction of " + num1 + "add " + num2 +" is" + num3)
 }

 function multiply (num1,num2,num3){
    num1 = prompt("Enter number 1")
    num2 = prompt("Enter number 2")
    num3 = Number(num1)*Number(num2)
    alert("Hi your multiply of " + num1 + "add " + num2 +" is" + num3)
 }

 function divide (num1,num2,num3){
    num1 = prompt("Enter number 1")
    num2 = prompt("Enter number 2")
    num3 = Number(num1)/Number(num2)
    alert("Hi your dvision of " + num1 + "add " + num2 +" is" + num3)
 }

if(press==1){
    alert("You have select add")
    add()
}
else if(press==2)
{
    alert("you have select subtract")
    sub()
}
else if (press==3)
{
    alert("you have selected multiply")
    multiply()
}
else if (press==4){
    alert("you have selected divide")
    divide()
}

else {
    alert("sorry invalid option refresh page try again")
}
