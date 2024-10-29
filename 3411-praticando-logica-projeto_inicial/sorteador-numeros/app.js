let numbers = [];
let values =[];
let quantidade, de, ate;

function play(){
    values = check();
    console.log(values);
    sortear(values);
}
function check(){
    let quantidade = document.getElementById('quantidade').value;
    let de = document.getElementById('de').value;
    let ate = document.getElementById('ate').value;
    
    if(de >= ate){
        alert(`The values are not propely ordered, but don't worry, I got you this time`);
        let deAte = de;
        de = ate;
        ate = deAte;
    }

    if(ate - de+1 < quantidade){alert(`I cannot find ${quantidade} numbers between ${de} and ${ate}\nplease select a new values`);
}
    
    return [quantidade, de, ate]; 
}


function sortear(values){
    quantidade = values[0];
    de = values[1];
    ate = values[2];
    

    while(quantidade>numbers.length){
        let randomNumber = parseInt(Math.random() * ate +1);
        if(randomNumber >= de && randomNumber<= ate && !numbers.includes(randomNumber)){
            
            //alert(`Random Number = ${randomNumber}`); 
            
            numbers.push(randomNumber);
            console.log(numbers);
        }else{sortear(values);}
    }
    displayText('label',`Numbers = ${numbers}`);
        
}


function reiniciar(){
    numbers =[];
    //console.log(numbers);
}

function displayText(tag , text){
    let field = document.getElementById('resultado');
    field.innerHTML = text;
}

function startingText(){
    displayText('label','Números sorteados:  nenhum até agora')
}

startingText();