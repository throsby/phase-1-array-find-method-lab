// code your solution here
function superbowlWin(record){
    const wins = record.find((el) => {if (el.result === "W") {
        return el.year;
    };
    });
    // console.log([wins])
    if (wins != undefined){
        return String(wins.year)
    }
    else{
        return undefined
    }
}

