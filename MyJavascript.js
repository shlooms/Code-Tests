// this is my comment on my javascript file
/* so many cool ways of commenting,,, woah */ 

//throw
var Name = prompt("input your name:");
try {
    var leng = Name.length; // length of a usersname
    if(leng > 5) {
        throw "Long Name";
    } else if(leng < 5) {
        throw "Short Name";
    } else {
        throw "5 letter name";
    }
}
catch(e) {
    alert(e);
}