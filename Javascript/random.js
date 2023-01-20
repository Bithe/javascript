const suites=Math.random();
const suite=Math.random()*4;

const rank=Math.floor(Math.random()*13)+1;

//console.log(suite);

let suiteSymbol;

if(suite===0){
    suiteSymbol='\u2665';
}

else if(suite===1){
    suiteSymbol='\u2666';
}

else if(suite===0){
    suiteSymbol='\u2660';
}

else{
    suiteSymbol='\u2663';
}

console.log(`${suiteSymbol} ${rank}`);
