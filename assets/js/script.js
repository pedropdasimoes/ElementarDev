


const elements = document.getElementsByClassName('gnTitle');

for (let i = 0; i<=elements.length; i++)
{
    setTimeout(() => {
        elements[i].classList.remove('hidden')
    }, 100 *i);

    elements[i].addEventListener('animationend',function(e){
        elements[i].classList.remove('animated');
        elements[i].classList.remove('animate__bounceIn');
    });

    elements[i].addEventListener('mouseover',function(e){
        elements[i].classList.add('animated')
    })
}


