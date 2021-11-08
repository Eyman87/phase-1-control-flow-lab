 function scuberGreetingForFeet(feet){
      if (feet <=400) {
        return 'This one is on me!'
        scuberGreetingForFeet = true
    } else if (feet >2500)
        return 'No can do.'
       else (feet >=2000,2499)
        return 'I will gladly take your thirty bucks.'
  }        
      

function ternaryCheckCity(city){
  return city == 'NYC'? 'Ok, sounds good.':'No go.'
}

function switchOnCharmFromTip(tip){
 switch (tip){
   case "generous":
     return 'Thank you so much.'
    case "not as generous":
      return 'Thank you.'
    default:
      return 'Bye.'
 }
}