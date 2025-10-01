export function multiply(a, b) {
    return a * b;
}

export function divide(a, b) {
    if(b !== 0)
    return a / b;
else 
    throw new Error("Division by zero");
}