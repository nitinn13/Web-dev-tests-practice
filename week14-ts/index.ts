function timou(sum: () => void) {
    setTimeout(sum,5000);
}
function sum(num1: number, num2: number): void {
    console.log(num1+num2);
}
console.log("started");
timou(()=>sum(4,6));