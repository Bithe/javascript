

for(let i=0;i<5;i++){
    console.log(i);
}
console.log('######');
for(let i=10; i>0; i--){
    console.log(i);
}

console.log('######');
let n=0;
for( ;n<6; n+=2){
    console.log(n);
}

console.log('n=',n);
console.log('######');

let k=0;
for(;k<6;){
    console.log(k);
    k++;
}

console.log('######');
let g=0;
do{
    console.log(g);
    g++;
}while(g<4);


console.log('######');
do{
    console.log('do this at least one',g);
}while(g<4);

console.log('######');

let notEnd=false;
while(notEnd)
{
    const number=Math.random();
    console.log(number);
    if(number<0.3){
        notEnd=false;
    }
}
console.log('######');


function hasNUmber(){
    return Math.random()<0.5;
}

while(hasNUmber()){
    console.log('here we go');
}


do{
    console.log('here we go while');
}while(hasNUmber());


let result='';
for(let row=0;row<5;row++){
    for (let column=0;column<5;column++){
        result+='*';
        console.log(row,column);
    }
    result+='\n';
}

console.log(result);