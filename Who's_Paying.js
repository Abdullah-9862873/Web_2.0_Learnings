
var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying(names){
    var num = Math.floor(Math.random()*(names.length));

    console.log(names[num] + " is going to buy lunch today");
}

whosPaying(names);