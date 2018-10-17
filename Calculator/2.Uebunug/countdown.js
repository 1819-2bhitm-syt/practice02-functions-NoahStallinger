let logTick = true;
let counter = 10;

let timer = setInterval(() => {
    console.log(counter);
    counter--;
}, 1000);

setTimeout(() => {
    clearInterval(timer);
}, counter * 1000 + 100);