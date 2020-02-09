// var fs = require('fs');
// var data = fs.readFileSync('dummyfile.txt', 'utf8');
// console.log(data);

// var fs = require('fs');

// var fileName = '/dummyfile.txt';
// var stream = fs.createWriteStream(fileName);

// stream.once('open', function(fd) {
//   var html = buildHtml();

//   stream.end(html);
// var fs = require('fs');
// var http = require('http');
// var html = fs.readFileSync('dummyfile.txt', 'utf8');
// console.log(html);
var http=require('http') // folosim modulul 'http' k
var server=http.createServer( 

// functie anonima ce trateaza o cerere si trimite un raspuns
(function(request,response)
{
console.log("Am primit o cerere..");
response.writeHead(200, {"Content-Type" : "text/html"})
response.end('<html><body><h1 style="background-color:red;">SALUTARI COPII!!</h1></body></html>');
}));
server.listen(7000);
console.log ('Serverul creat asteapta cereri la http://localhost:7000/');
// var fs = require('fs');
// fs.readFile('test.json', function (err, data) {
//     if (err) throw err;
//     var json = JSON.parse(data); //transformare din string JSON într-un array JavaScript
//     fs.writeFileSync('test.html', '<html><body>');
//     fs.appendFileSync('test.html', '<link rel="stylesheet" href="styles.css"><link rel="icon" href="images/favicon.png" type="image/ico"><nav class="menu"><!-- <img class="logo__image logo__image" src="images/crontroller.png" alt="controller.png"> --><ul id="rel" class="menu__list"><li id="abs" class="menu__group_logo"><img src="images/crontroller.png" alt="controller.png" class="logo__image"></li><li class="menu__group"><a href="/mainPage.html" class="menu__link">Home Page</a></li><li class="menu__group"><a href="/handGames.html" class="menu__link">Hand Games</a></li><li class="menu__group"><a href="/appIndex.html" class="menu__link">Rock-Paper-Scissors</a></li><li class="menu__group"><a href="/others.html" class="menu__link">Otherss</a></li><li class="menu__group"><a href="/moreJS.html" class="menu__link">Features</a></li><li class="menu__group"><a href="/test.html" class="menu__link">nodeJS</a></li></ul></nav>');
//     for (var i = 0; i < json.length; i++)
//         fs.appendFileSync('test.html', '<img src=' + json[i].picture.source + '>');
//     fs.appendFileSync('test.html', '</html></body>');
//     console.log('Operatie completa.');
// });
