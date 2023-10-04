// 1 - What to wear
function clothing(temperature) {
    if (temperature >= 25) {
        return "Wear a football shirt and a pair of shorts.";
    }
    else if (temperature >= 10 && temperature < 15) {
        return "Take a jacket and a sweater on that would be comfortable.";
    }
    else if (temperature < 10) {
        return "Wear some clothes that would keep you warm, it's cold outside.";
    }
    else {
        return "I'm not sure what to suggets."
    }
}
console.log(clothing(10));

// 2 - Dice game
function simulateDiceRoll(numRolls) {
    for (let i = 0; i < numRolls; i++) {
        const rollResult = Math.floor(Math.random() * 6) + 1;
        if (rollResult === 6) {
            console.log("You just hit 6!");
        }
        console.log(`Roll ${i+1}: ${rollResult}`);
    }
}

simulateDiceRoll(4);