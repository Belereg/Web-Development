const names = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"]

function create() {
    var createstuff = document.createElement("p");
    createstuff.innerHTML = "Clapping games!";
    document.getElementById("container").appendChild(createstuff);
}

function destroy() {
    var olddata = document.getElementById("container").lastChild;
    document.getElementById("container").removeChild(olddata);
}

function showDay() {
    var date = new Date();
    var what = Math.floor(Math.random() * 10)
    if (what > 5)
        alert("Congrats! TIME TO PLAY !");
    else
        alert("Maybe next time :( Try again!");
    document.getElementById("date").innerHTML = date.toLocaleTimeString();
}

function checkAdult(age) {
    return age < 18;
}

function checkAudience() {
    var ages = [];

    for (let i = 0; i < 10; i++)
        ages[i] = Math.floor(Math.random() * 20);

    document.getElementById("audienceButton").innerHTML = ages.every(checkAdult); //array
}

function checkNames() {
    if (names.includes("Alex")) //string
        document.getElementById("audienceButton2").innerHTML = "Here we are, Alex!";
    else
        document.getElementById("audienceButton2").innerHTML = "There is no Alex:(";
}

function checkNames2() {

    let check = 0;
    for (let name of names) //for of
        if (name == "Carl") {
            check = 1;
            break;
        }
    if (check)
        document.getElementById("audienceButton3").innerHTML = "Carl is here!";
    else
        document.getElementById("audienceButton3").innerHTML = "Carl is not here :(";
}

function orange() {
    var elem = document.getElementById("orange");
    var theCSSprop = window.getComputedStyle(elem, null).getPropertyValue("background-color");
    document.getElementById("showColor").innerHTML = theCSSprop;
}

function pink() {
    var elem = document.getElementById("pink");
    var theCSSprop = window.getComputedStyle(elem, null).getPropertyValue("background-color");
    document.getElementById("showColor").innerHTML = theCSSprop;
}

function violet() {
    var elem = document.getElementById("violet");
    var theCSSprop = window.getComputedStyle(elem, null).getPropertyValue("background-color");
    document.getElementById("showColor").innerHTML = theCSSprop;
}

function changeColorPink() {
    document.getElementById("pink").classList.remove("pink");
    document.getElementById("pink").classList.add("yellow");
}

function changeColorOrange() {
    document.getElementById("orange").className = "blue";
}

function changeColorViolet() {
    document.getElementById("violet").classList.replace("violet", "red");
}

function showCoords(event) {
    var x = event.pageX;
    var y = event.pageY;
    var coor = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("demo").innerHTML = coor;
}

function clearCoor() {
    document.getElementById("demo").innerHTML = "";
}

function prevent() {
    document.getElementById("stop").addEventListener("click", function (event) {
        event.preventDefault()
    });
}

function move() {
    var elem = document.getElementById("myBar2");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width == 100) {
            // clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';

        }
        document.getElementById("myBarText2").innerHTML = "Yeeey! Did you like it?! Rate below:";
    }
}

function movenot() {
    var elem = document.getElementById("myBar");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width == 100) {
            //clearInterval(id);
        } else {
            width += 0.5;
            elem.style.width = width + 'px';

        }
        document.getElementById("myBarText").innerHTML = "whoops,try this one";
    }
}

function feedback1() {
    var x = document.getElementById("myText").value;
    document.getElementById("fb1").innerHTML = "Thank you for your feedback! We will keep in mind that you considered this as " + x + "Now please do this feedback for us!:";
}

function feedback2() {
    document.getElementById("fb2").innerHTML = "No, you are pretty good!!";
}

function feedback3() {
    document.getElementById("fb3").innerHTML = "No, you are very good!!";
}

function feedback4() {
    document.getElementById("fb4").innerHTML = "No, you are amazing!!";
}

var a = document.getElementById("anc");
a.onclick = function () {
    var d = new Date();
    myObj = { "date": d.getDate(), "month": d.getMonth() + 1, "year": d.getFullYear(), "hour": d.getHours(), "minutes": d.getMinutes(), "seconds": d.getSeconds() };
    myJSON = JSON.stringify(myObj);
    localStorage.setItem(a.href, myJSON);
}
a.onmouseover = function () {
    text = localStorage.getItem(a.href);
    obj = JSON.parse(text);
    var p = document.getElementById("para");
    if (obj.minutes < 10 && obj.seconds < 10)
        p.innerHTML = "<strong>Data ultimei accesari:    </strong>" + obj.date + "." + obj.month + "." + obj.year + "  <strong> Ora:  </strong> " + obj.hour + ":0" + obj.minutes + ":0" + obj.seconds;
    else if (obj.minutes < 10)
        p.innerHTML = "<strong>Data ultimei accesari:    </strong>" + obj.date + "." + obj.month + "." + obj.year + "  <strong> Ora:  </strong> " + obj.hour + ":0" + obj.minutes + ":" + obj.seconds;
    else if (obj.seconds < 10)
        p.innerHTML = "<strong>Data ultimei accesari:    </strong>" + obj.date + "." + obj.month + "." + obj.year + "  <strong> Ora:  </strong> " + obj.hour + ":" + obj.minutes + ":0" + obj.seconds;
    else
        p.innerHTML = "<strong>Data ultimei accesari:    </strong>" + obj.date + "." + obj.month + "." + obj.year + "  <strong> Ora:  </strong> " + obj.hour + ":" + obj.minutes + ":" + obj.seconds;
}

var myVar = setInterval(myTimer, 1000,"BOO !!!");
var b=document.getElementById("b");
var b2=document.getElementById("b2");
function myTimer(param) {
    d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("t").innerHTML=param;
    document.getElementById("demo").innerHTML = t;
}
b.onclick=function(){
    clearInterval(myVar);
    
}
    
b2.onclick=function()
    {
        if(b.checked==false)
            alert("already pause, REALOOOAAD");
        b.checked=false;
        var myVar2 = setInterval(myTimer, 1000,"PEEKA");
        function myTimer(param) {
            d = new Date();
            var t = d.toLocaleTimeString();
            document.getElementById("t").innerHTML=param;
            document.getElementById("demo").innerHTML = t;
        } 

        b.onclick=function(){
            b2.checked=false;
            clearInterval(myVar2);
        }
    }