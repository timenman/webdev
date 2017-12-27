function isEven(x){
  return x % 2 === 0
}

function factorial2(x){
  /*if(x = 0){
    return 1;
  }
  else if (x < 0){
    return "No negatives.";
  }

  else*/ for (i=x; i>=1; i--){
    var factorial = x;
    factorial = factorial*i;
    }
    return factorial;
}
  /*else for(i=x, i>1, i--){
    if(x<0){
      return "No negatives please."
    }
    else()
  }

}
*/
function kebabToSnake(str){
  str = str.replace("-","_");
  return str;
}
