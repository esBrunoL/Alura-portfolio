let numbers = [];
let values =[];
let quantidade, de, ate;

function play(){
    values = check();
    console.log(values);
    sortear(values);
}
function check(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if(de >= ate){
        alert(`The values are not propely ordered, but don't worry, I got you this time`);
        let deAte = de;
        de = ate;
        ate = deAte;
    }
    if(ate - de+1 < quantidade){
        alert(`I cannot find ${quantidade} numbers between ${de} and ${ate}\nplease select a new values`);
        quantidade = 0;
        return;
}
    
    return [quantidade, de, ate]; 
}


function sortear(values){
    quantidade = values[0];
    de = values[1];
    ate = values[2];
    

    while(quantidade>numbers.length){
        
        let randomNumber = Math.floor(Math.random() * (ate - de + 1) + de);
        if(!numbers.includes(randomNumber)){
            numbers.push(randomNumber);
            console.log(numbers);
        }else{sortear(values);}
    }
    displayText('label',`Numbers = ${numbers}`);
        
}


function reiniciar(){
    numbers =[];
    displayText = ('label','')
}

function displayText(tag , text){
    let field = document.getElementById('resultado');
    field.innerHTML = text;
}

function startingText(){
    displayText('label','Números sorteados:  nenhum até agora')
}

startingText();