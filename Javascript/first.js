console.log('heloo');
const a =10;
console.log(a);
let b=20;
console.log(b);

let c =a+b;
console.log('c=',c);
const result= 'c= '+c;
console.log(result);
console.log('sum= '+a+b);
console.log('sum= '+(a+b));


console.log(`Result of ${a}+ ${b} is ${a+b}`);

console.log("jdcdjh 'bcdh' jbsajn");
console.log('nncn \'eueu\' nbn');
console.log('\u2663');

console.log(String.fromCodePoint('0x1F977'));
console.log(String.fromCodePoint('0x1F481'));
console.log(String.fromCodePoint('0x1F34D'));

const  [,, suite='?']=process.argv;
let suiteSymbol='?';
const suiteLowered = suite.toLowerCase();

//const suite ='x';


if( suite === 'hearts'){
    suiteSymbol = '\u2665';
}
else if(suite === 'diamond')
    {
        suiteSymbol='\u2666';
    }
   
else if(suite === 'clubs'){
    suiteSymbol='\u2660';
}

console.log(`suite symbol is ${suiteSymbol}`);
