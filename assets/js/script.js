
    let elements = document.getElementsByClassName('gnTitle');

    for (let i = 0; i<=elements.length; i++)
    {
        if(elements){
            elements[i].addEventListener('animationend',function(e){
                elements[i].classList.remove('animated');
            });

            elements[i].addEventListener('mouseover',function(e){
                elements[i].classList.add('animated')
            });
        }
    }
