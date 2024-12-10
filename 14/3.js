function RoomHappy(obj){
    let value = 0;
    let middScore = 0;
    let j = 0;
    let arr = Object.entries(obj);
    for (let i = 0; i < arr.length; i++){
        if (arr[i][0] == "Boss" || arr[i][0] == "boss"){
            value += arr[i][1] * 2;
        }
        else{
            value += arr[i][1];    
        }
    }
    middScore = value / arr.length;
    if (middScore <= 5){
        return "Run, Forest, run!";
    }
    else {
        return "All good, you are champion!";
    }
}
const myTeam = {
    Alice: 9,
    Bob: 2,
    Paul: 5,
    Boss: 4,
};
console.log(RoomHappy(myTeam));