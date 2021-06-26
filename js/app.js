"use strict"

let Name = prompt('could you tell us your name please')

function $welcoming(){
    
    alert('Welcom to our site'+' '+Name)
}
$welcoming();








let scoor = 0
let  catPerson = prompt  ('do you think i\'m a cat person' , 'Answer with yes or no')

function $ques1(){

    switch (catPerson.toLowerCase()){
        case('yes'):
        case ('y'):
         alert('yes they are very cute');
         ++scoor;
         break;
         
         
         case('no'):
         case('n'):
         alert('no!!!! the are the cutest');
         break ;
         
         
        }
}
    $ques1();
    console.log(catPerson)
    
    



let $ques2 = function(){

    let programing = prompt('do you think i like programing')
    switch (programing.toLowerCase()){
        case('yes'):
        case('y'):
        ++scoor;
        alert('yes . i doo');
        break;
        
        case('no'):
        case('n'):
        alert('too bad i like it alot');
        break;
    }

} 
$ques2();

    
let $ques3 = function(){
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
    }
    $ques3();


    
let $ques4 = function(){

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
}
$ques4();

let $ques5 = function(){

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
} 
$ques5();


let $ques6 = function(){

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
        else if (guessNumber == number){
            alert('great guess');
            ++scoor
            break;
      
            
        }
        
    }
    
    
    alert(' the secrete number is' + ' ' + guessNumber);
    

}
$ques6();




let $ques7 = function(){

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
                ++scoor
                break fruitQus;
                
            } 
                
         }
         alert('try another one');
     }
        
    

 alert('my favorite fruit is' +' '+ guessFruit)
}
$ques7();
 
 console.log(scoor);
alert(Name+ ' your score is ' +scoor);

