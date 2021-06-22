"use strict"

let Name = prompt('could you tell us your name please')
alert('Welcom to our site'+' '+Name)

let scoor = 0


let  catPerson = prompt  ('do you think i\'m a cat person')

switch (catPerson.toLowerCase()){
    case('yes'):
    case ('y'):
     alert('yes the are very cute');
     ++scoor;
     break;
     
     
     case('no'):
     case('n'):
     alert('no!!!! the are the cutest');
     break ;
     
     
    }
    console.log(catPerson)
    
    
    let programing = prompt('do you think i like programing')
    
    switch (programing.toLowerCase()){
        case('yes'):
        case('y'):
        alert('yes . i doo');
        ++scoor;
        break;
        
        case('no'):
        case('n'):
        alert('too bad i like it alot');
        break;
        
        
    }
    console.log(programing)
    
    let football = prompt('do you think i like to watch football')
    
    switch (football.toLowerCase()){
        case('yes'):
        case('y'):
        alert('true . football is the best sport ever');
        ++scoor;
        break;
        
        
        case('no'):
        case('n'):
        alert('wrong . it\'s the best sport ever');
        break;

        
    }
    
    console.log(football)
    
    let egame = prompt('do you think i like computer games')
    
    switch (egame.toLowerCase()){
        case('yes'):
        case('y'):
        alert(' yep . i\'m addicted to them');
        ++scoor;
        break;
        
        
        
        case('no'):
      case('n'):
      alert('you can\'t be more wrong .i cant live without computer game');
       break;
       
    }
    console.log(egame)

    let movies = prompt('do you think i like movies')
    
    switch (movies.toLowerCase()){
        case('yes'):
    case('y'):
    alert('i\'m not a fan of them but i watch some i will conseder it rghit answer');
    ++scoor;
    break;
    
    
    case('no'):
    case('n'):
    alert('i watch some but naaa i dont like them alot , rghit answer');
    ++scoor;
      break;

      }
      console.log(movies)


let guessNumber = Math.floor(Math.random() *10)
console.log(guessNumber)
let number = prompt('guess the secret number , between 0-10')

for (let i = 0; i < 3; i++){
    
    
    
    if (guessNumber < number){
        number = prompt('try a lower number' );
        
        
    }
    else if (guessNumber > number){
        number = prompt('try a higher number' );
        
    } 
    else if (guessNumber = number){
        alert('great guess')      
        break;
    }
}

if (guessNumber != number){
    alert('wrong guess the secrete number is' + ' ' + guessNumber);
};


let guessFruit = ['melon','banana','peach','orange','red cherry','apple']

console.log(guessFruit)
let att = 6
let fruit 
 fruitQus :while(att){

     fruit = prompt('can you guess one of my favorite fruit')
     att = att - 1;
    

    
    for (let i = 0; i < guessFruit.length; i++){
        
        
        if (fruit == guessFruit[i]){

            alert('great guess'); 
            
            break fruitQus;
            
        } 
            
     }
     alert('try another one');
 }
    

 alert('my favorite fruit is' +' '+ guessFruit)
 
 console.log(scoor);
alert('your score is '+ ' ' + scoor)




