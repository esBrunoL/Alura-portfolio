
function alterarStatus(i){
    let game= document.getElementById("game-"+i);
    let img = game.querySelector('.dashboard__item__img');
    let btn = game.querySelector('.dashboard__item__button');
    let gameName = game.querySelector('.dashboard__item__name');

    if(btn.className.match("dashboard__item__button dashboard__item__button--return")){
        btn.className="dashboard__item__button";
        btn.textContent="Alugar";

        img.className = "dashboard__item__img"
        alert(`Thank you for returning ${gameName.textContent}`);
        

    }else{
        btn.className="dashboard__item__button dashboard__item__button--return"
        btn.textContent="Devolver";

        img.className ="dashboard__item__img dashboard__item__img--rented"
        alert(`Enjoy ${gameName.textContent}`);

    }

}
