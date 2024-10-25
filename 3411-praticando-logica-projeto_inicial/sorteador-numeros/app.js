let numbers = [];


function sortear(){
    let quantidade = document.getElementById('quantidade').value;
    let de = document.getElementById('de').value;
    let ate = document.getElementById('ate').value;

    
    //alert(`Quantidade = ${quantidade}\nDe = ${de}\nAte = ${ate}`);
   
    //console.log(de,ate);
    if(de >= ate){
        alert(`The values are not propely ordered, but don't worry, I got you this time`);
        let deAte = de;
        de = ate;
        ate = deAte;
        //console.log(de,ate);
    }

    if(ate - de < quantidade){alert(`I cannot find ${quantidade} numbers between ${de} and ${ate}\nplease select a new values`); return;}

    
    while(quantidade>numbers.length){
        let randomNumber = parseInt(Math.random() * ate +1);
        if(randomNumber >= de && randomNumber<= ate && !numbers.includes(randomNumber)){
            
            //alert(`Random Number = ${randomNumber}`); 
            
            numbers.push(randomNumber);
            console.log(numbers);
        }else{sortear();}
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