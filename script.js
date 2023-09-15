function init(){
    const name = prompt("Welcome to GC mini golf! What is your name?");
    const numHoles = Number( prompt(`Hi ${name}! Would you like to play 3 or 6 holes today?`));
    const par = numHoles === 6 ? 18 : 9;
    let putts = 0;

    console.log({par, numHoles})
    for (let i = 0; i < numHoles; i++) {
        putts += Number(prompt(`How many putts for hole ${i+1}? (par is ${par})`));
        console.log({putts})
        // The last hole
        if (i + 1 === numHoles) {
            if (putts > par) {
                console.log(`Nice try, ${name}... Your total par was: +${putts - par}`);
            } else if (putts === par) {
                console.log(`Good game, ${name}! Your total par was 0`);
            } else {
                console.log(`Great job, ${name}! Your total par was ${putts - par}`);
            }
        }
    }
}

init();