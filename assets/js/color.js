function myFunction(x) {
    if (x.matches) { // If media query matches
        document.getElementById('buttonColor1').addEventListener('click', () => {
            document.body.style.setProperty('--color-main', '#21e5f3');
        });
        document.getElementById('buttonColor2').addEventListener('click', () => {
            document.body.style.setProperty('--color-main', '#44f321');
        });
        document.getElementById('buttonColor3').addEventListener('click', () => {
            document.body.style.setProperty('--color-main', '#f32195');
        });
        document.getElementById('buttonColor4').addEventListener('click', () => {
            document.body.style.setProperty('--color-main', '#f0f321');
        });
        document.getElementById('buttonColor5').addEventListener('click', () => {
            document.body.style.setProperty('--color-main', '#ff0000');    
        });
        console.log('tela menor');
    } else {
        document.getElementById('buttonColor1').addEventListener('click', () => {
            document.body.style.setProperty('--color-main', '#21e5f3');
            document.getElementById('colorChange').classList.remove('heightColor');
        });
        document.getElementById('buttonColor2').addEventListener('click', () => {
            document.body.style.setProperty('--color-main', '#44f321');
            document.getElementById('colorChange').classList.remove('heightColor');
        });
        document.getElementById('buttonColor3').addEventListener('click', () => {
            document.body.style.setProperty('--color-main', '#f32195');
            document.getElementById('colorChange').classList.remove('heightColor');
        });
        document.getElementById('buttonColor4').addEventListener('click', () => {
            document.body.style.setProperty('--color-main', '#f0f321');
            document.getElementById('colorChange').classList.remove('heightColor');
        });
        document.getElementById('buttonColor5').addEventListener('click', () => {
            document.body.style.setProperty('--color-main', '#ff0000');    
            document.getElementById('colorChange').classList.remove('heightColor');
        });
        
        document.querySelector('.btnChangeColor').addEventListener('click', () => {
            if(document.getElementById('colorChange').classList.contains('heightColor')){
                document.getElementById('colorChange').classList.remove('heightColor')
            }else{
                
                document.getElementById('colorChange').classList.add('heightColor')
            }
        });
        console.log('tela Maior'); 
    }
  }
  
  var x = window.matchMedia("(max-width: 750px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes
