var obj = document.body.getElementsByClassName("state");
obj[0].addEventListener("click", function(){
    var ans = prompt("In what state do you live?");
    if(ans == ""){
        alert("Where do you live?");
    }
    else {
        alert("You live in " + ans + "!");
    }
});
