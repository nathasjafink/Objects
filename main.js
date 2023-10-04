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

// 2 - Dice game part 1 & part 2
function simulateDiceRoll(numRolls) {
    let jackpot = 0
    for (let i = 0; i < numRolls; i++) {
        const rollResult = Math.floor(Math.random() * 6) + 1;
        if (rollResult === 6) {
            console.log("You just hit 6!");
            jackpot += 1
        }
        if (jackpot === numRolls) {
            console.log("Jackpot 🎉");
        }
        console.log(`Roll ${i+1}: ${rollResult}`);
    }
}

simulateDiceRoll(1);

// 3 - Build a sentiment analyzer
function sentimentAnalyzer(sentence) {
    const postiveWords = ["happy","joyful","nice","awesome","super"];
    const negativeWords =  ["hate","sad","bothered","sad","bad"];
    const words = sentence.toLowerCase().split(" ");
    let score = 0;
    const foundPostiveWords = [];
    const foundNegativeWords = [];
    words.forEach((word) => {
        if (postiveWords.includes(word)) {
            score += 1;
            foundPostiveWords.push(word);
        } else if (negativeWords.includes(word)) {
            score -= 1;
            foundNegativeWords.push(word);
        }
    });
    return {
           score: score,
           postiveWords: foundPostiveWords,
           negativeWords: foundNegativeWords
       };

}
const sentence1 = "I am mega super happy.";
const sentence2 = "I was really bothered today and i really hate this day."

const result1 = sentimentAnalyzer(sentence1);
const result2 = sentimentAnalyzer(sentence2);

console.log(result1);
console.log(result2);

