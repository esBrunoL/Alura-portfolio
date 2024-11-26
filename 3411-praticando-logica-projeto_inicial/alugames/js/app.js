
function alterarStatus(i){
    var btn = document.getElementById(i);
    
    var img = document.getElementById("img-"+i);

    if(btn.className.match("dashboard__item__button dashboard__item__button--return")){
        btn.className="dashboard__item__button";
        btn.textContent="Alugar";

        img.className = "dashboard__item__img"

        

    }else{
        btn.className="dashboard__item__button dashboard__item__button--return"
        btn.textContent="Devolver";

        img.className ="dashboard__item__img dashboard__item__img--rented"


    }

}
