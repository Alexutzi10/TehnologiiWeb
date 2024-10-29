const privateCounter = (() => {
    let counter = 0;
    console.log('Initial value of the counter:', counter);

    return () => {
        counter++;
        console.log('Counter:', counter);
    }
})();

console.log(privateCounter);
privateCounter();
privateCounter();



const privateCounter2 = (() => {
    let counter = 0;
    console.log('Initial value of the counter:', counter);

    return {
        increment: () => {
            counter++;
            console.log('Current value of the counter:', counter);
        },
        decrement: () => {
            counter--;
            console.log('Current value of the counter:', counter);
        }
    }
})();

privateCounter2();
privateCounter2();