// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore;
let scoresStart;
// Start coding here
for(let i=0;i<scores.length;i=i+1){
    if(scoresStart>scores[i]){
        minScore=scores[i];
    }
    scoresStart=scores[i];

}
console.log(minScore);
