const suite=Math.floor(Math.random()*4);
const rank=Math.floor(Math.random()*13)+1;

console.log(`${getSuiteSymbol(suite)} ${rank}`);

console.log(`${getSuiteSymbol(2)}`);

function getSuiteSymbol(tmpSuite){
    switch(tmpSuite){
        case 0: return'\u2665';
    
        case 1: return'\u2665';
    
        case 2: return'\u2665';
    
        case 3: return'\u2665';

    }
}