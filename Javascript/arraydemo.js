let numbers, resultString='';
sum=0;
for(let i=0;i<4;i++){
    sum+=numbers[i];
    resultString+=numbers[i]+' + ';
}
console.log(resultString+' = '+sum);