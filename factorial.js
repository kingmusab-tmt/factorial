let sum = 0;
let arrValue = [];
for(value = 5; value >0; value --){
    let i = value;
    arrValue.push(i); 
}
console.log(arrValue);
for (let i = 0; i < 5; i++) {
    sum += arrValue[i];
}
console.log(sum);
