const args = process.argv.slice(2);

let min = 1;
let max = 100;

if (args.length >= 2) {
     minNum = parseInt(args[0]);
     maxNum = parseInt(args[1]);
    if(!isNaN(min) && !isNaN(max) && min < max) 
        min = minNum;
        max = maxNum;
 }  
    
else{
    console.log('Rango inválido. Usando valores por defecto (1-100).  ');
} 
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`Número aleatorio entre: ${min} y ${max}: ${num}`);