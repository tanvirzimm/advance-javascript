function add(num2,num2){
    const all = [...arguments];
    
    return all.reduce((e,f) => e+f);
}


const result = add(2,3,10);

console.log(result);


