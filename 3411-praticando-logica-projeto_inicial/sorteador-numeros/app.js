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
    displayText(`<label class="texto__paragrafo"> Numbers = ${numbers}</label>`);

    buttomStatus();        
}
function buttomStatus(){
    let buttom = document.getElementById('btn-reiniciar');
    if(buttom.classList.contains('container__botao-desabilitado')){
        buttom.classList.remove('container__botao-desabilitado');
        buttom.classList.add('container__botao');
    }else{
        buttom.classList.remove('container__botao');
        buttom.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    numbers =[];
    buttomStatus();
    displayText(`<label class="texto__paragrafo"> Let's try again!</label>`);
    cleanSite('quantidade');
    cleanSite('de')
    cleanSite('ate')
}

function cleanSite(id){
    let clean = document.getElementById(id);
    clean.value = '';  
}

function displayText(tag){
    let field = document.getElementById('resultado');
    field.innerHTML = tag;
}
