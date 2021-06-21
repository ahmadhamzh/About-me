"use strict"

let Name = prompt('could you tell us your name please')
alert('Welcom to our site'+' '+Name)

let adv = 0
let dis = 0

let  work = prompt  ('do you have a jop')

switch (work.toLowerCase()){
    case('yes'):
     alert('wiche you all the best in your jop');
     ++adv;
     break;
     
    case ('y'):
        alert('wiche you all the best in your jop');
        ++adv;
        break;


    case('no'):
        alert('hope you find one soon');
        ++dis;
        break ;
    case('n'):
        alert('hope you find one soon');
        ++dis;
        break ;

        
    }
    console.log(work)

        

    
    
    let programing = prompt('do you like programing')

    switch (programing.toLowerCase()){
        case('yes'):
         alert('great we have that in common');
         break;

        case('y'):
         alert('great we have that in common');
         break;

        case('no'):
         alert('too bad i like it alot');
         break;
         
         case('n'):
          alert('too bad i like it alot');
          break;
   
    }
    console.log(programing)

    let football = prompt('do you like to watch football')
    
    switch (football.toLowerCase()){
        case('yes'):
        alert('football is the best sport ever');
        break;
        
        case('y'):
        alert('football is the best sport ever');
        break;
        
        case('no'):
        alert('you\'r kidding it\'s the best sport ever');
        break;

        case('n'):
        alert('you\'r kidding it\'s the best sport ever');
        break;
    }

    console.log(football)
    
    let egame = prompt('do you like computer game')

switch (egame.toLowerCase()){
    case('yes'):
     alert('i\'m addicted to them');
     break;
     
     case('y'):
      alert('i\'m addicted to them');
      break;
      
      case('no'):
       alert('i cant live without computer game');
       break;
       
       case('n'):
        alert('i cant live without computer game');
        break;
}

let movies = prompt('do you like movies')

switch (egame.toLowerCase()){
    case('yes'):
     alert('i\'m not a fan of them');
     break;
     
     case('y'):
      alert('i\'m not a fan of them');
      break;

     case('no'):
      alert('me too');
      break;

     case('n'):
      alert('me too');
      break;
}