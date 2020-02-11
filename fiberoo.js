//Return the first 50 Fib numbers and sum
function fib(){
  let a1 = 0;
  let a2 = 1;
  let current = 0;
  let sum = 0;
  let list = [];

  for(let i = 0; i < 51; i++){
    current = a1 + a2;
    a1 = a2;
    a2 = current;
    list.push(current);
  }
  return list;
}

console.log(fib());

function numsToStrings(fib()){
  _.map(list, function(num){return num++});
}