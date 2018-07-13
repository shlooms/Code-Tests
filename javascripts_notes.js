var favcar="audi";
if(favcar=="Benz") {
    alert("your fave care is benz")
}
else {
    prompt("What is your favorite car?", "")
}

var name="shlomo";
if (name=="drew") {
    var FutureAlert = "Hello, Drew"
}
else if (name=="shlomo")
{
    var FutureAlert = "Hello, Shlomo"
}
else
    {
        var FutureAlert = "hello guest"
    }
alert(FutureAl// 6.3 = float
// 555 = integer
//"sallay" stringert);

      //switch variable to switch the comparison to different case
var name = "shlomo"; // else if(name=="shlomo") {}
switch(name) 
    {
        case "Bob":
            alert("your name is bob");
        break;
            case "joe":
            alert("your name is joe");
        break;
            case "jose":
            alert("your name is jose"); // string of text
        break;
        default:
           prompt("what is your name?", "");
        break;
    }

//functions
function fname(name1, name2) /*(param1, param2, paramETC)*/ 
{
    alert(name1 + " is the first name\n" + // \n = new line
            name2 + " is the second name");
}
fname("shlomo", "josh")

//complex functions with if and else
//functions 
function fname(name1, name2) /*(param1, param2, paramETC)*/ 
{
    if(name1==undefined || name2==undefined) 
    {
        var message = "Missing one parameter";
    }
    else
    {
        var message = name1 + " is the first name\n" + 
                      name2 + " is the second name";
}
    alert(message);
}
fname("shlomo", "k");

//return functions 
function AddThis(num1, num2, num3, num4)
{
    var total = num1 * num2 - num3 + num4;
    return total;
}
alert(AddThis(1, 2, 3, 4));

//
function NameOrAge(type, value)
{
    type=type.toLowerCase();
    if(type=="age")
        {
    return value + value; //addition arithmatic
            }
    else if (type=="name")
        {
            //to conjugate, create a new variable
            //then return the vatiable
            var newString = "your name is " + value;
            return newString;
        }
    else
        {
            return 'type did not match "age"" or "name"'
        }
}
alert(NameOrAge("something", "something else"))

//functions
function parents(p)
{

    alert("My parents are " + p);
}
parents("mom and dad")

//break
function Name() //function within HTML tied to the button onclick
{
    alert("Shlomo");
}

//dbl click
function DblClick(txt)
{
    alert(txt);
}

//<input type="text" onfocus="hi();" value='' /> this plus
function hi()
{
    alert("you are focused");
}
          //= alert when someone clicks on text box

// onMouseDown when you click down on your mouse but don't release it
/* onMouseUp when you release the mouse after clicking
Click is both mousedown and mouseup 
onMouseMove
onKeyPress full key press and release
onKeyDown key pressed down but not released
onKeyUp key released from being pressed down
*/ 
  // <a href="javascript: void(0);" target="_blank">HEllo</a> <!--blank link-->

/* How to change the background on click to blue

<div id='myDiv' onclick="changeBG();">Change to blue</div>
        <script>
         function changeBG() { document.getElementById('myDiv').style.backgroundColor = "blue"; 
            }
        </script>
        */ 

/* Escape me function 
var EscapeMe = "the cow jumped over the moon!?";
            document.write(escape(EscapeMe));

                var UnescapeMe = "the%20cow%20jumped%20over%20the%20moon%21%3F";
            document.write(unescape(UnescapeMe));
*/

function MouseOver()
{
    alert("just mousing around")
}


var MyId = document.getElementById("MyId");
MyId.value="JS put this value in here";
 
document.getElementById("test1).innerHTML = "<b>New html in here</b>"

var EscapeMe = "the cow jumped over the moon!?";
            trying.write(escape(EscapeMe));

//multi array 
//<script> 
           var MultiAr = [[1, 2, 3], ["Joe", "Bill", "Bob"]];
             alert(MultiAr[1][1] + " is " + MultiAr[0][1]);
           // </script>

// looping code 
for (i = 0; i < 15; i++)
    {
        document.write("looped " + i + " times <br>")
    }

// array plus loop
var MyArray = ["audi", "benz", "bmw"];
for(v in MyArray)//v=value
    {
    document.write(v + "<br>");
    }
for(v in MyArray)
    {
        document.write(MyArray[v] + "<br>");
    }
    
// while loops
var myNumber = 0; 
while(myNumber < 3) {
    document.write(myNumber);
    myNumber++;
}

var ten = 10; 
while(ten > 0) {
    document.write("<br>", ten);
    ten--;
}
//do while loops
var i = 0; 
do {
    document.write(i + " is the integer number <br>" )
    i++
}
while(i < 3); 

//breaking out of loops
var num = 0;
while(num<99) {
    alert(num);
    if(num==0) {
        break;
    }
}


             for(i = 1; i < 10; i++;) {
    document.write(i + " is your pizza order number");
    if(i==5) {
        break;
    }
}
        

var friendFeed = ["feed 1", "feed2", "feed3", "feed4"];
for(index in friendFeed) {
    document.write(friendFeed[index] + "<hr>");
    if(index==3) {
        break;
    }
}

//continues a loop cycle by skipping the if variable
for(i = 1; i <= 5; i++) {
    if(i==3) {
        continue;
    }
    document.write("The number is " + i + "<br>")
}

//split
var myString = "The quick brown fox beats up the little children";
var splitMe = myString.split(" ");
document.write("Here is the array: <br>");
for(index in splitMe) {
    document.write(splitMe[index] + ", ")
}

//substring
var StringMy = "I love this website";
document.write(StringMy.substr(0, 12) + "The complete booty");

document.write("Pizza is okay i guess" + StringMy.substr(7) + " is too");