let header1 = document.querySelector('h1');
header1.innerHTML = 'Welcome to lobo`s mart';

function addNew(){
    let name = prompt(`Enter the name of the product to be added to your wish list`);
    let price = prompt(`Enter the price of ${name}: `)
    

}
function alertLove(){
    alert('I love JS');
}
 
function cityAlert(){
    let city =prompt("Which city are you from ?");
    alert(`I went to ${city} and remembered you`);
}

function sum(){
    let x = parseInt(prompt("Tell me the first numnber :"));
    let y = parseInt(prompt("Tell me the second number :"));    
    alert(`The sum is ${x+y}`);
}