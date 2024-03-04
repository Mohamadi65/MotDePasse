//  définissons des variables

var myInput=document.getElementById('psw');
var letter=document.getElementById('letter');
var capital=document.getElementById('capital');
var number=document.getElementById('number');
var length=document.getElementById('length');

// lorsque l'utilisateur clique dans le champ de mot de passe
myInput.addEventListener('focus',(e)=>{
    e.preventDefault();
    document.getElementById("message").style.display="block";
})

//  lorsque l'utilisation clique en dehors du champ de mot de passe
myInput.addEventListener('blur',()=>{
    document.getElementById("message").style.display="none";
})

/*  lorsque l'utilisateur commence a taper quelque chose dans le champ mot de passe */
myInput.addEventListener('keyup',()=>{
    // valider les lettres minuscule
    var lowercaseLetters= /[a-z]/g
    if(myInput.value.match(lowercaseLetters)){
        // si le mot de passe contient une lettre minuscule, enlever la classe
        // "invalid et ajouter la classe valid"
        letter.classList.remove('invalid');
        letter.classList.add('valid');

    }else{
        letter.classList.remove('valid');
        letter.classList.add('invalid');

    }

    //  valider les lettres majuscules
    var uppercaseLetters= /[A-Z]/g
    if(myInput.value.match(uppercaseLetters)){
        // si le mot de passe contient une lettre minuscule, enlever la classe
        // "invalid et ajouter la classe valid"
        capital.classList.remove('invalid');
        capital.classList.add('valid');

    }else{
        capital.classList.remove('valid');
        capital.classList.add('invalid');

    }

    //  valider les nombres
   
    var numbers= /[0-9]/g
    if(myInput.value.match(numbers)){
        // si le mot de passe contient une lettre minuscule, enlever la classe
        // "invalid et ajouter la classe valid"
        number.classList.remove('invalid');
        number.classList.add('valid');

    }else{
        number.classList.remove('valid');
        number.classList.add('invalid');

    }

    // valider la longueur
    
    if(myInput.value.length>=8){
        
        length.classList.remove('invalid');
        length.classList.add('valid');

    }else{
        length.classList.remove('valid');
        length.classList.add('invalid');

    }
})
