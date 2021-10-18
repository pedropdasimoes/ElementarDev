(function readyJS(win,doc){
    'use strict';

    let btn=doc.querySelector("#hamburguer");
    let menu=doc.querySelector(".navBar");
    let corChange=doc.getElementById("colorChange");

    function toggle(event) {
        if(corChange.classList.contains("activeColor")){            
            corChange.classList.remove("activeColor")
        }else{
            corChange.classList.add("activeColor")
        }
        if(menu.classList.contains("activeNav")){
            menu.classList.remove("activeNav")
        }else{
            menu.classList.add("activeNav")
        }
        
    }



    btn.addEventListener("click",toggle, false);


    var a = document.querySelectorAll("#aNavBar");
    for(var i = 0; i < a.length; i++){
        a[i].addEventListener('click', () =>  {
            menu.classList.remove("activeNav");
        });
    }






})(window, document);