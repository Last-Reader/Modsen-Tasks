let i = 1;
function nuclear(){
    return new Promise(function(resolve){
        let launch = "Rocket #" + i + " launch!"
        setTimeout(() => resolve(launch), 1000);
        i++;
    })
}
function launchAllNuclear(){
    if(i < 6){
        nuclear().then(result => {(console.log(result))
        launchAllNuclear()});
    };
}
launchAllNuclear();