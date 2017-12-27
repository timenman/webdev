console.log("printReverse()");

var numbers = [1,2,3,4];

console.log(numbers);

for (i= (numbers.length-1); i >= 0; i--){
  console.log(numbers[i]);
}

console.log("isUniform()");

var test1 = [1,1,1,1];
var test2 = [1,5,6,1];
var test3 = [1,2,3,4,5];

isUniform(test1);
isUniform(test2);

isMax(test2)

sumArray(test1)
/*
test1.forEach(function(e,i){
  if(i > 0){
    var result = test1[i-1];
    }

      else{
      result = e;
      }
  if (result !== e){
    console.log("false");
    return false;
  }

  if (i === (test1.length-1)){
      console.log("true");
      return true;
  }
});
*/

function isUniform(arr){
  for(i=0; i<arr.length; i++){
    if(i !== 0){
      var result = arr[i-1];
      }
        else{
        result = arr[i];
        }
    if (result !== arr[i]){
      console.log("false");
      return false;
      {break;}
    }

    if (i === (arr.length-1)){
        console.log("true");
        return true;
    }
  }
};


function isMax(arr){
  for(i=0; i < arr.length; i++){

    if(i === 0){
      var result = arr[i];
    }
    else {
      if (result < arr[i]){
        result = arr[i];
      }
    }
    if (i === arr.length-1){
      if (arr[i] >= result){
      console.log("Max is "+arr[i]);
    }
      else if (result >= arr[i]){
        console.log("Max is "+result);
      }
    }
 };
};
    /*
    if(i !== 0){
      var result = arr[i-1];
      }
        else{
        result = arr[i];
        }
    if (result < arr[i]){
        result = arr[i];
    }
      if (arr[i] === (arr.length-1)){ //mistake here, should be i not arr[i]
        if (result >= arr[i]){
        console.log("Max is "+result);
        }
        else {
          console.log("Max is "+arr[i])
                }
  }
 }
};
*/
function sumArray(arr){
  var sum
  arr.forEach(function(e,i){
    if (i === 0){
    sum = e;
    }

    else {sum = sum + e}

    if(i === (arr.length-1)){
      console.log("Sum of elements in array is: "+sum)
    }
});
}


/*
function isUniform(arr){
  arr.forEach(function(e,i){
    if(i > 0){
      var result = arr[i-1];
      }

        else{
        result = e;
        }
    if (result !== e){
      console.log("false");
      return false;
      {break;}
    }

    if (i === (arr.length-1)){
        console.log("true");
        return true;
    }
  });

}

test1.forEach(function(e,i){
  if (i === 0){
  var result = e;
  }
  else if (result !== e){
    console.log("false");
    return false;
  }
  else if(i === test1.length-1 && result === e){
    console.log("true");
    return true;
  }
});
*/
